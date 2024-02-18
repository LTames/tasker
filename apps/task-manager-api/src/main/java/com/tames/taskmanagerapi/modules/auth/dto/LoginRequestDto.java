package com.tames.taskmanagerapi.modules.auth.dto;

public record LoginRequestDto (
    String username,
    String password
) { }
