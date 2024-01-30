package com.tames.taskmanagerapi.modules.task.dto;

import java.time.LocalDate;

public record TaskRequestDto(
    String description,
    String title,
    String dueDate,
    String status,
    String priority
) {

}
