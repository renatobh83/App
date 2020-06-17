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

    stage('Npm ') {
      steps {
        sh '''cd backend
npm install
npm run start &'''
      }
    }

    stage('Web') {
      steps {
        sh 'wget http://localhost:3001'
      }
    }

  }
}