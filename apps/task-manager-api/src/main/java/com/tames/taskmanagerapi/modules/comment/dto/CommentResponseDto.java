package com.tames.taskmanagerapi.modules.comment.dto;

public record CommentResponseDto(
    Long id,

    String content,

    String author
) { }
