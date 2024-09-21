package com.ms.jobBuddy.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.sql.Timestamp;

@Entity
@Table(name = "Jobs")
@Getter
@Setter
public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int jobId;

    @Column(nullable = false)
    private String employerId;

    private String contactInfo;

    @Column(nullable = false)
    private String jobTitle;

    @Column(nullable = false)
    private String company;

    private String jobDescription;
    private String requiredSkills;
    private String responsibilities;
    private String location;
    private String salaryRange;
    private String embeddingVector;
    private String keywords;

    @Column(name = "post_date", nullable = false)
    private Timestamp postDate;

    private Timestamp expirationDate;
}
