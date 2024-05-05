package com.tames.taskmanagerapi.modules.category.dto;

import io.swagger.v3.oas.annotations.media.Schema;

public record CategoryResponseDto(
    @Schema(example = "1")
    Long id,

    @Schema(example = "This is my category name")
    String name,

    @Schema(example = "#FF03BB")
    String color
) {
}
