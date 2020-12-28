package by.bstu.onlinestore.service;

import by.bstu.onlinestore.entity.Cart;
import by.bstu.onlinestore.entity.ProductInOrder;
import by.bstu.onlinestore.entity.User;

import java.util.Collection;

public interface CartService {
    Cart getCart(User user);

    void mergeLocalCart(Collection<ProductInOrder> productInOrders, User user);

    void delete(String itemId, User user);

    void checkout(User user);
}
