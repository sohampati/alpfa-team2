package com.ms.jobBuddy.controller;

import com.ms.jobBuddy.dto.UserDTO;
import com.ms.jobBuddy.service.FirebaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/firestore")
public class FirebaseController {

    @Autowired
    private FirebaseService firebaseService;

    @PostMapping("/addUser")
    public String addUser(@RequestBody UserDTO user) throws ExecutionException, InterruptedException {
        return firebaseService.addUser(user);
    }

    @GetMapping("/getUser/{userId}")
    public UserDTO getUser(@PathVariable String userId) throws Exception {
        return firebaseService.getUser(userId);
    }
}

