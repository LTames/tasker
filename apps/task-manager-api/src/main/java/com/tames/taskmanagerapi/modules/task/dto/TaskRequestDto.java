package com.tames.taskmanagerapi.modules.task.dto;


import com.tames.taskmanagerapi.modules.task.enums.Priority;
import com.tames.taskmanagerapi.modules.task.enums.Status;
import com.tames.taskmanagerapi.shared.validation.DateValidator;
import com.tames.taskmanagerapi.shared.validation.EnumValidator;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.util.List;

public record TaskRequestDto(
    @NotBlank(message = "Description is required.")
    @Schema(example = "This is my task description")
    String description,

    @NotBlank(message = "Title is required.")
    @Schema(example = "This is my task title")
    String title,

    @NotBlank(message = "Due date is required.")
    @DateValidator(dateFormat = "yyyy-MM-dd", message = "Invalid date format. Please provide the date in the format yyyy-MM-dd.")
    @Schema(example = "2024-01-31", format = "date")
    String dueDate,

    @NotBlank(message = "Status is required.")
    @EnumValidator(enumClass = Status.class, message = "Given status is not valid.")
    @Schema(implementation = Status.class)
    String status,

    @NotBlank(message = "Priority is required.")
    @EnumValidator(enumClass = Priority.class, message = "Given priority is not valid.")
    @Schema(implementation = Priority.class)
    String priority,

    @NotNull(message = "An array of category IDs is required.")
    @ArraySchema(arraySchema = @Schema(example = "[1, 2]"))
    List<Long> categoryIds
) {

}
