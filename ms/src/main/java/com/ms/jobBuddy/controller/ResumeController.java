package com.ms.jobBuddy.controller;


import com.ms.jobBuddy.dto.ResumeDTO;
import com.ms.jobBuddy.service.ResumeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/resume")
public class ResumeController {

    @Autowired
    private ResumeService resumeService;

    @PostMapping("/{userId}")
    public ResponseEntity<String> addResume(@PathVariable String userId,
                                            @RequestBody ResumeDTO resumeDTO) {
        resumeDTO.setUserId(userId);
        resumeDTO.setResumeId(123);
        try {
            String result = resumeService.addResume(resumeDTO);
            return new ResponseEntity<>(result, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to add resume: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{userId}")
    public ResponseEntity<ResumeDTO> getResume(@PathVariable String userId) {
        try {
            ResumeDTO resume = resumeService.getResumeByUserId(userId);
            if (resume != null) {
                return new ResponseEntity<>(resume, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
