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
