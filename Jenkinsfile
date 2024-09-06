pipeline {
    agent any


    stages {
        stage('Build') {
            steps {
                git 'https://github.com/<github-username>/<github-repo-name>.git'
                sh 'docker build -t devops-project .'
            }
        }
        stage('Push to Docker Hub') {
            steps {
                sh 'docker tag devops-project <docker-hub-username>/devops-project'
                sh 'docker push <docker-hub-username>/devops-project'
            }
        }
    }
}