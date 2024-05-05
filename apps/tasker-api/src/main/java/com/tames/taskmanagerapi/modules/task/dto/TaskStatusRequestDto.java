package com.tames.taskmanagerapi.modules.task.dto;

import com.tames.taskmanagerapi.modules.task.enums.Status;
import com.tames.taskmanagerapi.shared.validation.EnumValidator;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;

public record TaskStatusRequestDto(
        @NotBlank(message = "Status is required.") @EnumValidator(enumClass = Status.class, message = "Given status is not valid.") @Schema(implementation = Status.class) String status) {
}
