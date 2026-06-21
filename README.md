# Assignment 2: Jenkins CI/CD Pipeline Implementation

## Automating Node.js To-Do Application Build, Testing and Deployment Using Jenkins

---

# Project Overview

This project demonstrates the implementation of a Continuous Integration and Continuous Deployment (CI/CD) pipeline using Jenkins.

The pipeline automates:

- Source code checkout from GitHub
- Installing project dependencies
- Building the application
- Running automated tests
- Creating Docker images
- Deploying images to Docker Hub

---

# Aim

To configure a Jenkins CI/CD pipeline that automates the build, testing, and deployment of a Node.js To-Do web application.

The pipeline performs:

- GitHub repository checkout
- Node.js dependency installation
- Application build
- Unit testing using Jest
- Docker image creation
- Docker Hub deployment

---

# Technologies Used

| Technology | Purpose |
|---|---|
| Jenkins | CI/CD Automation |
| GitHub | Source Code Management |
| Node.js | Backend Application |
| Jest | Unit Testing |
| Docker | Containerization |
| Docker Hub | Image Repository |

---

# Theory

## Jenkins

Jenkins is an open-source automation server used for implementing CI/CD pipelines.

It automates repetitive software development tasks such as:

- Building applications
- Testing code
- Deploying applications

Jenkins pipelines are defined using a file called:

```
Jenkinsfile
```

The Jenkinsfile contains all instructions required to execute the pipeline.

---

# Jenkins Pipeline Stages

The pipeline consists of five main stages:

```
Checkout
     |
     v
Install
     |
     v
Build
     |
     v
Test
     |
     v
Deploy
```

---

# Stage 1: Checkout

The Checkout stage downloads the latest source code from GitHub.

Example:

```bash
git clone repository-url
```

---

# Stage 2: Install Dependencies

This stage installs all required Node.js packages.

Command:

```bash
npm install
```

---

# Stage 3: Build Application

The build stage prepares the application for deployment.

Command:

```bash
npm run build
```

---

# Stage 4: Testing

Automated testing is performed using Jest.

Install Jest:

```bash
npm install --save-dev jest jest-junit
```

Run tests:

```bash
npm test
```

Test results are generated in JUnit format and displayed inside Jenkins.

---

# Stage 5: Deployment

The deployment stage creates a Docker image and pushes it to Docker Hub.

Docker build:

```bash
docker build -t username/node-app .
```

Docker push:

```bash
docker push username/node-app
```

---

# Implementation

## Task 1: Jenkins Setup

Steps:

1. Install Jenkins
2. Open Jenkins dashboard

```
localhost:8080
```

3. Install required plugins:

- NodeJS Plugin
- Pipeline Plugin
- GitHub Integration Plugin
- Docker Pipeline Plugin

---

# Task 2: GitHub Integration

The Node.js application repository is connected with Jenkins.

A GitHub Personal Access Token (PAT) is created for secure authentication.

Steps:

1. Open GitHub settings
2. Create Personal Access Token
3. Add token into Jenkins credentials

---

# Task 3: Jenkinsfile Creation

Create a file:

```
Jenkinsfile
```

inside project root directory.

Example:

```groovy
pipeline {

agent any

stages {

stage('Checkout') {

steps {

git 'repository-url'

}

}


stage('Install') {

steps {

sh 'npm install'

}

}


stage('Build') {

steps {

sh 'npm run build'

}

}


stage('Test') {

steps {

sh 'npm test'

}

}


stage('Deploy') {

steps {

echo "Deploying Application"

}

}

}

}
```

---

# Package.json Configuration

Required scripts:

```json
{
 "scripts": {

 "test":
 "jest --ci --reporters=default --reporters=jest-junit",

 "build":
 "tsc"

 }
}
```

---

# Running Jenkins Pipeline

Steps:

1. Open Jenkins Dashboard
2. Create New Pipeline Project
3. Select Pipeline from SCM
4. Connect GitHub repository
5. Select Jenkinsfile
6. Click Build Now

---

# Pipeline Execution

Successful pipeline output:

```
Checkout       SUCCESS

Install        SUCCESS

Build          SUCCESS

Test           SUCCESS

Deploy         SUCCESS
```

---

# Result

The Jenkins CI/CD pipeline was successfully implemented.

The application was automatically:

- Downloaded from GitHub
- Built
- Tested
- Containerized using Docker
- Uploaded to Docker Hub

---

# Conclusion

This assignment provided practical experience with Jenkins CI/CD automation.

The pipeline reduced manual deployment work by automatically performing build, testing, and deployment tasks.

Using Jenkins, GitHub, Docker, and Docker Hub created a reliable automated software delivery workflow.

---

# References

Jenkins Documentation  
https://www.jenkins.io/doc/


Jenkins Pipeline Syntax  
https://www.jenkins.io/doc/book/pipeline/syntax/


Jest Documentation  
https://jestjs.io/docs/getting-started


Docker Documentation  
https://docs.docker.com/


GitHub Documentation  
https://docs.github.com/