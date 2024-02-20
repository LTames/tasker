package com.tames.taskmanagerapi.modules.user.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;

public record UpdateUserRequestDto(
    @NotBlank(message = "First name is required.")
    @Schema(example = "John")
    String firstName,

    @NotBlank(message = "Last name is required.")
    @Schema(example = "Doe")
    String lastName
) {}
