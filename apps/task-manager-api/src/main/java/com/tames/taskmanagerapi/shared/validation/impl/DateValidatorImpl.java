package com.tames.taskmanagerapi.shared.validation.impl;

import com.tames.taskmanagerapi.shared.validation.DateValidator;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

import java.time.DateTimeException;
import java.time.format.DateTimeFormatter;
import java.time.temporal.TemporalAccessor;


public class DateValidatorImpl implements ConstraintValidator<DateValidator, String> {
    private DateTimeFormatter dtf = null;

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        if (value == null) {
            return false;
        }

        try {
            TemporalAccessor date = dtf.parse(value);
            return value.equals(dtf.format(date));
        } catch (DateTimeException e) {
            return false;
        }
    }

    @Override
    public void initialize(DateValidator constraintAnnotation) {
        dtf = DateTimeFormatter.ofPattern(constraintAnnotation.dateFormat());

    }
}
