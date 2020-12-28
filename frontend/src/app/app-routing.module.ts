import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './pages/card/card.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DetailComponent } from './pages/product-detail/detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { AuthGuard } from "./_guards/auth.guard";
import { OrderComponent } from "./pages/order/order.component";
import { OrderDetailComponent } from "./pages/order-detail/order-detail.component";
import { ProductListComponent } from "./pages/product-list/product.list.component";
import { UserDetailComponent } from "./pages/user-edit/user-detail.component";
import { ProductEditComponent } from "./pages/product-edit/product-edit.component";
import { Role } from "./enum/Role";
import { UserListComponent } from './pages/user-list/user-list.component';
import { SearchComponent } from './pages/search/search.component';
import { ProductNewComponent } from './pages/product-new/product-new.component';

const routes: Routes = [
    { path: '', redirectTo: '/product', pathMatch: 'full' },
    { path: 'product/:id', component: DetailComponent },
    { path: 'category/:id', component: CardComponent },
    { path: 'product', component: CardComponent },
    { path: 'category', component: CardComponent },
    { path: 'search', component: SearchComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LoginComponent },
    { path: 'register', component: SignupComponent },
    { path: 'cart', component: CartComponent },
    { path: 'success', component: SignupComponent },
    { path: 'order/:id', component: OrderDetailComponent, canActivate: [AuthGuard] },
    { path: 'order', component: OrderComponent, canActivate: [AuthGuard] },
    { path: 'seller', redirectTo: 'seller/product', pathMatch: 'full' },
    {
        path: 'seller/product',
        component: ProductListComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Manager, Role.Employee] }
    },
    {
        path: 'profile',
        component: UserDetailComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'seller/product/new',
        component: ProductNewComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Manager, Role.Employee] }
    },
    {
        path: 'seller/product/:id/edit',
        component: ProductEditComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Manager, Role.Employee] }
    },
    {
        path: 'seller/users',
        canActivate: [AuthGuard],
        component: UserListComponent,
        data: { roles: [Role.Manager] }
    },
    // { path: 'add', component: CreateEmployeeComponent },
    // { path: 'update/:id', component: UpdateEmployeeComponent },
    // { path: 'details/:id', component: EmployeeDetailsComponent },

];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)//{onSameUrlNavigation: 'reload'}
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
