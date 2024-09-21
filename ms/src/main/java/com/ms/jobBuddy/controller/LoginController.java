package com.ms.jobBuddy.controller;

import io.swagger.v3.oas.annotations.Operation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class LoginController {

    @Operation(summary = "Get a user by ID", description = "Returns a single user based on the provided ID")
    @GetMapping("/users")
    public String getUserById() {
        System.out.println("Hello User");
        return "Hello User";
    }
}
