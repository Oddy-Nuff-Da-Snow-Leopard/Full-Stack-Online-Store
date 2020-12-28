import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductInfo } from 'src/app/models/productInfo';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {

  product = new ProductInfo();

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  productId: string;
  isEdit = false;

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');
    if (this.productId) {
      this.isEdit = true;
      this.productService.getDetail(this.productId).subscribe(prod => this.product = prod);
    }

  }

  onSubmit() {
    this.add();
  }

  add() {
    this.productService.create(this.product).subscribe(prod => {
      if (!prod) throw new Error;
      this.router.navigate(['/']);
    },
      e => {
      });
  }

  ngAfterContentChecked(): void {
    console.log(this.product);
  }
}
