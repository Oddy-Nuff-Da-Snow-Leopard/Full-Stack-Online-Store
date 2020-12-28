package by.bstu.onlinestore.repository;

import by.bstu.onlinestore.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;


public interface CartRepository extends JpaRepository<Cart, Integer> {

}
