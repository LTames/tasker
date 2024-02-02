package com.tames.taskmanagerapi.shared.validation;

import com.tames.taskmanagerapi.shared.validation.impl.DateValidatorImpl;
import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Constraint(validatedBy = DateValidatorImpl.class)
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
public @interface DateValidator {
    String dateFormat() default "yyyy-MM-dd";

    String message() default "Invalid date format.";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
