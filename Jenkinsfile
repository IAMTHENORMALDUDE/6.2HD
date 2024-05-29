pipeline {
    agent any
    tools {
        nodejs 'node'
    }
    environment {
        NODE_ENV = 'production'
    }

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Quality Check') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy to staging') {
            steps {
                sh "curl 'https://api.render.com/deploy/srv-cpbkuptds78s73f1vi3g?key=DLgf4C-8R9w'"
            }
        }
        stage('Deploy to production') {
            steps {
                sh "curl 'https://api.render.com/deploy/srv-cpbi8ktds78s73f06mj0?key=v_uFivd4nMg'"
            }
        }
    }
}