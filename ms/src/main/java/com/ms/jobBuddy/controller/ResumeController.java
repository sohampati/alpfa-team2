package com.ms.jobBuddy.controller;


import com.ms.jobBuddy.dto.ResumeDTO;
import com.ms.jobBuddy.service.ResumeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/api/resume")
public class ResumeController {

    @Autowired
    private ResumeService resumeService;

    @PostMapping("/add/{userId}")
    public ResponseEntity<String> addResume(@PathVariable String userId,
                                            @RequestBody ResumeDTO resumeDTO) {
        resumeDTO.setUserId(userId);
        resumeDTO.setResumeId(userId);
        try {
            String result = resumeService.addResume(resumeDTO);
            return new ResponseEntity<>(result, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to add resume: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{resumeId}")
    public ResponseEntity<ResumeDTO> getResume(@PathVariable String resumeId) {
        try {
            ResumeDTO resume = resumeService.getResumeById(resumeId);
            if (resume != null) {
                return new ResponseEntity<>(resume, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getResumesByUserId")
    public List<ResumeDTO> getResumesByUserId(@RequestParam String userId) throws ExecutionException, InterruptedException {
        return resumeService.getResumesByUserId(userId);
    }

    @GetMapping("/getMatchingJDs")
    public List<String>getJDs(@RequestParam String userId) throws Exception {
        return resumeService.matchResumeToJob(userId);
    }


}
