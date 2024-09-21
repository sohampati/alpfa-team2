package com.ms.jobBuddy.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.SetOptions;
import com.google.firebase.cloud.FirestoreClient;
import com.ms.jobBuddy.dto.UserDTO;
import io.micrometer.common.util.StringUtils;
import org.springframework.stereotype.Service;

import java.util.concurrent.ExecutionException;

@Service
public class FirebaseService {
    private final ObjectMapper objectMapper = new ObjectMapper();

    private Firestore dbFireStore;

    public String addUser(UserDTO userDTO) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentSnapshot doc = dbFirestore.collection("Users").document(userDTO.getUsername()).get().get();
        boolean isUserExists = doc.exists();

        if (StringUtils.isNotEmpty(userDTO.getUsername())) {
            userDTO.setUserId(userDTO.getUsername());

            if (isUserExists) {
                // Merge the new user data with the existing document
                dbFirestore.collection("Users").document(userDTO.getUserId()).set(userDTO, SetOptions.merge());
                return "User updated successfully!";
            } else {
                dbFirestore.collection("Users").document(userDTO.getUserId()).set(userDTO);
                return "User added successfully!";
            }
        } else {
            return "Invalid username.";
        }
    }

    public UserDTO getUser(String userId) throws Exception {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentSnapshot document = dbFirestore.collection("Users").document(userId).get().get();
        if (document.exists()) {
            return document.toObject(UserDTO.class);
        }
        return null;
    }
}
