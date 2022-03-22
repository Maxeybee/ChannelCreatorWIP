pipeline {
  agent any
  stages {
    stage('error') {
      steps {
        npm 'install'
        sh 'node index.js'
      }
    }

  }
}