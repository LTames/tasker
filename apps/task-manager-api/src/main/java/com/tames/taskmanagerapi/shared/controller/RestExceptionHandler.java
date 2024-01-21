package com.tames.taskmanagerapi.shared.controller;

import com.tames.taskmanagerapi.modules.task.exception.TaskNotFoundException;
import com.tames.taskmanagerapi.shared.dto.ApiResponseDto;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.Instant;

@RestControllerAdvice()
public class RestExceptionHandler {

    @ExceptionHandler(TaskNotFoundException.class)
    public ResponseEntity<ApiResponseDto> handleTaskNotFound(TaskNotFoundException e, HttpServletRequest req) {
        return buildApiResponse(HttpStatus.NOT_FOUND, e.getMessage(), req.getServletPath());
    }

    private ResponseEntity<ApiResponseDto> buildApiResponse(HttpStatus status, String message, String instance) {
        ApiResponseDto response = new ApiResponseDto(Instant.now(), message, status.value(), status.getReasonPhrase(), instance);
        return new ResponseEntity<>(response, status);
    }
}
