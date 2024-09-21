package com.ms.jobBuddy.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Entity
@Table(name = "Resumes")
@Getter
@Setter
public class Resume {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int resumeId;

    @Column(nullable = false)
    private String userId;

    @Column(nullable = false)
    private String contactInfo;

    private String preferredLocation;
    private String languages;
    private String skills;
    private String experience;
    private String education;
    private String certifications;
    private String fileURL;
    private String parsedText;

    @Column(name = "processed_date", nullable = false)
    private Timestamp processedDate;

    private String keywords;
    private String embeddingVector;
}
