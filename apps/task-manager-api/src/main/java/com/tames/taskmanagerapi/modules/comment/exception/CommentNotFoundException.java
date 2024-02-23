package com.tames.taskmanagerapi.modules.comment.exception;

import jakarta.persistence.EntityNotFoundException;

public class CommentNotFoundException extends EntityNotFoundException {
    public CommentNotFoundException(Long id) {
        super("Comment not found with id: " + id);
    }
    public CommentNotFoundException(String message){
        super(message);
    }
}
