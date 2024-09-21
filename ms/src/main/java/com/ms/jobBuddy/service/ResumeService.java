package com.ms.jobBuddy.service;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import com.ms.jobBuddy.dto.ResumeDTO;
import org.springframework.stereotype.Service;

import java.util.concurrent.ExecutionException;

@Service
public class ResumeService {

    public String addResume(ResumeDTO resumeDTO) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        DocumentReference docRef = dbFirestore.collection("Resumes").document(String.valueOf(resumeDTO.getResumeId()));

        ApiFuture<WriteResult> future = docRef.set(resumeDTO);

        return future.get().getUpdateTime() != null ? "Resume added successfully!" : "Failed to add resume.";
    }

    public ResumeDTO getResumeByUserId(String userId) throws Exception {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentSnapshot document = dbFirestore.collection("Resumes").document(userId).get().get();
        if (document.exists()) {
            return document.toObject(ResumeDTO.class);
        }
        return null; // Or throw an exception as needed
    }
}
