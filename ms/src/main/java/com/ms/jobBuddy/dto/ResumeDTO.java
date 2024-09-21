package com.ms.jobBuddy.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ResumeDTO {
    private int resumeId;
    private String userId;
    private String contactInfo;
    private String preferredLocation;
    private String languages;
    private String skills;
    private String experience;
    private String education;
    private String certifications;
    private String fileURL;
    private String parsedText;
    private String processedDate;
    private String keywords;
    private String embeddingVector;
}
