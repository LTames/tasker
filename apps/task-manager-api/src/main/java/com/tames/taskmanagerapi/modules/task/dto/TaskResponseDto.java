package com.tames.taskmanagerapi.modules.task.dto;

import java.time.LocalDate;

public record TaskResponseDto(
    Long id,
    String description,
    String title,
    String dueDate
) {}

