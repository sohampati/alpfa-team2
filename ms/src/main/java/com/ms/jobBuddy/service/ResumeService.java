package com.ms.jobBuddy.service;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import com.ms.jobBuddy.dto.ResumeDTO;
import org.springframework.stereotype.Service;
import org.w3c.dom.stylesheets.LinkStyle;

import javax.annotation.PostConstruct;
import java.util.*;
import java.util.concurrent.ExecutionException;
import java.util.stream.Collectors;

@Service
public class ResumeService {
    private static Map<String, List<String>> jobIdSkillsCache = new HashMap<>();


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

    public List<String> matchResumeToJob(String id) throws Exception {
        List<String> result = new ArrayList<>();
        ResumeDTO candidate = getResumeById(id);
        jobIdSkillsCache.forEach((jobId, skills) ->{
            if(calculateMatchScore(candidate.getSkills(), skills)){
                result.add(jobId);
            }
        });
        return result;
    }

    public static boolean calculateMatchScore(List<String> candidateSkills, List<String> jobSkills) {
        Set<String> candidateSkillSet = new HashSet<>(candidateSkills);
        Set<String> jobSkillSet = new HashSet<>(jobSkills);

        int matchCount = 0;

        // Count exact matches
        for (String skill : jobSkillSet) {
            if (candidateSkillSet.contains(skill)) {
                matchCount++;
            }
        }

        return (double) matchCount / jobSkills.size() * 100 >= 60;
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

    @PostConstruct
    private void getJobsDataFromDB() throws ExecutionException, InterruptedException {
        Firestore db = FirestoreClient.getFirestore();

        // Retrieve data
        ApiFuture<QuerySnapshot> query = db.collection("Jobs").get();
        List<QueryDocumentSnapshot> documents = query.get().getDocuments();
        jobIdSkillsCache = documents.stream()
                .collect(Collectors.toMap(
                        doc -> doc.getData().get("jobId").toString(), // Key
                       doc ->{ List<String> skills = (List<String>) doc.getData().get("requiredSkills");
        return skills != null ? new ArrayList<>(skills) : new ArrayList<>();
    }, // Value
            (existingSkills, newSkills) -> {
        existingSkills.addAll(newSkills); // Combine lists
        return existingSkills;
    }
                ));
        int i = 0;
    }
}
