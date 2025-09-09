pipeline {
  agent any

  options {
    timestamps()
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install') {
      steps {
        sh 'npm install'
      }
    }

    stage('Test') {
      steps {
        sh 'npm run test:ci'
      }
      post {
        always {
          junit allowEmptyResults: true, testResults: 'reports/junit/*.xml'
          publishHTML(target: [
            reportDir: 'reports/coverage/lcov-report',
            reportFiles: 'index.html',
            reportName: 'Coverage Report',
            keepAll: true,
            alwaysLinkToLastBuild: true
          ])
          archiveArtifacts artifacts: 'reports/**/*', fingerprint: true, allowEmptyArchive: true
        }
      }
    }
  }

  post {
    always {
      echo "Build terminata."
    }
  }
}