package com.tames.taskmanagerapi.modules.auth.controller;

import com.tames.taskmanagerapi.modules.auth.dto.AuthResponseDto;
import com.tames.taskmanagerapi.modules.auth.dto.LoginRequestDto;
import com.tames.taskmanagerapi.modules.auth.service.AuthService;
import com.tames.taskmanagerapi.modules.user.dto.UserRequestDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {
    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponseDto> login(@RequestBody LoginRequestDto loginRequestDto) {

        return new ResponseEntity<>(authService.login(loginRequestDto), HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity<AuthResponseDto> register(@RequestBody UserRequestDto userRequestDto) {
        return new ResponseEntity<>(authService.register(userRequestDto), HttpStatus.OK);
    }


}
