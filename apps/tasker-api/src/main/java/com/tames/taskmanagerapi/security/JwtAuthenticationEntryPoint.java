package com.tames.taskmanagerapi.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.tames.taskmanagerapi.shared.dto.ApiDefaultResponseDto;
import com.tames.taskmanagerapi.shared.dto.ApiValidationResponseDto;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.oauth2.core.OAuth2Error;
import org.springframework.security.oauth2.jwt.BadJwtException;
import org.springframework.security.oauth2.jwt.JwtValidationException;
import org.springframework.security.oauth2.server.resource.web.BearerTokenAuthenticationEntryPoint;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.time.Instant;
import java.util.List;

@Component
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {
    private final AuthenticationEntryPoint delegate = new BearerTokenAuthenticationEntryPoint();
    private final ObjectMapper mapper;

    public JwtAuthenticationEntryPoint(ObjectMapper mapper) {
        this.mapper = mapper;
    }

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {
        delegate.commence(request, response, authException);

        if (authException.getCause() instanceof BadJwtException badJwtException) {
            ApiValidationResponseDto body = new ApiValidationResponseDto(
                "Invalid token",
                HttpStatus.UNAUTHORIZED.value(),
                request.getServletPath(),
                extractErrors(badJwtException),
                Instant.now()
            );

            mapper.writeValue(response.getWriter(), body);
        }
    }

    private List<String> extractErrors(BadJwtException badJwtException) {
        if (badJwtException instanceof JwtValidationException validationException) {
            return validationException.getErrors()
                .stream()
                .map(OAuth2Error::getDescription)
                .toList();
        }
        return List.of(badJwtException.getMessage());
    }

}
