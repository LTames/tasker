package com.tames.taskmanagerapi.modules.task.service;

import com.tames.taskmanagerapi.modules.task.dto.TaskRequestDto;
import com.tames.taskmanagerapi.modules.task.dto.TaskResponseDto;
import com.tames.taskmanagerapi.modules.task.dto.TaskStatusRequestDto;
import com.tames.taskmanagerapi.modules.task.entity.Task;
import com.tames.taskmanagerapi.modules.task.enums.Status;
import com.tames.taskmanagerapi.modules.task.exception.TaskNotFoundException;
import com.tames.taskmanagerapi.modules.task.mapper.TaskMapper;
import com.tames.taskmanagerapi.modules.task.repository.TaskRepository;
import com.tames.taskmanagerapi.modules.user.service.UserService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {
    private final TaskRepository taskRepository;
    private final UserService userService;
    private final TaskMapper taskMapper;

    public TaskService(TaskRepository taskRepository, TaskMapper taskMapper, UserService userService) {
        this.taskRepository = taskRepository;
        this.taskMapper = taskMapper;
        this.userService = userService;
    }

    public List<TaskResponseDto> getAllTasks() {
        return taskRepository.findAll().stream().map(taskMapper::toDto).toList();
    }

    public TaskResponseDto getTaskById(Long id) {
        Task task = findTaskEntityById(id);
        return taskMapper.toDto(task);
    }

    public TaskResponseDto createTask(TaskRequestDto taskRequestDTO, String currentUser) {
        Task task = taskRepository
                .save(taskMapper.toEntity(taskRequestDTO, userService.getUserEntityByUsername(currentUser)));
        return taskMapper.toDto(task);
    }

    public TaskResponseDto updateTask(Long id, TaskRequestDto taskRequestDto, String currentUser) {
        Task task = findTaskEntityById(id);
        Task updateData = taskMapper.toEntity(taskRequestDto, userService.getUserEntityByUsername(currentUser));

        task.setDescription(updateData.getDescription());
        task.setTitle(updateData.getTitle());
        task.setDueDate(updateData.getDueDate());
        task.setPriority(updateData.getPriority());
        task.setStatus(updateData.getStatus());

        return taskMapper.toDto(taskRepository.save(task));
    }

    public TaskResponseDto updateTaskStatus(Long id, TaskStatusRequestDto taskStatusRequestDto) {
        Task task = findTaskEntityById(id);

        Status newTaskStatus = Status.valueOf(taskStatusRequestDto.status());
        task.setStatus(newTaskStatus);

        return taskMapper.toDto(taskRepository.save(task));
    }

    public void deleteTaskById(Long id) {
        taskRepository.delete(findTaskEntityById(id));
    }

    public Task findTaskEntityById(Long id) {
        return taskRepository.findById(id).orElseThrow(() -> new TaskNotFoundException(id));
    }
}
