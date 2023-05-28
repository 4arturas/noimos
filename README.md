# docker compose
```sh
docker-compose up
````

```sh
curl http://localhost:3567/hello
````

# Frontend Docker
```sh
docker build -f DockerfileFrontend -t noimos-frontend .
````

```sh
docker tag noimos-frontend  noimos-frontend 
````

```sh
docker run -it -p 3000:3000 --name noimos-frontend  noimos-frontend 
````

```sh
docker rmi noimos-frontend  --force
````

```sh
docker rm noimos-frontend --force
````




# Backend Docker
```sh
docker build -f DockerfileBackend -t noimos-backend .
````

```sh
docker tag noimos-backend  noimos-backend 
````

```sh
docker run -it -p 3001:3001 --name noimos-backend  noimos-backend 
````

```sh
docker rmi noimos-backend  --force
````

```sh
docker rm noimos-backend --force
````

# NEST 
```sh
npx @nestjs/cli g controller [name]
````

```sh
nest g controller [name]
````