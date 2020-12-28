package by.bstu.onlinestore.service;

import by.bstu.onlinestore.entity.ProductInOrder;
import by.bstu.onlinestore.entity.User;

public interface ProductInOrderService {
    void update(String itemId, Integer quantity, User user);
    ProductInOrder findOne(String itemId, User user);
}
