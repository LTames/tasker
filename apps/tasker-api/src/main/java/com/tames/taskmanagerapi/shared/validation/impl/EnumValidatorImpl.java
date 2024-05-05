package com.tames.taskmanagerapi.shared.validation.impl;

import com.tames.taskmanagerapi.shared.validation.EnumValidator;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

import java.util.ArrayList;
import java.util.List;

public class EnumValidatorImpl implements ConstraintValidator<EnumValidator, String> {
    private List<String> valueList = null;

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        if (value == null) {
            return true;
        }

        return valueList.contains(value.toUpperCase());
    }

    @Override
    public void initialize(EnumValidator constraintAnnotation) {
        valueList = new ArrayList<>();

        Class<? extends Enum<?>> enumClass = constraintAnnotation.enumClass();

        for (Enum<?> constant : enumClass.getEnumConstants()) {
            valueList.add(constant.toString().toUpperCase());
        }
    }
}
