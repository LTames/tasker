package com.tames.taskmanagerapi.modules.category.mapper;

import com.tames.taskmanagerapi.modules.category.dto.CategoryResponseDto;
import com.tames.taskmanagerapi.modules.category.dto.CategoryRequestDto;
import com.tames.taskmanagerapi.modules.category.entity.Category;
import org.springframework.stereotype.Component;

@Component
public class CategoryMapper {
    public CategoryResponseDto toDto(Category category) {
        return new CategoryResponseDto(
            category.getId(),
            category.getName(),
            category.getColor()
        );
    }

    public Category toEntity(CategoryRequestDto categoryRequestDto) {
        return new Category(
            categoryRequestDto.name(),
            categoryRequestDto.color()
        );
    }
}
