package com.tames.taskmanagerapi.shared.dto;

import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Schema;

import java.time.Instant;
import java.util.List;

public record ApiValidationResponseDto(
    @Schema(example = "Invalid request body")
    String message,

    @Schema(example = "400")
    Integer status,

    @Schema(example = "/tasks")
    String instance,

    @ArraySchema(arraySchema = @Schema(example = "[\"First name is required.\", \"Last name is required.\"]"))
    List<String> fieldErrors,

    Instant timestamp
) {}
