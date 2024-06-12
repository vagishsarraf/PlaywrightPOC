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
            // Archive test results
            archiveArtifacts 'test-results/**'
            
            // Publish HTML test reports (if generated)
            publishHTML(target: [
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'test-results',
                reportFiles: 'index.html',
                reportName: 'Playwright Test Report'
            ])
        }
        
        success {
            echo 'Playwright tests passed successfully!'
        }
        
        failure {
            echo 'Playwright tests failed! Please check the test reports for details.'
        }
    }
}
