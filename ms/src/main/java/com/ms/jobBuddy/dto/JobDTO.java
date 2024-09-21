package com.ms.jobBuddy.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class JobDTO {
    private int jobId;
    private String employerId;
    private List<String> contactInfo;
    private String jobTitle;
    private String company;
    private String jobDescription;
    private List<String> requiredSkills;
    private List<String> responsibilities;
    private String location;
    private String salaryRange;
    private List<Float> embeddingVector;
    private List<String> keywords;
    private String postDate;
    private String expirationDate;
}
