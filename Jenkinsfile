pipeline {
  agent any
  stages {
    stage('Teste') {
      agent {
        node {
          label 'Server'
        }

      }
      steps {
        echo 'Teste'
      }
    }

  }
}