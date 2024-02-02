package com.tames.taskmanagerapi.shared.dto;

import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Schema;

import java.time.Instant;
import java.util.List;

public record ApiResponseDto(
    Instant timestamp,

    @Schema(example = "Task not found with id: 1")
    String message,

    @Schema(example = "404")
    Integer status,

    @ArraySchema(schema = @Schema(example = "Not found"))
    List<String> errors,

    @Schema(example = "/tasks/1")
    String instance
) { }

