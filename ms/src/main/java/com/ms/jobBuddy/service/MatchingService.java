package com.ms.jobBuddy.service;

import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class MatchingService {

    public static boolean calculateMatchScore(List<String> candidateSkills, List<String> jobSkills) {
        Set<String> candidateSkillSet = new HashSet<>(candidateSkills);
        Set<String> jobSkillSet = new HashSet<>(jobSkills);

        int matchCount = 0;

        // Count exact matches
        for (String skill : jobSkillSet) {
            if (candidateSkillSet.contains(skill.toLowerCase())) {
                matchCount++;
            }
        }

        return (double) matchCount / jobSkills.size() * 100 >= 60;
    }
}
