package com.tames.taskmanagerapi.modules.task.dto;


public record TaskRequestDto(
    String description,

    String title,

    String dueDate,

    String status,

    String priority
) {

}
