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
        docker tag my-app:latest 116099576093.dkr.ecr.us-west-2.amazonaws.com/my-app:latest
        docker push 116099576093.dkr.ecr.us-west-2.amazonaws.com/my-app:latest
        '''
      }
    }

    stage('Deploy to EKS') {
      steps {
        sh 'kubectl apply -f deployment.yaml'
      }
    }
