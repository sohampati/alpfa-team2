# JobBuddy

## Overview
JobBuddy is a project aimed at connecting candidates with job opportunities using advanced machine learning techniques. The system analyzes resumes and job descriptions to provide intelligent matching based on similarity scores.

## Features
- **Resume Upload**: Candidates can upload their resumes, which are processed and stored in the system.
- **Job Posting**: Employers can post job descriptions that are analyzed for candidate matching.
- **Candidate Matching**: The system ranks candidates for each job based on their resume's similarity to the job description.
- **Job Matching**: Similarly, it ranks job descriptions for each candidate.
- **Cosine Similarity**: Utilizes cosine similarity to evaluate the compatibility between resumes and job descriptions.

## Project Structure

- **ms/**: This folder contains the Java Spring backend that integrates with Firebase for data management and storage.
- **alpha-team2/**: This folder features the React and Vue.js frontend, providing a dynamic user interface for the JobBuddy application.
- **bert_tokenizer/**: This folder includes the Python script for generating embeddings using the BERT tokenizer, essential for processing text data in the application.

### Technologies Used
- **Backend**: Java Spring, Firebase
- **Frontend**: React, Vue.js
- **Text Processing**: BERT Tokenizer (Python)
