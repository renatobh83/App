pipeline {
  agent any
  stages {
    stage('Git') {
      steps {
        git(url: 'https://github.com/renatobh83/App.git', branch: 'master')
      }
    }

    stage('Install') {
      steps {
        sh '''cd backend
npm install
npm run start'''
      }
    }

    stage('Debug') {
      steps {
        sh 'netstat'
      }
    }

  }
}