package com.tames.taskmanagerapi.modules.task.controller;

import com.tames.taskmanagerapi.modules.task.dto.TaskRequestDto;
import com.tames.taskmanagerapi.modules.task.dto.TaskResponseDto;
import com.tames.taskmanagerapi.modules.task.entity.Task;
import com.tames.taskmanagerapi.modules.task.service.TaskService;
import com.tames.taskmanagerapi.shared.dto.ApiResponseDto;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.headers.Header;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.tags.Tags;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

@RestController
@Tag(name = "Tasks")
@RequestMapping("/tasks")
public class TaskController {
    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping()
    @Operation(summary = "List all tasks", description = "Retrieve a list of all tasks created in the system.")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Successfully retrieved list of tasks", content = @Content(array = @ArraySchema(schema = @Schema(implementation = TaskResponseDto.class))))
    })
    public ResponseEntity<List<TaskResponseDto>> getAllTasks() {
        return new ResponseEntity<>(taskService.getAllTasks(), HttpStatus.OK);
    }

    @GetMapping("{id}")
    @Operation(summary = "Get a task by its ID", description = "Retrieve detailed information about a specific task using its unique identifier.")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Successfully retrieved task", content = @Content(schema = @Schema(implementation = TaskResponseDto.class))),
        @ApiResponse(responseCode = "404", description = "Task not found", content = @Content(schema = @Schema(implementation = ApiResponseDto.class)))
    })
    public ResponseEntity<TaskResponseDto> getTaskById(@PathVariable("id") Long taskId) {
        return new ResponseEntity<>(taskService.getTaskById(taskId), HttpStatus.OK);
    }

    @PostMapping()
    @Operation(summary = "Create a new task", description = "Create a new task with the provided details.")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "201", description = "Task created successfully", content = @Content(schema = @Schema(implementation = TaskResponseDto.class)))
    })
    public ResponseEntity<TaskResponseDto> createTask(@RequestBody() TaskRequestDto body, UriComponentsBuilder ucb) {
        TaskResponseDto task = taskService.createTask(body);
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(ucb.path("tasks/{id}").buildAndExpand(task.id()).toUri());

        return new ResponseEntity<>(task, headers, HttpStatus.CREATED);
    }

    @PutMapping("{id}")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Task updated successfully", content = @Content(schema = @Schema(implementation = TaskResponseDto.class))),
        @ApiResponse(responseCode = "404", description = "Task not found", content = @Content(schema = @Schema(implementation = ApiResponseDto.class)))
    })
    @Operation(summary = "Update an existing task", description = "Update the details of an existing task using its unique identifier.")
    public ResponseEntity<TaskResponseDto> updateTask(@PathVariable("id") Long taskId, @RequestBody() TaskRequestDto body) {
        return new ResponseEntity<>(taskService.updateTask(taskId, body), HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    @Operation(summary = "Delete a task by its ID", description = "Delete a specific task using its unique identifier.")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "204", description = "Deleted with success"),
        @ApiResponse(responseCode = "404", description = "Task not found", content = @Content(schema = @Schema(implementation = ApiResponseDto.class)))
    })
    public ResponseEntity<Void> deleteTaskById(@PathVariable("id") Long taskId) {
        taskService.deleteTaskById(taskId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
