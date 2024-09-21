package com.ms.jobBuddy.dto;

import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Getter
@Setter
public class UserDTO {
    private String userId;
    private String username;
    private String email;
    private String password; // Consider hashing this
    private String employerType;
    private String mobileNumber;
    private String name;
}
