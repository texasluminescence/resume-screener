# Resume Screening AI Project

*Initial Versions for Students*

**Overview:**  
The Resume Screening AI Project aims to enhance the resume analysis process for students and employers through a structured approach. The project will be developed in four phases:

**Phase 1: Individual Resume Analysis**  
Provide personalized analysis and feedback based on user-uploaded resumes and job descriptions.  
- **Resume Upload & Analysis:** Supports PDF, DOC, DOCX formats; extracts text using libraries like PyPDF2.  
- **Resume Scoring:** Scores based on skills, experience, grammar, and formatting; suggests relevant keywords.  
- **Job Description Matching:** Compares resumes against job descriptions, identifies missing qualifications, and provides suggestions.  
- **Keyword Analysis:** Highlights overused keywords and suggests industry-specific terms.  
- **Feedback Report:** Summarizes strengths, areas for improvement, and actionable recommendations.  
- **ATS Compatibility Check:** Analyzes formatting and keyword density for optimization.

**Phase 2: Bulk Resume Analysis**  
Allows bulk uploads for comparative analysis.
- **Batch Upload Functionality:** Supports folders or ZIP files of resumes.  
- **Batch Analysis:** Parses and analyzes each resume, ranks based on predefined parameters.  
- **Comparison and Ranking:** Ranks candidates based on experience, skills, and grammar quality.  
- **Scoring Report:** Generates a report for each resume with overall and section-specific scores.

**Phase 3: Cover Letter Evaluation**  
Structured analysis of cover letters.
- **Parsing & Analysis:** Checks consistency with resumes; analyzes relevance to job descriptions.  
- **Tone and Style Analysis:** Assesses tone, impact, and suggests improvements.  
- **Suggestions and Feedback:** Provides content enhancement recommendations.

**Phase 4: Resume Generation**  
Generates professional resumes from user inputs.
- **Template-Based Creation:** Offers industry-specific templates; supports LinkedIn and GitHub imports.  
- **ChatBot Integration:** Prompts users for detailed information to generate content.  
- **Content Suggestions:** Uses NLP for bullet point generation and skill suggestions.  
- **Multi-Version Creation:** Allows multiple resume versions and downloadable files.  
- **Feedback Loop:** Provides scoring and improvement suggestions post-generation.

---

# Terminal Commands

#### Cloning a Git Repository
1. Click “<> Code” and copy the SSH URL.
2. Open your terminal and navigate to your working directory
git clone <copied ssh url>

#### Pulling from the Git Repo
git pull

#### Viewing Current Live Branches 
git branch 

#### Creating a New Branch 
git checkout -b <branch-name>(e.g. git branch ethan-navbar)

#### Going from Branch to Branch 
git checkout <branch-name> (e.g. git checkout ethan-navbar) 

#### Merging a Branch to Main 
git checkout main 
git pull 
git checkout <branch-name> (e.g. git checkout ethan-navbar) 
git merge main 
git push 

:wq

(If merge conflicts arise, contact Ethan if you can’t resolve them on your own) 

#### Deleting Branches Not Found on the Repo 
git checkout main
git pull
git remote prune origin 
git fetch --all -p; git branch -vv | grep “:gone]“ awk ‘{ print $1 }‘  | xargs -n 1 git branch -D

#### Reset the Last Commit (Use for Merge Conflicts) 
git reset --hard head~1
