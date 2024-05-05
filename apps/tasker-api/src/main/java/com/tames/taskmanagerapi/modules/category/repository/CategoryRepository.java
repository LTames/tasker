package com.tames.taskmanagerapi.modules.category.repository;

import com.tames.taskmanagerapi.modules.category.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
