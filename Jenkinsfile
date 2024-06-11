pipeline {
    agent any
    
    environment {
        PLAYWRIGHT_VERSION = '1.15.2' // Update with the desired Playwright version
        NODEJS_HOME = tool name: 'NodeJS', type: 'hudson.plugins.nodejs.tools.NodeJSInstallation'
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
                    sh 'npx playwright test'
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
