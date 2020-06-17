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
        git(url: 'https://github.com/renatobh83/App.git', branch: 'master', credentialsId: 'renatobh83')
      }
    }

    stage('error') {
      steps {
        sh '''npm install
cd backend
npm run start'''
      }
    }

  }
}