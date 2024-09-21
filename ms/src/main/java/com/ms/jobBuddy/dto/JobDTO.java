package com.ms.jobBuddy.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class JobDTO {
    private int jobId;
    private String employerId;
    private String contactInfo;
    private String jobTitle;
    private String company;
    private String jobDescription;
    private String requiredSkills;
    private String responsibilities;
    private String location;
    private String salaryRange;
    private String embeddingVector;
    private String keywords;
    private String postDate;
    private String expirationDate;
}
