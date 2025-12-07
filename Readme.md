# cd client
# npm install

[//]: # (TODO - add detailed info about what this repo is all about)


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
