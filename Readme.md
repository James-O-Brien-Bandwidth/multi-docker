# Working AWS deploy:

# cd client

# npm install
[//]: # (TODO - add detailed info about what this repo is all about)

# To start app locally:

docker compose -f docker-compose-dev.yml up --build

# multi container deployment

1. push code to github
2. Travis automatically pulls from your repo
3. Travis builds a test image, tests code
4. Travis builds a prod image
5. Travis pushes prod image to Docker hub
6. Travis pushes project to AWS EB
7. Elastic Beanstalk pulls images from Docker hub, and then deploys the code

# Initailly, as part of all the code, I used https://github.com/James-O-Brien-Bandwidth/docker-compose as the repo.

# However, as part of the tutorial, we cd into 'complex' and create a new repo.

# TODO - Let's use GHA because Travis now charges ... and GHA is more relevant

https://www.travis-ci.com/

- You need to go there and sign up with your github account
- Then authorize Travis to be able to integrate with your github repos
- i.e. https://app.travis-ci.com/github/James-O-Brien-Bandwidth/multi-docker/no-build?serverType=git
- You can find all company/your repos hooked into Travis at: https://app.travis-ci.com/dashboard
- our project is called 'multi-docker'
-

# Okay, GHA has been added now :)

# Steps for prod deploy:

# 1. (DONE) - Using a production docker-compose.yml file. Make sure you can run this file

# 2. (DONE) - You need not have postgres and redids defined as we'll make them in AWS

# 3. (DONE) - Create AWS EB environment

# 4. (DONE) - Create RDS

# 5. (DONE) - Create Redis ---->

# 6. (DONE) - Create Security Group

# 7. (DONE) - Applying Security Groups to ElastiCache

# 8. (DONE) - Applying Security Groups to RDS

# 9. (DONE) - Applying Security Groups to Elastic Beanstalk

# 10. Add AWS configuration details to github file's deploy script

# 11. EB -> Setting Environment Variables:

# REDIS_HOST .... is one example

# use primary endpoints ... trim the values of port and semi-colon off of the env variables ...

# 12. IAM Keys for Deployment:

# create IAM user,

# 13. Create AWS keys in Github Secrets

# Create S3 bucket

# 14. Push any change to the main branch. And you should see Beanstalk update :) 
