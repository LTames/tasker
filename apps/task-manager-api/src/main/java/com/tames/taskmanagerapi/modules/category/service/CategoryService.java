package com.tames.taskmanagerapi.modules.category.service;

import com.tames.taskmanagerapi.modules.category.dto.CategoryResponseDto;
import com.tames.taskmanagerapi.modules.category.dto.CategoryRequestDto;
import com.tames.taskmanagerapi.modules.category.entity.Category;
import com.tames.taskmanagerapi.modules.category.exception.CategoryNotFoundException;
import com.tames.taskmanagerapi.modules.category.mapper.CategoryMapper;
import com.tames.taskmanagerapi.modules.category.repository.CategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {
    private final CategoryRepository categoryRepository;
    private final CategoryMapper categoryMapper;

    public CategoryService(CategoryRepository categoryRepository, CategoryMapper categoryMapper) {
        this.categoryRepository = categoryRepository;
        this.categoryMapper = categoryMapper;
    }

    public CategoryResponseDto getCategoryById(Long id) {
        Category category = categoryRepository.findById(id).orElseThrow(() -> new CategoryNotFoundException(id));
        return categoryMapper.toDto(category);
    }

    public List<CategoryResponseDto> getAllCategories() {
        return categoryRepository.findAll().stream().map(categoryMapper::toDto).toList();
    }

    public CategoryResponseDto createCategory(CategoryRequestDto categoryRequestDto) {
        Category newCategory = categoryMapper.toEntity(categoryRequestDto);
        return categoryMapper.toDto(categoryRepository.save(newCategory));
    }

    public CategoryResponseDto updateCategory(CategoryRequestDto categoryRequestDto, Long id) {
        Category category = categoryRepository.findById(id).orElseThrow(() -> new CategoryNotFoundException(id));
        Category updatedCategory = categoryMapper.toEntity(categoryRequestDto);

        category.setName(updatedCategory.getName());
        category.setColor(updatedCategory.getColor());

        return categoryMapper.toDto(categoryRepository.save(category));
    }

    public void deleteCategoryById(Long id) {
        categoryRepository.findById(id).orElseThrow(() -> new CategoryNotFoundException(id));
        categoryRepository.deleteById(id);
    }
}
