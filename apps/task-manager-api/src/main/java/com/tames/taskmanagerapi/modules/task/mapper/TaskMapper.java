package com.tames.taskmanagerapi.modules.task.mapper;

import com.tames.taskmanagerapi.modules.task.dto.TaskRequestDto;
import com.tames.taskmanagerapi.modules.task.dto.TaskResponseDto;
import com.tames.taskmanagerapi.modules.task.entity.Task;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@Component
public class TaskMapper {
    private static final DateTimeFormatter dueDateFormatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");

    public TaskResponseDto toDto(Task task) {
        return new TaskResponseDto(
            task.getId(),
            task.getDescription(),
            task.getTitle(),
            dueDateFormatter.format(task.getDueDate())
        );
    }

    public Task toEntity(TaskRequestDto taskRequestDto) {
        return new Task(
          taskRequestDto.description(),
          taskRequestDto.title(),
          LocalDate.parse(taskRequestDto.dueDate(), dueDateFormatter)
        );
    }
}
