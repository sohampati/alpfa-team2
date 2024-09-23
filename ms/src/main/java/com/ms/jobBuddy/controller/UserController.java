package com.ms.jobBuddy.controller;

import com.ms.jobBuddy.dto.UserDTO;
import com.ms.jobBuddy.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/add")
    public String addUser(@RequestBody UserDTO user) throws ExecutionException, InterruptedException {
        return userService.addUser(user);
    }

    @GetMapping("/get/{userId}")
    public UserDTO getUser(@PathVariable String userId) throws Exception {
        return userService.getUser(userId);
    }

}

