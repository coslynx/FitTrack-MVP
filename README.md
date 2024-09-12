<div class="hero-icon" align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
</div>

<h1 align="center">
FitTrack-MVP
</h1>
<h4 align="center">A user-friendly fitness tracker MVP built with React, Next.js, and PostgreSQL.</h4>
<h4 align="center">Developed with the software and tools below.</h4>
<div class="badges" align="center">
  <img src="https://img.shields.io/badge/Framework-React-blue" alt="Framework-React-blue" />
  <img src="https://img.shields.io/badge/Frontend-Javascript,_Html,_Css-red" alt="Frontend-Javascript,_Html,_Css-red" />
  <img src="https://img.shields.io/badge/Backend-Node.js-blue" alt="Backend-Node.js-blue" />
  <img src="https://img.shields.io/badge/Database-PostgreSQL-blue" alt="Database-PostgreSQL-blue" />
</div>
<div class="badges" align="center">
  <img src="https://img.shields.io/github/last-commit/coslynx/FitTrack-MVP?style=flat-square&color=5D6D7E" alt="git-last-commit" />
  <img src="https://img.shields.io/github/commit-activity/m/coslynx/FitTrack-MVP?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
  <img src="https://img.shields.io/github/languages/top/coslynx/FitTrack-MVP?style=flat-square&color=5D6D7E" alt="GitHub top language" />
</div>


## 📑 Table of Contents
- 📍 Overview
- 📦 Features
- 📂 Structure
- 💻 Installation
- 🏗️ Usage
- 🌐 Hosting
- 📄 License
- 👏 Authors

## 📍 Overview
This repository contains a Minimum Viable Product (MVP) called "FitTrack-MVP" that offers a streamlined and motivating experience to empower users to achieve their fitness aspirations. It provides a user-centric platform that combines personalized goal setting, detailed progress monitoring, and a thriving social community. Built on a secure and robust technical foundation, FitTrack-MVP differentiates itself through a user-friendly interface, personalized goal setting, detailed progress tracking, and social engagement features.

## 📦 Features
|    | Feature            | Description                                                                                                        |
|----|--------------------|--------------------------------------------------------------------------------------------------------------------|
| 🔐 | **Authentication**   | Users can register and login securely through an email-based authentication system.                                          |
| 🎯 | **Goal Setting**     | Users can set personalized fitness goals tailored to their individual needs and preferences.                                          |
| 📈 | **Progress Tracking** | Users can log their workouts, activities, and nutritional intake, and track their progress towards their goals.                |
| 👥 | **Social Engagement** | Users can share their progress, motivate one another, and connect with like-minded individuals.                             |
| 💻 | **Technology Stack** | FitTrack-MVP is built on a robust technology stack, including React, Next.js, TypeScript, PostgreSQL, and other essential libraries. |

## 📂 Structure
```text
FitTrack-MVP
├── components
│   ├── Button.tsx
│   ├── Header.tsx
│   ├── Layout.tsx
│   ├── GoalInput.tsx
│   ├── ProgressChart.tsx
│   └── SocialShareButton.tsx
├── pages
│   ├── api
│   │   ├── auth.ts
│   │   ├── goals.ts
│   │   └── progress.ts
│   ├── _app.tsx
│   ├── index.tsx
│   ├── dashboard.tsx
│   └── login.tsx
├── styles
│   └── global.css
├── utils
│   ├── helpers.ts
│   ├── api.ts
│   ├── auth.ts
│   └── validation.ts
├── config
│   └── next-auth.config.ts
├── middleware
│   └── authentication.ts
├── .env
├── package.json
└── README.md

```

## 💻 Installation
### 🔧 Prerequisites
- Node.js
- npm
- Docker

### 🚀 Setup Instructions
1. Clone the repository:
   - `git clone https://github.com/coslynx/FitTrack-MVP.git`
2. Navigate to the project directory:
   - `cd FitTrack-MVP`
3. Install dependencies:
   - `npm install`

## 🏗️ Usage
### 🏃‍♂️ Running the Development Server
1. Start the development server:
   - `npm run dev`
2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

### ⚙️ Configuration
Adjust configuration settings in `.env` and `next-auth.config.ts`.

### 📚 Examples
- **Register & Login:** Users can register and log in using their email addresses and passwords. 
- **Set Goals:**  Users can define personalized fitness goals, including targets and deadlines.
- **Track Progress:**  Users can log their workouts and activities, with the app automatically calculating their progress toward their goals.
- **Engage Socially:**  Users can share their fitness achievements, motivate others, and connect with like-minded individuals through the social feed.

## 🌐 Hosting
### 🚀 Deployment Instructions
#### Vercel
1.  Install the Vercel CLI: 
    - `npm install -g vercel`
2.  Log in to Vercel: 
    - `vercel login`
3.  Initialize Vercel in your project directory:
    - `vercel init`
4.  Deploy your application:
    - `vercel deploy`

#### Netlify
1.  Install the Netlify CLI:
    - `npm install -g netlify-cli`
2.  Log in to Netlify:
    - `netlify login`
3.  Initialize Netlify in your project directory:
    - `netlify init`
4.  Deploy your application:
    - `netlify deploy`

#### GitHub Pages
1.  Update your project's settings on GitHub to enable GitHub Pages.
2.  Configure the build settings and deploy directory (usually `out`) on GitHub.
3.  Push your code to the `gh-pages` branch.

#### AWS
1.  Create an AWS account and set up an S3 bucket for hosting your static website.
2.  Configure AWS CloudFront for content distribution.
3.  Use a CI/CD pipeline to automate deployment to AWS.

#### Google Cloud
1.  Create a Google Cloud account and set up a Cloud Storage bucket for hosting.
2.  Configure Google Cloud CDN for content distribution.
3.  Use a CI/CD pipeline to automate deployment to Google Cloud.

### 🔑 Environment Variables
- **NEXT_PUBLIC_API_URL**: Your API URL (e.g., `http://localhost:3000`)
- **NEXTAUTH_URL**: Your application's URL (e.g., `http://localhost:3000`)
- **NEXTAUTH_SECRET**: A random secret key for signing tokens (generate using `openssl rand -base64 32`)
- **DATABASE_URL**: Your PostgreSQL database connection string (e.g., `postgresql://user:password@host:port/database`)

## 📜 API Documentation
### 🔍 Endpoints
- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Log in an existing user.
- **POST /api/auth/logout**: Log out the current user.
- **POST /api/goals**: Create a new fitness goal.
- **GET /api/goals**: Retrieve a list of user goals.
- **PUT /api/goals/:id**: Update a specific goal.
- **DELETE /api/goals/:id**: Delete a specific goal.
- **POST /api/workouts**: Log a new workout.
- **GET /api/workouts**: Retrieve a list of user workouts.
- **PUT /api/workouts/:id**: Update a specific workout.
- **DELETE /api/workouts/:id**: Delete a specific workout.

### 🔒 Authentication
The API utilizes JSON Web Tokens (JWT) for authentication. Users need to authenticate before accessing protected resources.

### 📝 Examples
- **Register a new user:**
    - `curl -X POST http://localhost:3000/api/auth/register -H 'Content-Type: application/json' -d '{"email": "example@email.com", "password": "yourpassword"}'`
- **Log in an existing user:**
    - `curl -X POST http://localhost:3000/api/auth/login -H 'Content-Type: application/json' -d '{"email": "example@email.com", "password": "yourpassword"}'`

## 📜 License & Attribution

### 📄 License
This Minimum Viable Product (MVP) is licensed under the [GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/) license.

### 🤖 AI-Generated MVP
This MVP was entirely generated using artificial intelligence through [CosLynx.com](https://coslynx.com). No human was directly involved in the coding process.

### 📞 Contact
For any questions or concerns regarding this AI-generated MVP, please contact CosLynx at:
- Website: [CosLynx.com](https://coslynx.com)
- Twitter: [@CosLynxAI](https://x.com/CosLynxAI)

<p align="center">
  <h1 align="center">🌐 CosLynx.com</h1>
</p>
<p align="center">
  <em>Create Your Custom MVP in Minutes With CosLynxAI!</em>
</p>
<div class="badges" align="center">
  <img src="https://img.shields.io/badge/Developers-Drix10,_Kais_Radwan-red" alt="Developers-Drix10,_Kais_Radwan-red" />
  <img src="https://img.shields.io/badge/Website-CosLynx.com-blue" alt="Website-CosLynx.com-blue" />
  <img src="https://img.shields.io/badge/Backed_by-Google,_Microsoft_&_Amazon_for_Startups-red" alt="Backed_by-Google,_Microsoft_&_Amazon_for_Startups-red" />
  <img src="https://img.shields.io/badge/Finalist-Backdrop_Build_v4,_v6-black" alt="Finalist-Backdrop_Build_v4,_v6-black" />
</div>