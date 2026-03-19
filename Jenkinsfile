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

    stage('Login to ECR') {
      steps {
        sh '''
        aws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin 116099576093.dkr.ecr.us-west-2.amazonaws.com
        '''
      }
    }

    stage('Push to ECR') {
      steps {
        sh '''
        docker tag my-app:latest 116099576093.dkr.ecr.us-west-2.amazonaws.com/my-app:latest
        docker push 116099576093.dkr.ecr.us-west-2.amazonaws.com/my-app:latest
        '''
      }
    }

    stage('Deploy to EKS') {
      steps {
        sh 'kubectl apply -f k8s/deployment.yaml'
        sh 'kubectl apply -f k8s/service.yaml'
      }
    }

  }
}