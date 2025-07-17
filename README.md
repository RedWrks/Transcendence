<h1 align="center">🏓 ft_transcendence</h1>

<p align="center">
	<b><i>ft_transcendence is the ultimate common core project from the 42 School that challenges you to efficiently work as a team to build a feature-rich web application from scratch, inspired by the classic game Pong.</i></b><br>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <br>
  <img src="https://img.shields.io/badge/Fastify-black?style=for-the-badge&logo=fastify"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
  <br>
  <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
  <img src="https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white"/>
  <br>
  <img src="https://img.shields.io/badge/Google_OAuth-4285F4?style=for-the-badge&logo=google&logoColor=white"/>
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"/>
</p>

## 📚 Table of Contents

- [📚 Table of Contents](#-table-of-contents)
- [📣 Introduction](#-introduction)
- [📦 Deploying](#-deploying)
- [📝 Usage](#-usage)
- [🎮 Features](#-features)
- [📎 References](#-references)
- [💻 Tasks Distribution](#-tasks-distribution)

## 📣 Introduction

**ft_transcendence** is a full-stack project where the goal is to create an online platform for playing the classic game Pong, complete with modern enhancements. This project required implementing:

- A real-time multiplayer gaming experience.
- A robust backend and responsive frontend.
- Key features like matchmaking, tournaments, user authentication, and more.

This was a capstone project for the 42 School Common Core, pushing the boundaries of creativity, technical expertise, and software engineering.

## 📦 Deploying

> [!WARNING]
> Ensure you have Docker installed and configured properly before proceeding. The project is designed to run in a containerized environment.

1. Clone the repository from GitHub:
   ```sh
   git clone https://github.com/RedWrks/Transcendence.git
   ```

2. Configure your environment variables:
   ```sh
   cp .env.template .env
   vim .env
   ```

3. Build and run the project:
   ```sh
   make run
   ```

> [!NOTE]
> This command will set up the entire environment, including the frontend, backend, and database, as specified in the project requirements.
> The frontend should be accessed by your computer hostname followed by the port 8080, like so: `https://hostname:8080`.

## 📝 Usage

- **Clean the application**
  ```sh
  make fclean
  ```

## 🎮 Features

Our **ft_transcendence** project includes the following features:

1. **Real-Time Pong Game**
   - Play Pong online against other players or AI opponents.
   - Supports remote gameplay with real-time synchronization.
2. **User Authentication**
   - OAuth2 integration for secure sign-in (e.g., Google authentication).
   - Two-factor authentication (2FA) for enhanced security.
3. **User Profiles**
   - View match history and statistics.
   - Add friends, track their online status, and manage personal data in compliance with GDPR.
4. **Live Chat**
   - Real-time messaging with other players.
   - Invite friends to matches via chat.
5. **Backend and Database**
   - Robust backend built with Fastify and SQLite for data management and scalability.
6. **AI Opponent**
   - Intelligent AI players to challenge users, adding depth to single-player mode.

## 💻 Tasks Distribution

- **rbulanad** – rbulanad@student.42nice.fr<br> Website backend
- **isibio** – isibio@student.42nice.fr<br> Game backend & frontend
- **acanavat** – acanavat@student.42nice.fr<br> AI opponent
- **tpicoule** – tpicoule@student.42nice.fr<br> Website frontend

## 📎 References

- [Docker Documentation](https://docs.docker.com/)
- [Pong History](https://en.wikipedia.org/wiki/Pong)

and some more docs...

[⬆ Back to Top](#-table-of-contents)
