package com.tames.taskmanagerapi.shared.controller;

import com.tames.taskmanagerapi.shared.dto.ApiDefaultResponseDto;
import com.tames.taskmanagerapi.shared.dto.ApiValidationResponseDto;
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
    public ResponseEntity<ApiDefaultResponseDto> handleEntityNotFound(EntityNotFoundException e, HttpServletRequest req) {
        ApiDefaultResponseDto response = new ApiDefaultResponseDto(
            "Entity not found",
            HttpStatus.NOT_FOUND.value(),
            req.getServletPath(),
            e.getMessage(),
            Instant.now()
        );

        return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ApiValidationResponseDto> handleArgumentNotValidException(MethodArgumentNotValidException e, HttpServletRequest req) {
        List<String> fieldErrors = e.getBindingResult().getFieldErrors()
                .stream()
                .map(DefaultMessageSourceResolvable::getDefaultMessage)
                .toList();

        ApiValidationResponseDto response = new ApiValidationResponseDto(
            "Invalid request body",
            HttpStatus.BAD_REQUEST.value(),
            req.getServletPath(),
            fieldErrors,
            Instant.now()
        );

        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }
}
