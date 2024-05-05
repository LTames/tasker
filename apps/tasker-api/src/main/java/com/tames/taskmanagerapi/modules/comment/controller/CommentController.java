package com.tames.taskmanagerapi.modules.comment.controller;

import com.tames.taskmanagerapi.modules.comment.dto.CommentRequestDto;
import com.tames.taskmanagerapi.modules.comment.dto.CommentResponseDto;
import com.tames.taskmanagerapi.modules.comment.service.CommentService;
import com.tames.taskmanagerapi.shared.dto.ApiDefaultResponseDto;
import com.tames.taskmanagerapi.shared.dto.ApiValidationResponseDto;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.Parameters;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;

@RestController
@Tag(name = "Comments")
@SecurityRequirement(name = "JWT")
@RequestMapping("/{taskId}/comments")
public class CommentController {
    private final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @Operation(summary = "Create a comment for a task", description = "Creates a new comment associated with the specified task",
        responses = {
            @ApiResponse(responseCode = "400", description = "Invalid request body", content = @Content(schema = @Schema(implementation = ApiValidationResponseDto.class))),
            @ApiResponse(responseCode = "201", description = "Comment created succesfully", content = @Content(schema = @Schema(implementation = CommentResponseDto.class))),
        },
        parameters = {
            @Parameter(name = "taskId", description = "Task id", example = "1")
        }
    )
    @PostMapping()
    public ResponseEntity<CommentResponseDto> createTaskComment(
        @Valid @RequestBody CommentRequestDto commentRequestDto,
        @PathVariable("taskId") Long taskId,
        Authentication auth,
        UriComponentsBuilder ucb
    ) {
        CommentResponseDto createdComment = commentService.createComment(commentRequestDto, auth.getName(), taskId);
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(ucb.path("/{taskId}/comments/{commentId}").buildAndExpand(taskId, createdComment.id()).toUri());

        return new ResponseEntity<>(createdComment, headers, HttpStatus.CREATED);
    }


    @Operation(summary = "Update a comment for a task", description = "Updates an existing comment associated with the specified task",
        responses = {
            @ApiResponse(responseCode = "400", description = "Invalid request body", content = @Content(schema = @Schema(implementation = ApiValidationResponseDto.class))),
            @ApiResponse(responseCode = "400", description = "Comment not associated with task", content = @Content(schema = @Schema(implementation = ApiDefaultResponseDto.class))),
            @ApiResponse(responseCode = "403", description = "Forbidden to update comment", content = @Content(schema = @Schema(implementation = ApiDefaultResponseDto.class))),
            @ApiResponse(responseCode = "404", description = "Comment not found", content = @Content(schema = @Schema(implementation = ApiDefaultResponseDto.class))),
            @ApiResponse(responseCode = "200", description = "Comment updated successfully", content = @Content(schema = @Schema(implementation = CommentResponseDto.class))),
        },
        parameters = {
            @Parameter(name = "taskId", description = "Task id", example = "1"),
            @Parameter(name = "commentId", description = "Comment id", example = "1")
        }
    )
    @PutMapping("/{commentId}")
    public ResponseEntity<CommentResponseDto> updateTaskComment(
        @Valid @RequestBody CommentRequestDto commentRequestDto,
        @PathVariable("taskId") Long taskId,
        @PathVariable("commentId") Long commentId,
        Authentication auth
    ) {
        return new ResponseEntity<>(commentService.updateComment(commentRequestDto, auth.getName(), taskId, commentId), HttpStatus.OK);
    }


    @Operation(summary = "Delete a comment for a task", description = "Deletes an existing comment associated with the specified task",
        responses = {
            @ApiResponse(responseCode = "400", description = "Comment not associated with task", content = @Content(schema = @Schema(implementation = ApiDefaultResponseDto.class))),
            @ApiResponse(responseCode = "403", description = "Forbidden to update comment", content = @Content(schema = @Schema(implementation = ApiDefaultResponseDto.class))),
            @ApiResponse(responseCode = "404", description = "Comment not found", content = @Content(schema = @Schema(implementation = ApiDefaultResponseDto.class))),
            @ApiResponse(responseCode = "204", description = "Comment deleted successfully", content = @Content),
        },
        parameters = {
            @Parameter(name = "taskId", description = "Task id", example = "1"),
            @Parameter(name = "commentId", description = "Comment id", example = "1")
        }
    )
    @DeleteMapping("/{commentId}")
    public ResponseEntity<Void> deleteTaskCommentById(
        @PathVariable("taskId") Long taskId,
        @PathVariable("commentId") Long commentId,
        Authentication auth
    ) {
        commentService.deleteComment(auth.getName(), taskId, commentId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
