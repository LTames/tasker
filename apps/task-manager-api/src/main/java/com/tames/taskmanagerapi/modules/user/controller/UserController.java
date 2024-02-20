package com.tames.taskmanagerapi.modules.user.controller;

import com.tames.taskmanagerapi.modules.user.dto.UpdateUserRequestDto;
import com.tames.taskmanagerapi.modules.user.dto.UserResponseDto;
import com.tames.taskmanagerapi.modules.user.service.UserService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@Tag(name = "Users")
@SecurityRequirement(name = "JWT")
@RequestMapping("/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/me")
    public ResponseEntity<UserResponseDto> getAuthenticatedUser(Authentication authentication) {
        return new ResponseEntity<>(userService.getUserByUsername(authentication.getName()), HttpStatus.OK);
    }

    @PutMapping()
    public ResponseEntity<UserResponseDto> updateUser(@Valid @RequestBody UpdateUserRequestDto updateUserRequestDto, Authentication authentication) {
        return new ResponseEntity<>(userService.updateUser(updateUserRequestDto, authentication.getName()), HttpStatus.OK);
    }
}
