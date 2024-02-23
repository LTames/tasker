package com.tames.taskmanagerapi.modules.comment.mapper;

import com.tames.taskmanagerapi.modules.comment.dto.CommentRequestDto;
import com.tames.taskmanagerapi.modules.comment.dto.CommentResponseDto;
import com.tames.taskmanagerapi.modules.comment.entity.Comment;
import com.tames.taskmanagerapi.modules.task.entity.Task;
import com.tames.taskmanagerapi.modules.user.entity.User;
import org.springframework.stereotype.Component;

@Component
public class CommentMapper {
    public CommentResponseDto toDto(Comment comment) {
        return new CommentResponseDto(comment.getId(), comment.getContent(), comment.getAuthor().getUsername());
    }

    public Comment toEntity(CommentRequestDto commentRequestDto, User currentUser, Task currentTask) {
        return new Comment(commentRequestDto.content(), currentUser, currentTask);
    }
}
