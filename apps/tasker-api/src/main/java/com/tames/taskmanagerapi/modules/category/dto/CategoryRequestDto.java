package com.tames.taskmanagerapi.modules.category.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

public record CategoryRequestDto(
    @NotBlank(message = "Name is required.")
    @Schema(example = "This is my category name")
    String name,

    @NotBlank(message = "Color is required.")
    @Pattern(regexp = "^#[0-9a-fA-F]{6}$", message = "Invalid color format. Please provide a valid hexadecimal color code")
    @Schema(example = "#FF03BB")
    String color
) {
}
