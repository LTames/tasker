package com.tames.taskmanagerapi.modules.task.mapper;

import com.tames.taskmanagerapi.modules.category.mapper.CategoryMapper;
import com.tames.taskmanagerapi.modules.category.repository.CategoryRepository;
import com.tames.taskmanagerapi.modules.comment.mapper.CommentMapper;
import com.tames.taskmanagerapi.modules.task.dto.TaskRequestDto;
import com.tames.taskmanagerapi.modules.task.dto.TaskResponseDto;
import com.tames.taskmanagerapi.modules.task.entity.Task;
import com.tames.taskmanagerapi.modules.task.enums.Priority;
import com.tames.taskmanagerapi.modules.task.enums.Status;
import com.tames.taskmanagerapi.modules.user.entity.User;
import com.tames.taskmanagerapi.modules.user.mapper.UserMapper;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.stream.Collectors;

@Component
public class TaskMapper {
    private static final DateTimeFormatter dueDateFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
    private final CategoryMapper categoryMapper;
    private final CommentMapper commentMapper;
    private final UserMapper userMapper;
    private final CategoryRepository categoryRepository;

    public TaskMapper(CategoryMapper categoryMapper, CommentMapper commentMapper, UserMapper userMapper, CategoryRepository categoryRepository) {
        this.categoryMapper = categoryMapper;
        this.commentMapper = commentMapper;
        this.userMapper = userMapper;
        this.categoryRepository = categoryRepository;
    }

    public TaskResponseDto toDto(Task task) {
        return new TaskResponseDto(
            task.getId(),
            task.getDescription(),
            task.getTitle(),
            task.getDueDate(),
            task.getStatus(),
            task.getPriority(),
            task.getCategories().stream().map(categoryMapper::toDto).toList(),
            task.getComments().stream().map(commentMapper::toDto).toList(),
            userMapper.toDto(task.getTaskAuthor())
        );
    }

    public Task toEntity(TaskRequestDto taskRequestDto, User currentUser) {
        Task task = new Task(
            taskRequestDto.description(),
            taskRequestDto.title(),
            LocalDate.parse(taskRequestDto.dueDate(), dueDateFormatter),
            Status.valueOf(taskRequestDto.status()),
            Priority.valueOf(taskRequestDto.priority()),
            currentUser
        );

        task.setCategories(taskRequestDto.categoryIds().stream().map(categoryRepository::getReferenceById).collect(Collectors.toSet()));

        return task;
    }
}
