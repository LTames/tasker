package com.tames.taskmanagerapi.modules.user.mapper;

import com.tames.taskmanagerapi.modules.user.dto.UserRequestDto;
import com.tames.taskmanagerapi.modules.user.dto.UserResponseDto;
import com.tames.taskmanagerapi.modules.user.entity.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {
    private final PasswordEncoder passwordEncoder;

    public UserMapper(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    public User toEntity(UserRequestDto userRequestDto) {
        return new User(
            userRequestDto.username(),
            passwordEncoder.encode(userRequestDto.password()),
            userRequestDto.firstName(),
            userRequestDto.lastName()
        );
    }

    public UserResponseDto toDto(User user) {
        return new UserResponseDto(
            user.getId(),
            user.getUsername(),
            user.getFirstName(),
            user.getLastName()
        );
    }
}
