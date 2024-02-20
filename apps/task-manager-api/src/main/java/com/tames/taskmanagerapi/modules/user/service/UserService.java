package com.tames.taskmanagerapi.modules.user.service;

import com.tames.taskmanagerapi.modules.user.dto.UpdateUserRequestDto;
import com.tames.taskmanagerapi.modules.user.dto.UserRequestDto;
import com.tames.taskmanagerapi.modules.user.dto.UserResponseDto;
import com.tames.taskmanagerapi.modules.user.entity.User;
import com.tames.taskmanagerapi.modules.user.exception.UserNotFoundException;
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

    public UserResponseDto getUserByUsername(String username) {
        User user = findUserByUsername(username);
        return userMapper.toDto(user);
    }

    public UserResponseDto updateUser(UpdateUserRequestDto updateUserRequestDto, String username) {
         User userToUpdate = findUserByUsername(username);

         userToUpdate.setFirstName(updateUserRequestDto.firstName());
         userToUpdate.setLastName(updateUserRequestDto.lastName());

         return userMapper.toDto(userRepository.save(userToUpdate));
    }

    private User findUserByUsername(String username) {
        return userRepository
            .findByUsername(username)
            .orElseThrow(() -> new UserNotFoundException("User not found with username: " + username));
    }
}
