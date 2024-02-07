package com.tames.taskmanagerapi.shared.controller;

import com.tames.taskmanagerapi.shared.dto.ApiResponseDto;
import jakarta.persistence.EntityNotFoundException;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.Instant;
import java.util.List;

@RestControllerAdvice()
public class RestExceptionHandler {

    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity<ApiResponseDto> handleEntityNotFound(EntityNotFoundException e, HttpServletRequest req) {
        return buildApiResponse(HttpStatus.NOT_FOUND, e.getMessage(), req.getServletPath());
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ApiResponseDto> handleArgumentNotValidException(MethodArgumentNotValidException e,
            HttpServletRequest req) {
        List<String> errors = e.getBindingResult().getFieldErrors()
                .stream()
                .map(DefaultMessageSourceResolvable::getDefaultMessage)
                .toList();

        return buildApiResponse(HttpStatus.BAD_REQUEST, "Invalid request body", req.getServletPath(), errors);
    }

    private ResponseEntity<ApiResponseDto> buildApiResponse(HttpStatus status, String message, String instance) {
        List<String> errors = List.of(status.getReasonPhrase());

        ApiResponseDto response = new ApiResponseDto(Instant.now(), message, status.value(), errors, instance);
        return new ResponseEntity<>(response, status);
    }

    private ResponseEntity<ApiResponseDto> buildApiResponse(HttpStatus status, String message, String instance,
            List<String> errors) {
        ApiResponseDto response = new ApiResponseDto(Instant.now(), message, status.value(), errors, instance);
        return new ResponseEntity<>(response, status);
    }
}
