pipeline {

    agent any

    

    stages {

        stage('Build Docker Image') {

            steps {

                script {

                    // Build Docker image with tag femicare-web

                    sh 'docker build -t femicare-web .'

                }

            }

        }

        stage('Run Docker Container') {

            steps {

                script {

                    // Stop & remove old container if exists (ignore errors)

                    sh 'docker stop femicare-container || true'

                    sh 'docker rm femicare-container || true'

                    // Run container mapping port 8080 on host to port 80 in container

                    sh 'docker run -d -p 8081:80 --name femicare-container femicare-web'

                }

            }

        }

    }

}
