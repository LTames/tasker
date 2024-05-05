package com.tames.taskmanagerapi.shared.validation;

import com.tames.taskmanagerapi.shared.validation.impl.EnumValidatorImpl;
import jakarta.validation.Constraint;
import jakarta.validation.Payload;
import jakarta.validation.ReportAsSingleViolation;

import java.lang.annotation.*;

@Constraint(validatedBy = EnumValidatorImpl.class)
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
@ReportAsSingleViolation
public @interface EnumValidator {
    Class<? extends Enum<?>> enumClass();

    String message() default "Given value is not valid";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
