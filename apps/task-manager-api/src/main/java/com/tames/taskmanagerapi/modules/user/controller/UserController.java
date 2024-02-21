package com.tames.taskmanagerapi.modules.user.controller;

import com.tames.taskmanagerapi.modules.auth.dto.AuthResponseDto;
import com.tames.taskmanagerapi.modules.user.dto.UpdateUserRequestDto;
import com.tames.taskmanagerapi.modules.user.dto.UserResponseDto;
import com.tames.taskmanagerapi.modules.user.service.UserService;
import com.tames.taskmanagerapi.shared.dto.ApiValidationResponseDto;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
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
    @Operation(summary = "Get authenticated user", description = "Retrieves information about the currently authenticated user")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Successfully retrieved user information", content = @Content(schema = @Schema(implementation = AuthResponseDto.class))),
    })
    public ResponseEntity<UserResponseDto> getAuthenticatedUser(Authentication authentication) {
        return new ResponseEntity<>(userService.getUserByUsername(authentication.getName()), HttpStatus.OK);
    }

    @PutMapping()
    @Operation(summary = "Update user information", description = "Updates information for the authenticated user")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "User information successfully updated", content = @Content(schema = @Schema(implementation = AuthResponseDto.class))),
        @ApiResponse(responseCode = "400", description = "Invalid request body", content = @Content(schema = @Schema(implementation = ApiValidationResponseDto.class)))
    })
    public ResponseEntity<UserResponseDto> updateUser(@Valid @RequestBody UpdateUserRequestDto updateUserRequestDto, Authentication authentication) {
        return new ResponseEntity<>(userService.updateUser(updateUserRequestDto, authentication.getName()), HttpStatus.OK);
    }
}
