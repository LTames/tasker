package com.tames.taskmanagerapi.modules.user.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
public record UserRequestDto(
    @NotBlank(message = "Username is required.")
    @Schema(example = "johnDoe06")
    String username,

    @NotBlank(message = "Password is required.")
    @Schema(example = "12345")
    String password,

    @NotBlank(message = "First name is required.")
    @Schema(example = "John")
    String firstName,

    @NotBlank(message = "Last name is required.")
    @Schema(example = "Doe")
    String lastName
) {
}
