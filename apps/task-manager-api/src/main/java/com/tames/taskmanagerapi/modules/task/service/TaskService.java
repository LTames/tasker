package com.tames.taskmanagerapi.modules.task.service;

import com.tames.taskmanagerapi.modules.task.dto.TaskRequestDto;
import com.tames.taskmanagerapi.modules.task.dto.TaskResponseDto;
import com.tames.taskmanagerapi.modules.task.entity.Task;
import com.tames.taskmanagerapi.modules.task.exception.TaskNotFoundException;
import com.tames.taskmanagerapi.modules.task.mapper.TaskMapper;
import com.tames.taskmanagerapi.modules.task.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {
    private final TaskRepository taskRepository;
    private final TaskMapper taskMapper;

    public TaskService(TaskRepository taskRepository, TaskMapper taskMapper) {
        this.taskRepository = taskRepository;
        this.taskMapper = taskMapper;
    }

    public List<TaskResponseDto> getAllTasks()  {
        return taskRepository.findAll().stream().map(taskMapper::toDto).toList();
    }

    public TaskResponseDto getTaskById(Long id) {
        Task task = findTaskById(id);
        return taskMapper.toDto(task);
    }

    public TaskResponseDto createTask(TaskRequestDto taskRequestDTO)  {
        Task task = taskRepository.save(taskMapper.toEntity(taskRequestDTO));
        return taskMapper.toDto(task);
    }

    public TaskResponseDto updateTask(Long id, TaskRequestDto taskRequestDto) {
        Task task = findTaskById(id);
        Task updateData = taskMapper.toEntity(taskRequestDto);

        task.setDescription(updateData.getDescription());
        task.setTitle(updateData.getTitle());
        task.setDueDate(updateData.getDueDate());
        task.setPriority(updateData.getPriority());
        task.setStatus(updateData.getStatus());

        return taskMapper.toDto(taskRepository.save(task));
    }

    public void deleteTaskById(Long id) {
        findTaskById(id);

        taskRepository.deleteById(id);
    }

    private Task findTaskById(Long id) {
        return taskRepository.findById(id).orElseThrow(() -> new TaskNotFoundException(id));
    }
}
