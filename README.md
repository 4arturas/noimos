# Instruction

## Start supertokens server and Postgres
```sh
cd ~/IdeaProjects/noimos && docker-compose up
````

## Initialize database
```sh
cd ~/IdeaProjects/noimos/backend && npx prisma migrate dev --name init
````

## Start backend
```sh
cd ~/IdeaProjects/noimos/backend && npm run start:dev
````

## Start fronted
```sh
cd ~/IdeaProjects/noimos/frontend && npm run start
````


Todo: implement sign up form


# Postgres
```sh
docker run -p 5432:5432 --name some-postgres -e POSTGRES_PASSWORD=x postgres
````


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


# Prisma
Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
3. Run npx prisma db pull to turn your database schema into a Prisma schema.
4. Run npx prisma generate to generate the Prisma Client. You can then start querying your database.

```sh
npx prisma migrate dev --name init
````
