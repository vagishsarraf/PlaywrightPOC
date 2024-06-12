pipeline {
    agent any
    
    tools {
    nodejs "NodeJS"
}
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }
        
        stage('Run Tests') {
            steps {
                script {
                    sh 'npm run testapi'
                }
            }
        }
    }
    
    post {
        always {
            always {
                    allure includeProperties:
                     false,
                     jdk: '',
                     results: [[path: 'build/allure-results']]
                }
        }
        
        success {
            echo 'Playwright tests passed successfully!'
        }
        
        failure {
            echo 'Playwright tests failed! Please check the test reports for details.'
        }
    }
}
