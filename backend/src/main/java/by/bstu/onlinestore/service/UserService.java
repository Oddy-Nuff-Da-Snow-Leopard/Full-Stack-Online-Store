package by.bstu.onlinestore.service;


import by.bstu.onlinestore.entity.User;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

public interface UserService {

    User findOne(String email);

    Collection<User> findByRole(String role);

    User save(User user);

    User update(User user);

    List<User> findAll();

    Optional<User> findById(Long userId);

    void delete(User user);
}
