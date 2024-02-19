package com.tames.taskmanagerapi.modules.auth.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;

public record LoginRequestDto (
    @NotBlank(message = "Username is required.")
    @Schema(example = "johnDoe06")
    String username,

    @NotBlank(message = "Password is required.")
    @Schema(example = "12345")
    String password
) { }
