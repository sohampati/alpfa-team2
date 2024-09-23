package com.ms.jobBuddy.service;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import com.ms.jobBuddy.dto.JobDTO;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
import java.util.UUID;
import java.util.concurrent.ExecutionException;

@Service
public class JobService {
    public String addJob(JobDTO jobDTO) throws Exception {
        jobDTO.setJobId(generateShortUUID());
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

    public List<JobDTO> getJobsByUserId(String userId) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        CollectionReference jobsRef = dbFirestore.collection("Jobs");
        ApiFuture<QuerySnapshot> future = jobsRef.whereEqualTo("employerId", userId).get();
        List<QueryDocumentSnapshot> documents = future.get().getDocuments();

        List<JobDTO> jobList = new ArrayList<>();

        // Iterate through the results and map each document to a JobDTO
        for (QueryDocumentSnapshot document : documents) {
            JobDTO jobDTO = document.toObject(JobDTO.class);
            jobList.add(jobDTO);
        }

        return jobList; // Return the list of JobDTOs
    }

    public static String generateShortUUID() {
        UUID uuid = UUID.randomUUID();
        // Convert UUID to bytes
        byte[] uuidBytes = toBytes(uuid);
        // Encode bytes to Base64 and remove padding
        String base64 = Base64.getUrlEncoder().withoutPadding().encodeToString(uuidBytes);
        // Return the first 7 characters
        return base64.substring(0, 7);
    }

    private static byte[] toBytes(UUID uuid) {
        long msb = uuid.getMostSignificantBits();
        long lsb = uuid.getLeastSignificantBits();
        return new byte[]{
                (byte) (msb >>> 56), (byte) (msb >>> 48), (byte) (msb >>> 40), (byte) (msb >>> 32),
                (byte) (msb >>> 24), (byte) (msb >>> 16), (byte) (msb >>> 8), (byte) msb,
                (byte) (lsb >>> 56), (byte) (lsb >>> 48), (byte) (lsb >>> 40), (byte) (lsb >>> 32),
                (byte) (lsb >>> 24), (byte) (lsb >>> 16), (byte) (lsb >>> 8), (byte) lsb
        };
    }


}
