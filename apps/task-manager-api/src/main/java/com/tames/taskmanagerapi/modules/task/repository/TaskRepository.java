package com.tames.taskmanagerapi.modules.task.repository;

import com.tames.taskmanagerapi.modules.task.entity.Task;
import org.springframework.data.repository.ListCrudRepository;

public interface TaskRepository extends ListCrudRepository<Task, Long> {
}
