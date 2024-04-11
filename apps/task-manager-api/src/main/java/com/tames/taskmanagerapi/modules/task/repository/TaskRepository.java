package com.tames.taskmanagerapi.modules.task.repository;

import com.tames.taskmanagerapi.modules.task.entity.Task;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TaskRepository extends JpaRepository<Task, Long> {
    @Override
    @EntityGraph(value = "Task.ALL", type = EntityGraph.EntityGraphType.LOAD)
    List<Task> findAll();

    @Override
    @EntityGraph(value = "Task.ALL", type = EntityGraph.EntityGraphType.LOAD)
    Optional<Task> findById(Long id);
}
