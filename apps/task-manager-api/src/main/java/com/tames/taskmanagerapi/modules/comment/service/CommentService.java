package com.tames.taskmanagerapi.modules.comment.service;

import com.tames.taskmanagerapi.modules.comment.dto.CommentRequestDto;
import com.tames.taskmanagerapi.modules.comment.dto.CommentResponseDto;
import com.tames.taskmanagerapi.modules.comment.entity.Comment;
import com.tames.taskmanagerapi.modules.comment.exception.InvalidCommentTaskAssociationException;
import com.tames.taskmanagerapi.modules.task.entity.Task;
import com.tames.taskmanagerapi.modules.comment.exception.CommentNotFoundException;
import com.tames.taskmanagerapi.modules.task.exception.TaskNotFoundException;
import com.tames.taskmanagerapi.modules.comment.mapper.CommentMapper;
import com.tames.taskmanagerapi.modules.comment.repository.CommentRepository;
import com.tames.taskmanagerapi.modules.task.repository.TaskRepository;
import com.tames.taskmanagerapi.modules.task.service.TaskService;
import com.tames.taskmanagerapi.modules.user.entity.User;
import com.tames.taskmanagerapi.modules.user.service.UserService;
import com.tames.taskmanagerapi.shared.exception.ForbiddenException;
import org.springframework.stereotype.Service;

@Service
public class CommentService {
    private final CommentRepository commentRepository;
    private final TaskService taskService;
    private final CommentMapper commentMapper;
    private final UserService userService;

    public CommentService(CommentRepository commentRepository, CommentMapper commentMapper,TaskService taskService, UserService userService) {
        this.commentRepository = commentRepository;
        this.commentMapper = commentMapper;
        this.taskService = taskService;
        this.userService = userService;
    }

    public CommentResponseDto createComment(CommentRequestDto commentRequestDto, String currentUser, Long taskId) {
        Task task = taskService.findTaskEntityById(taskId);
        User user = userService.getUserEntityByUsername(currentUser);
        Comment comment = commentMapper.toEntity(commentRequestDto, user, task);

        return commentMapper.toDto(commentRepository.save(comment));
    }

    public CommentResponseDto updateComment(CommentRequestDto commentRequestDto, String currentUser, Long taskId, Long commentId) {
        User user = userService.getUserEntityByUsername(currentUser);
        Comment comment = getCommentEntityById(commentId);
        validateCommentOwnership(comment, user);

        Task task = taskService.findTaskEntityById(taskId);
        validateCommentPresenceInTask(comment, task);

        comment.setContent(commentRequestDto.content());

        return commentMapper.toDto(commentRepository.save(comment));
    }

    public void deleteComment(String currentUser, Long taskId, Long commentId) {
        User user = userService.getUserEntityByUsername(currentUser);
        Comment comment = getCommentEntityById(commentId);
        validateCommentOwnership(comment, user);

        Task task = taskService.findTaskEntityById(taskId);
        validateCommentPresenceInTask(comment, task);

        commentRepository.delete(comment);
    }

    private Comment getCommentEntityById(Long commentId) {
        return commentRepository.findById(commentId).orElseThrow(() -> new CommentNotFoundException(commentId));
    }

    private void validateCommentPresenceInTask(Comment comment, Task task) {
        if (!comment.getTask().getId().equals(task.getId())) {
            throw new InvalidCommentTaskAssociationException(comment.getId(), task.getId());
        }
    }

    private void validateCommentOwnership(Comment comment, User currentUser) {
        if (!currentUser.getUsername().equals(comment.getAuthor().getUsername())) {
            throw new ForbiddenException("User is not allowed to delete comment with id: " + comment.getId());
        }
    }
}
