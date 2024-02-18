package com.tames.taskmanagerapi.modules.user.service;

import com.tames.taskmanagerapi.modules.user.dto.UserRequestDto;
import com.tames.taskmanagerapi.modules.user.entity.User;
import com.tames.taskmanagerapi.modules.user.mapper.UserMapper;
import com.tames.taskmanagerapi.modules.user.repository.UserRepository;
import org.springframework.stereotype.Service;


@Service
public class UserService {
    private final UserRepository userRepository;
    private final UserMapper userMapper;

    public UserService(UserRepository userRepository, UserMapper userMapper) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
    }

    public void registerNewUser(UserRequestDto userRequestDto) {
        userRepository.save(userMapper.toEntity(userRequestDto));
    }
}
