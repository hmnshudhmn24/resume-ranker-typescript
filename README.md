# 📝 ResumeRanker: Smart Resume Analyzer

**ResumeRanker** is an AI-powered resume analysis tool built with TypeScript. It allows users to upload their resumes and receive instant feedback, skill enhancement suggestions, and job match scores tailored to tech roles. Using NLP models and LangChain, it extracts key skills and compares them against job descriptions. The backend is type-safe using Zod or io-ts, ensuring reliability and scalability. This tool helps job seekers optimize their resumes for better visibility and relevance.

## 🚀 Features

- 📄 Upload resumes in PDF format
- 🔍 NLP-based job role matching with OpenAI + LangChain
- 🧠 Skills extraction and enhancement suggestions
- 📊 Match scoring algorithm for different job profiles
- ✅ Type-safe backend using Zod
- 🌐 Simple Express + TypeScript server

## 🧰 Tech Stack

- TypeScript
- Node.js + Express.js
- LangChain + OpenAI
- Zod (type-safe validation)
- Multer (file upload)

## 📁 Folder Structure

```
resume-ranker-smart-resume-analyzer-typescript/
│
├── server/
│   ├── index.ts
│   ├── analyze.ts
│   ├── schema.ts
│   └── types.ts
├── uploads/             # Uploaded PDFs stored here
└── README.md
```

## 🛠️ Installation

```bash
git clone https://github.com/yourusername/resume-ranker-smart-resume-analyzer-typescript.git
cd resume-ranker-smart-resume-analyzer-typescript

npm install
```

## ⚙️ Setup

1. Create `.env` file:
```bash
OPENAI_API_KEY=your_openai_api_key
PORT=3000
```

2. Create required folders:
```bash
mkdir uploads
```

## ▶️ Run the Project

```bash
npx tsx server/index.ts
```

## 🔬 Sample API Usage

- **Endpoint**: `POST /analyze`
- **Form Field**: `resume` (PDF file)
- **Returns**: JSON with extracted skills, job role match score, and suggestions.

## 📌 Example JSON Response

```json
{
  "matchedRoles": ["Frontend Developer", "Full Stack Engineer"],
  "score": 87,
  "suggestions": ["Add React.js to your resume", "Include GitHub profile link"]
}
```

## 📤 Export

- Resume scoring & feedback downloadable as JSON

## 📎 Future Enhancements

- Add job description upload feature
- Integrate with LinkedIn API for auto-job comparison
- UI frontend for easy resume upload
