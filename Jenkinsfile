pipeline {
    agent any

    tools {
        nodejs 'NodeJS'   // Must match the NodeJS name in Jenkins tools
    }

    stages {

        // Stage 1: Get the code from GitHub
        stage('Checkout') {
            steps {
                git branch: 'main',
                    credentialsId: 'github-credentials',
                    url: 'https://github.com/Yoezer14/SonamSangayYoezer_2240366_DSO101_A2.git'
            }
        }

        // Stage 2: Install npm packages
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        // Stage 3: Build the app
        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        // Stage 4: Run unit tests
        stage('Test') {
            steps {
                bat 'npm test'
            }
            post {
                always {
                    // Publish test results
                    junit 'junit.xml'
                }
            }
        }

    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check the logs above.'
        }
    }
}