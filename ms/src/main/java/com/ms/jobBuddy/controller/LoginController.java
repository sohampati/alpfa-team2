package com.ms.jobBuddy.controller;

import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class LoginController {

    @Operation(summary = "Get a user by ID", description = "Returns a single user based on the provided ID")
    @GetMapping("/users")
    public String getUserById() {
        System.out.println("Hello User");
        return "Hello User";
    }


}
