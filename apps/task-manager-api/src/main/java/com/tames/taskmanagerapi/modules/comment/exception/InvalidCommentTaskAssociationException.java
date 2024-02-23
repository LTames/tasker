package com.tames.taskmanagerapi.modules.comment.exception;

public class InvalidCommentTaskAssociationException extends RuntimeException {
    public InvalidCommentTaskAssociationException(Long commentId, Long taskId) {
        super("Comment with id: " + commentId + ", does not belong to task with id: " + taskId);
    }

    public InvalidCommentTaskAssociationException(String message) {
        super(message);
    }
}
