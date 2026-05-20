🚀 InterviewIQ – AI Powered Mock Interview Platform
📌 Overview
InterviewIQ is an AI-powered mock interview platform that helps users prepare for HR and Technical interviews through real-time AI interaction. Users can select their preferred role and 
interview type, receive instant AI-generated feedback reports, download interview reports as PDFs, track interview history, and purchase credits for interview sessions.

ScreenShot:
<img width="1915" height="907" alt="Screenshot 2026-05-20 221108" src="https://github.com/user-attachments/assets/5a414f39-680a-4151-8a31-25f42d003477" />
<img width="1913" height="900" alt="Screenshot 2026-05-20 221129" src="https://github.com/user-attachments/assets/827cad1a-1d5e-4241-bbdf-3fa8a9b6e45e" />



✨ Features
🤖 AI-based HR & Technical Interviews
🎯 Role-specific interview questions
📊 AI-generated performance reports
📄 Download interview reports as PDF
🕒 Interview history tracking
💳 Credit-based interview system
🔐 User authentication & secure access
📱 Responsive modern UI
⚡ Fast and interactive user experience


🏗️ System Architecture
Plain text
+------------------+
                    |      User        |
                    +--------+---------+
                             |
                             v
                  +--------------------+
                  |   Frontend (React) |
                  +--------------------+
                             |
              --------------------------------
              |                              |
              v                              v
   +-------------------+        +-------------------+
   | Authentication    |        | AI Interview API  |
   | Firebase|        |           (OPENROUTER_API_KEY)   |
   +-------------------+        +-------------------+
              |                              |
              --------------------------------
                             |
                             v
                  +--------------------+
                  | Backend (Node.js)  |
                  +--------------------+
                             |
                             v
                  +--------------------+
                  | Database            |
                  | MongoDB       |
                  +--------------------+
                             |
                             v
                  +--------------------+
                  | PDF Report Storage |
                  +--------------------+
🛠️ Tech Stack
Frontend
React.js
Tailwind CSS
JavaScript
Backend
Node.js
Express.js
Database
MongoDB
Authentication
Firebase 
AI Integration

⚙️ How It Works
User signs up/login.
User selects:
Role
Interview Type (HR/Technical)
AI starts the interview session.
User answers interview questions.
AI evaluates performance.
Detailed report is generated.

User can:
Download report PDF
View interview history
Credits are deducted per interview.
Users can purchase additional credits.

📂 Project Structure
Bash
InterviewIQ/
│
├── client/             # Frontend React App
├── server/             # Backend APIs
├── components/         # Reusable UI Components
├── pages/              # Application Pages
├── database/           # DB Models & Config
├── utils/              # Utility Functions
├── public/             # Static Assets
└── README.md

🌟 Future Enhancements
📹 Video interview analysis
🧠 AI emotion & confidence detection
🌍 Multi-language interview support
📈 Advanced analytics dashboard
🏆 Leaderboard & performance ranking
📅 Interview scheduling system
🧾 Resume analysis & ATS scoring
👨‍💼 Company-specific interview preparation
📱 Mobile application support
🔔 Email notifications & reminders
🤝 Peer-to-peer mock interviews
🔒 Security Features






Contributions are welcome!

👨‍💻 Author
Developed by Vinya Jain
⭐ If you like this project, give it a star on GitHub!
