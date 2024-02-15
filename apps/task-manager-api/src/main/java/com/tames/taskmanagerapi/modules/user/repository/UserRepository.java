package com.tames.taskmanagerapi.modules.user.repository;

import com.tames.taskmanagerapi.modules.user.entity.User;
import org.springframework.data.repository.ListCrudRepository;

public interface UserRepository extends ListCrudRepository<User, Long> {
}
