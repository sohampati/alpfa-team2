package com.ms.jobBuddy.service;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import com.ms.jobBuddy.dto.ResumeDTO;
import org.springframework.stereotype.Service;
import org.w3c.dom.stylesheets.LinkStyle;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public class ResumeService {

    public String addResume(ResumeDTO resumeDTO) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        DocumentReference docRef = dbFirestore.collection("Resumes").document(String.valueOf(resumeDTO.getResumeId()));

        ApiFuture<WriteResult> future = docRef.set(resumeDTO);

        return future.get().getUpdateTime() != null ? "Resume added successfully!" : "Failed to add resume.";
    }

    public ResumeDTO getResumeById(String id) throws Exception {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentSnapshot document = dbFirestore.collection("Resumes").document(id).get().get();
        if (document.exists()) {
            return document.toObject(ResumeDTO.class);
        }
        return null; // Or throw an exception as needed
    }

    public List<ResumeDTO> getResumesByUserId(String userId) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        CollectionReference resumesRef = dbFirestore.collection("Resumes");
        ApiFuture<QuerySnapshot> future = resumesRef.whereEqualTo("userId", userId).get();
        List<QueryDocumentSnapshot> documents = future.get().getDocuments();
        List<ResumeDTO> resumeList = new ArrayList<>();

        for (QueryDocumentSnapshot document : documents) {
            ResumeDTO resumeDTO = document.toObject(ResumeDTO.class);
            resumeList.add(resumeDTO);
        }

        return resumeList; // Return the list of ResumeDTOs
    }
}
