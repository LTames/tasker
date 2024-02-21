package com.tames.taskmanagerapi.modules.category.controller;

import com.tames.taskmanagerapi.modules.category.dto.CategoryRequestDto;
import com.tames.taskmanagerapi.modules.category.dto.CategoryResponseDto;
import com.tames.taskmanagerapi.modules.category.service.CategoryService;
import com.tames.taskmanagerapi.shared.dto.ApiDefaultResponseDto;
import com.tames.taskmanagerapi.shared.dto.ApiValidationResponseDto;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.ArraySchema;
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
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

@RestController
@Tag(name = "Categories")
@SecurityRequirement(name = "JWT")
@RequestMapping("/categories")
public class CategoryController {
    private final CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }


    @GetMapping()
    @Operation(summary = "Get all categories", description = "Retrieve a list of all categories.")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Successfully retrieved categories.", content = @Content(array = @ArraySchema(schema = @Schema(implementation = CategoryResponseDto.class))))
    })
    public ResponseEntity<List<CategoryResponseDto>> getCategories() {
        return new ResponseEntity<>(categoryService.getAllCategories(), HttpStatus.OK);
    }

    @GetMapping("{id}")
    @Operation(summary = "Get category by ID", description = "Retrieve a category by its ID.")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Successfully retrieved the category.", content = @Content(schema = @Schema(implementation = CategoryResponseDto.class))),
        @ApiResponse(responseCode = "404", description = "Category not found.", content = @Content(schema = @Schema(implementation = ApiDefaultResponseDto.class)))
    })
    @Parameter(name = "id", description = "Category id", example = "1")
    public ResponseEntity<CategoryResponseDto> getCategoryById(@PathVariable("id") Long categoryId) {
        return new ResponseEntity<>(categoryService.getCategoryById(categoryId), HttpStatus.OK);
    }

    @PostMapping()
    @Operation(summary = "Create a new category", description = "Create a new category.")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "201", description = "Category created successfully.", content = @Content(schema = @Schema(implementation = CategoryResponseDto.class))),
        @ApiResponse(responseCode = "400", description = "Invalid request body", content = @Content(schema = @Schema(implementation = ApiValidationResponseDto.class))),
    })
    public ResponseEntity<CategoryResponseDto> createCategory(@Valid @RequestBody CategoryRequestDto body, UriComponentsBuilder ucb) {
        CategoryResponseDto createdCategory = categoryService.createCategory(body);
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(ucb.path("/categories/{id}").buildAndExpand(createdCategory.id()).toUri());

        return new ResponseEntity<>(createdCategory, headers, HttpStatus.CREATED);
    }

    @PutMapping("{id}")
    @Operation(summary = "Update category by ID", description = "Update an existing category by its ID.")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Category updated successfully.", content = @Content(schema = @Schema(implementation = CategoryResponseDto.class))),
        @ApiResponse(responseCode = "404", description = "Category not found.", content = @Content(schema = @Schema(implementation = ApiDefaultResponseDto.class))),
        @ApiResponse(responseCode = "400", description = "Invalid request body", content = @Content(schema = @Schema(implementation = ApiValidationResponseDto.class))),
    })
    @Parameter(name = "id", description = "Category id", example = "1")
    public ResponseEntity<CategoryResponseDto> updateCategory(@Valid @RequestBody CategoryRequestDto body, @PathVariable("id") Long categoryId) {
        return new ResponseEntity<>(categoryService.updateCategory(body, categoryId), HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    @Operation(summary = "Delete category by ID", description = "Delete a category by its ID.")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "204", description = "Category deleted successfully."),
        @ApiResponse(responseCode = "404", description = "Category not found.", content = @Content(schema = @Schema(implementation = ApiDefaultResponseDto.class)))
    })
    @Parameter(name = "id", description = "Category id", example = "1")
    public ResponseEntity<Void> deleteCategoryById(@PathVariable("id") Long categoryId) {
        categoryService.deleteCategoryById(categoryId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
