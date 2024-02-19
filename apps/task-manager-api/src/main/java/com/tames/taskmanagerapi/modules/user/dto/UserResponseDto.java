package com.tames.taskmanagerapi.modules.user.dto;

import io.swagger.v3.oas.annotations.media.Schema;

public record UserResponseDto(
    @Schema(example = "johnDoe06")
    String username,

    @Schema(example = "John")
    String firstName,

    @Schema(example = "Doe")
    String lastName
) {
}
