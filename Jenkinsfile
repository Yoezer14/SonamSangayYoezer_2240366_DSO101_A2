pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                dir('todo-app') {
                    bat 'npm install'
                }
            }
        }

        stage('Test') {
            steps {
                dir('todo-app') {
                    bat 'npm test'
                }
            }
        }
    }

    post {
        always {
            junit 'todo-app/reports/junit.xml'
        }
    }
}