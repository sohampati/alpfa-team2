import re
def prepocess_text(text):
    text = text.lower()  # Lowercase
    text = re.sub(r'\W+', ' ', text)  # Remove punctuation
    return text
from pdfminer.high_level import extract_text
def extract_text_from_pdf(pdf_path):
    return extract_text(pdf_path)
 
#extracts text from word doc
import docx2txt

# extract text
def extract_text_from_docx(docx_path):
    # Extract text from the .docx file
    return docx2txt.process(docx_path)
from sklearn.feature_extraction.text import TfidfVectorizer
import pandas as pd
def extract_keywords_for_document(text):
    processed = prepocess_text(text)
    vectorizer = TfidfVectorizer(stop_words='english')
    tfidf_matrix = vectorizer.fit_transform([processed])
    feature_names = vectorizer.get_feature_names_out()
    dense = tfidf_matrix.todense()
    denselist = dense.tolist()
    df_tfidf = pd.DataFrame(denselist, columns=feature_names)

    # Extract top keywords for the document
    top_keywords = df_tfidf.iloc[0].nlargest(20).index.tolist()  # Get top 20 keywords
    return top_keywords

print(extract_keywords_for_document(extract_text_from_docx(r"C:\Users\soham\OneDrive\Desktop\Intern Search Materials\Soham_Pati_Resume.docx")))

