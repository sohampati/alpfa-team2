# count, finds number of skills each employee has for each posting
def count(sponsor, employee):
    count = 0
    set_sponsor = set(sponsor)
    for skill in employee:
        if skill in set_sponsor:
            count += 1
    
    return count
#based on custom employee threshold for match, returns if there is a match
def isMatch(currentSkills, totalSkills, threshold):
    if totalSkills == 0:  # Prevent division by zero
        return False
    return currentSkills / totalSkills >= threshold
#extracts text from pdf


#print(extract_text_from_pdf(r"C:\Users\soham\OneDrive\Desktop\Intern Search Materials\Soham_Pati_Resume.pdf"))
#print(extract_text_from_docx(r"C:\Users\soham\OneDrive\Desktop\Intern Search Materials\Soham_Pati_Resume.docx"))







 



