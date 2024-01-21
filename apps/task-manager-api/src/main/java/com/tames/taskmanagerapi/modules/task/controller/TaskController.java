package com.tames.taskmanagerapi.modules.task.controller;

import com.tames.taskmanagerapi.modules.task.dto.TaskRequestDto;
import com.tames.taskmanagerapi.modules.task.dto.TaskResponseDto;
import com.tames.taskmanagerapi.modules.task.service.TaskService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

@RestController
@RequestMapping("/tasks")
public class TaskController {
    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping()
    public ResponseEntity<List<TaskResponseDto>> getAllTasks() {
        return new ResponseEntity<>(taskService.getAllTasks(), HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<TaskResponseDto> getTaskById(@PathVariable("id") Long taskId) {
        return new ResponseEntity<>(taskService.getTaskById(taskId), HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<TaskResponseDto> createTask(@RequestBody() TaskRequestDto body, UriComponentsBuilder ucb) {
        TaskResponseDto task = taskService.createTask(body);
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(ucb.path("tasks/{id}").buildAndExpand(task.id()).toUri());

        return new ResponseEntity<>(task, headers, HttpStatus.CREATED);
    }

    @PutMapping("{id}")
    public ResponseEntity<TaskResponseDto> updateTask(@PathVariable("id") Long taskId, @RequestBody() TaskRequestDto body) {
        return new ResponseEntity<>(taskService.updateTask(taskId, body), HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteTaskById(@PathVariable("id") Long taskId) {
        taskService.deleteTaskById(taskId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
