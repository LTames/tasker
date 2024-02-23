package com.tames.taskmanagerapi.modules.comment.repository;

import com.tames.taskmanagerapi.modules.comment.entity.Comment;
import org.springframework.data.jpa.repository.EntityGraph;
import static org.springframework.data.jpa.repository.EntityGraph.EntityGraphType.LOAD;
import org.springframework.data.repository.ListCrudRepository;

import java.util.Optional;

public interface CommentRepository extends ListCrudRepository<Comment, Long> {
    @Override
    @EntityGraph(value = "Comment.ALL", type = LOAD)
    Optional<Comment> findById(Long id);

}
