# count, finds number of skills each employee has for each posting, also strips the string of skills 
def count(sponsor, employee):
    count = 0
    cS = clean_skills(sponsor)
    cE = clean_skills(employee)
    set_sponsor = set(cS)
    for skill in cE:
        if skill in set_sponsor:
            count += 1
    
    return count
# clean up the skills, to eliminate case-sensitivity
def clean_skills(skills):
    return [skill.lower().replace(" ", "") for skill in skills]

#based on custom employee threshold for match, returns if there is a match
def isMatch(currentSkills, totalSkills, threshold):
    if totalSkills == 0:  # Prevent division by zero
        return False
    return currentSkills / totalSkills >= threshold
#extracts text from pdf


#print(extract_text_from_pdf(r"C:\Users\soham\OneDrive\Desktop\Intern Search Materials\Soham_Pati_Resume.pdf"))
#print(extract_text_from_docx(r"C:\Users\soham\OneDrive\Desktop\Intern Search Materials\Soham_Pati_Resume.docx"))
cS = ['git', 'dock er', 'Linear Algebra', 'aws', 'Objects and Design', 'Quickbase', 'mysql', 'Google Cloud Platform (GCP)', 'Agile Methodology', 'Scrum', 'Python', 'Langchain', 'RAG framework', 'Beautiful Soup', 'Meta AI’s Llama 2 model', 'Ollama', 'BeautifulSoup', 'LLama2 for RAG-style framework', 'Streamlit', 'PowerBi', 'Git', 'Visual Studio', 'PyCharm', 'IntelliJ', 'Jupyter notebook', 'Xcode', 'Google Cloud Platform', 'pandas']
keywords = [
    "quickbase",
    "oLlama",
    "Software Development",
    "Full Stack Development",
    "Agile Methodologies",
    "Python",
    "JavaScript",
    "React",
    "Node.js",
    "Docker",
    "AWS",
    "RESTful APIs",
    "Microservices Architecture",
    "Machine Learning",
    "Data Science",
    "MySQL",
    "Git",
    "DevOps",
    "Team Collaboration",
    "Time Management",
    "Test-Driven Development (TDD)",
    "Cybersecurity"
]

print(isMatch(count(keywords, cS), len(keywords), .36))
print(count(keywords, cS))
print(len(keywords))
print(len(cS))






 



