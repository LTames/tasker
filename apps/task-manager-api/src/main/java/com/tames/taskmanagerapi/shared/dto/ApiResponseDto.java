package com.tames.taskmanagerapi.shared.dto;

import java.time.Instant;

public record ApiResponseDto(
    Instant timestamp,
    String message,
    Integer status,
    String error,
    String instance
) { }

