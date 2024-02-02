package com.tames.taskmanagerapi.shared.controller;

import com.tames.taskmanagerapi.modules.task.exception.TaskNotFoundException;
import com.tames.taskmanagerapi.shared.dto.ApiResponseDto;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

import java.lang.reflect.Array;
import java.time.Instant;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.function.IntFunction;

@RestControllerAdvice()
public class RestExceptionHandler {

    @ExceptionHandler(TaskNotFoundException.class)
    public ResponseEntity<ApiResponseDto> handleTaskNotFound(TaskNotFoundException e, HttpServletRequest req) {
        return buildApiResponse(HttpStatus.NOT_FOUND, e.getMessage(), req.getServletPath());
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ApiResponseDto> handleArgumentNotValidException(MethodArgumentNotValidException e, HttpServletRequest req) {
         List<String> errors = e.getBindingResult().getFieldErrors()
             .stream()
             .map(DefaultMessageSourceResolvable::getDefaultMessage)
             .toList();

        return buildApiResponse(HttpStatus.BAD_REQUEST, "Invalid request body", req.getServletPath(), errors);
    }

    private ResponseEntity<ApiResponseDto> buildApiResponse(HttpStatus status, String message, String instance) {
        List<String> errors = List.of(status.getReasonPhrase());

        ApiResponseDto response = new ApiResponseDto(Instant.now(), message, status.value(), errors , instance);
        return new ResponseEntity<>(response, status);
    }

     private ResponseEntity<ApiResponseDto> buildApiResponse(HttpStatus status, String message, String instance, List<String> errors) {
        ApiResponseDto response = new ApiResponseDto(Instant.now(), message, status.value(), errors, instance);
        return new ResponseEntity<>(response, status);
    }
}
