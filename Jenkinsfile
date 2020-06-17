pipeline {
  agent any
  stages {
    stage('New Test') {
      steps {
        sh '''echo PATH = ${PATH}
'''
      }
    }

    stage('Build') {
      steps {
        sh 'npm run start'
      }
    }

  }
}