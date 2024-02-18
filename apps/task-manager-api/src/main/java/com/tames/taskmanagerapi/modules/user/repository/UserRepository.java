package com.tames.taskmanagerapi.modules.user.repository;

import com.tames.taskmanagerapi.modules.user.entity.User;
import org.springframework.data.repository.ListCrudRepository;

import java.util.Optional;

public interface UserRepository extends ListCrudRepository<User, Long> {
    Optional<User> findByUsername(String username);
}
