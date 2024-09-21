package com.ms.jobBuddy.controller;

import com.ms.jobBuddy.dto.JobDTO;
import com.ms.jobBuddy.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/api/jobs")
public class JobController {

    @Autowired

    private JobService jobService;

    @PostMapping("/add/{userId}")
    public ResponseEntity<String> addJob(@RequestBody JobDTO jobDTO, @PathVariable String userId) {
        jobDTO.setEmployerId(userId);
        jobDTO.setJobId(123);
        try {
            String result = jobService.addJob(jobDTO);
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error adding job", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getJob")
    public JobDTO getJob(@RequestParam String jobId) throws Exception {
        return jobService.getJobById(jobId);
    }

    @GetMapping("/getJobsByUserId")
    public List<JobDTO> getJobsByUserId(@RequestParam String userId) throws ExecutionException, InterruptedException {
        return jobService.getJobsByUserId(userId);
    }
}
