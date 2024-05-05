package com.tames.taskmanagerapi.modules.auth.service;

import com.tames.taskmanagerapi.modules.auth.dto.AuthResponseDto;
import com.tames.taskmanagerapi.modules.auth.dto.LoginRequestDto;
import com.tames.taskmanagerapi.modules.user.dto.UserRequestDto;
import com.tames.taskmanagerapi.modules.user.entity.User;
import com.tames.taskmanagerapi.modules.user.mapper.UserMapper;
import com.tames.taskmanagerapi.modules.user.repository.UserRepository;
import com.tames.taskmanagerapi.modules.user.service.UserService;
import com.tames.taskmanagerapi.security.JwtService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final UserService userService;

    public AuthService(JwtService jwtService, AuthenticationManager authenticationManager, UserService userService) {
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
        this.userService = userService;
    }

    public AuthResponseDto login(LoginRequestDto loginRequestDto) {
        return authenticateUser(loginRequestDto.username(), loginRequestDto.password());
    }

    public AuthResponseDto register(UserRequestDto userRequestDto)  {
        userService.registerNewUser(userRequestDto);
        return authenticateUser(userRequestDto.username(), userRequestDto.password());
    }

    private AuthResponseDto authenticateUser(String username, String password)  {
        Authentication authentication = authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(username, password)
        );
        return new AuthResponseDto(jwtService.generateToken(authentication));
    }
}
