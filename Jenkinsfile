pipeline {
    agent any

    tools {
        nodejs "Node24"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/santiagomanchola/hello-ci-cd.git'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo '🚀 Aplicación desplegada con éxito (simulación)'
            }
        }
    }
}
