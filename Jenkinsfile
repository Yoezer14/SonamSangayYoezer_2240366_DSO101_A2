pipeline {
    agent any

    tools {
        nodejs 'NodeJS'  // Must match the name you set in Jenkins Tools
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
                sh 'npm install'
            }
        }

        // Stage 3: Build the app
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        // Stage 4: Run unit tests
        stage('Test') {
            steps {
                sh 'npm test'
            }
            post {
                always {
                    // Publish JUnit test results to Jenkins
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
