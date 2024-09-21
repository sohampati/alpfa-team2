package com.ms.jobBuddy.service;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import com.ms.jobBuddy.dto.JobDTO;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Service
public class JobService {
    public String addJob(JobDTO jobDTO) throws Exception {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        try {
            DateTimeFormatter formatter = DateTimeFormatter.ISO_DATE_TIME;
            String postDate = LocalDateTime.now().format(formatter);
            String expirationDate = LocalDateTime.now().plusMonths(1).format(formatter);
            jobDTO.setPostDate(postDate);
            jobDTO.setExpirationDate(expirationDate);
            ApiFuture<WriteResult> future = dbFirestore.collection("Jobs").document(String.valueOf(jobDTO.getJobId()))
                    .set(jobDTO);

            WriteResult result = future.get();
            return "Job added successfully at: " + result.getUpdateTime();
        } catch (Exception e) {
            throw new Exception("Error adding job to Firebase", e);
        }
    }

    public JobDTO getJobById(String jobId) throws Exception {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        try {
            ApiFuture<DocumentSnapshot> future = dbFirestore.collection("Jobs").document(jobId).get();
            DocumentSnapshot document = future.get();
            if (document.exists()) {
                return document.toObject(JobDTO.class);
            } else {
                throw new Exception("Job with jobId: " + jobId + " not found.");
            }
        } catch (Exception e) {
            throw new Exception("Error fetching job from Firebase", e);
        }
    }

}
