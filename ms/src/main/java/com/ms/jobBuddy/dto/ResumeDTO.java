package com.ms.jobBuddy.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ResumeDTO {
    private int resumeId;
    private String userId;
    private List<String> contactInfo;
    private String preferredLocation;
    private List<String> languages;
    private List<String> skills;
    private List<Experience> experience;
    private List<Education> education;
    private List<Certifications> certifications;
    private String fileURL;
    private String parsedText;
    private List<String> keywords;
    private List<Float> embeddingVector;
}
