pipeline {
  agent any

  stages {

    stage('Clone') {
      steps {
        git 'https://github.com/awsdevops7779-clous/devops-eks-jenkins-project.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t my-app .'
      }
    }

    stage('Push to ECR') {
      steps {
        sh '''
        docker tag my-app:latest <ECR-URL>:latest
        docker push <ECR-URL>:latest
        '''
      }
    }

    stage('Deploy to EKS') {
      steps {
        sh 'kubectl apply -f deployment.yaml'
      }
    }

  }
}