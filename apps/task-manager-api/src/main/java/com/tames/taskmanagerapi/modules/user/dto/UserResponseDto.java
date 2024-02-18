package com.tames.taskmanagerapi.modules.user.dto;

public record UserResponseDto(
    String username,
    String firstName,
    String lastName
) {
}
