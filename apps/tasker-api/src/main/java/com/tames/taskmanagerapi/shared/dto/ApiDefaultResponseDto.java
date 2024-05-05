package com.tames.taskmanagerapi.shared.dto;

import io.swagger.v3.oas.annotations.media.Schema;

import java.time.Instant;

public record ApiDefaultResponseDto(

    @Schema(example = "Entity not found")
    String message,

    @Schema(example = "404")
    Integer status,

    @Schema(example = "/tasks/1")
    String instance,

    @Schema(example = "Task not found with id: 1")
    String detail,

    Instant timestamp
) { }

