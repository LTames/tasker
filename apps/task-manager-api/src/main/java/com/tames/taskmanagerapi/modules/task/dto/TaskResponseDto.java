package com.tames.taskmanagerapi.modules.task.dto;

import com.tames.taskmanagerapi.modules.task.enums.Priority;
import com.tames.taskmanagerapi.modules.task.enums.Status;

import java.time.LocalDate;

public record TaskResponseDto(
    Long id,
    String description,
    String title,
    String dueDate,
    Status status,
    Priority priority
) {}

