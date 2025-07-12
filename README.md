# Keycloak Login

This repository contains a simple [Next.js](https://nextjs.org/) project with a Bootstrap-powered login screen.

## Running locally

After cloning the repository, install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser to view the login page.

## Docker locally


Start a Docker container with Dockerfile.
```
docker build -t keycloak-login .
docker run -p 3000:3000 keycloak-login
```
Stop and Remove Containers:
For a specific container.
Code
```
    docker stop <container_name_or_id>
    docker rm <container_name_or_id>
```
For all stopped containers.
Code

    ``` docker container prune```


This command removes all containers with an "Exited" or "Created" status. For Docker Compose projects. 
Navigate to the directory containing your docker-compose.yml file and run:
Code

 ``` docker compose down ```
This stops and removes containers, networks, and optionally volumes associated with the Compose project.