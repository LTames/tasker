package com.tames.taskmanagerapi.modules.user.dto;

public record UserRequestDto(
    String username,
    String password,
    String firstName,
    String lastName
) {
}
