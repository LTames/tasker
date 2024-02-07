package com.tames.taskmanagerapi.modules.task.dto;

import com.tames.taskmanagerapi.modules.category.dto.CategoryResponseDto;
import com.tames.taskmanagerapi.modules.task.enums.Priority;
import com.tames.taskmanagerapi.modules.task.enums.Status;
import io.swagger.v3.oas.annotations.media.Schema;

import java.time.LocalDate;
import java.util.List;

public record TaskResponseDto(

    @Schema(example = "1")
    Long id,

    @Schema(example = "This is my task description")
    String description,

    @Schema(example = "This is my task title")
    String title,

    @Schema(example = "2024-01-31")
    LocalDate dueDate,

    Status status,

    Priority priority,

    List<CategoryResponseDto> categories
) {}

