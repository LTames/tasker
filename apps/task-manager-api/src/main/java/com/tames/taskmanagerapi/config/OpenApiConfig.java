package com.tames.taskmanagerapi.config;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.security.SecurityScheme;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI openAPI() {
        return new OpenAPI()
                .components(createComponents())
                .info(createInfo());
    }

    private static Components createComponents() {
        return new Components()
                .addSecuritySchemes("JWT", createSecurityScheme());
    }

    private static SecurityScheme createSecurityScheme() {
        return new SecurityScheme()
                .type(SecurityScheme.Type.HTTP)
                .scheme("bearer")
                .bearerFormat("JWT");
    }

    private static Info createInfo() {
        return new Info()
                .title("Task Manager API")
                .description("API for managing tasks in a Task Manager application.")
                .version("1.0.0");
    }
}
