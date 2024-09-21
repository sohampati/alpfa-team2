package com.ms.jobBuddy.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDTO {
    private String userId;
    private String username;
    private String email;
    private String password; // Consider hashing this
    private boolean isEmployer;
    private String mobileNumber;
    private String name;
    private String address;
    private String createdAt;
}
