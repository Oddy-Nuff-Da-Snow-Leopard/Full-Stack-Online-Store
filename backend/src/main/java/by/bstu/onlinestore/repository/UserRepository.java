package by.bstu.onlinestore.repository;


import by.bstu.onlinestore.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);

    Collection<User> findAllByRole(String role);
}
