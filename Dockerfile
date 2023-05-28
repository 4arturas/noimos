FROM node:16-alpine as base
#FROM gcr.io/distroless/nodejs:16 as base

###########################################################################################
# Backend
###########################################################################################
WORKDIR /backend

COPY backend/nest-cli.json ./
COPY backend/package.json ./
COPY backend/tsconfig.build.json ./
COPY backend/tsconfig.json ./
COPY backend/src ./src

# Install dependencies
RUN yarn install
#RUN yarn add react react-dom react-hook-form --ignore-workspace-root-check

###########################################################################################
# Frontend
###########################################################################################
WORKDIR /frontend

COPY frontend/package.json ./
COPY frontend/tsconfig.json ./
COPY frontend/public ./public
COPY frontend/src ./src
COPY frontend/.env ./

# Install dependencies
RUN npm install
#RUN yarn add @testing-library/jest-dom @testing-library/react @testing-library/user-event @types/jest @types/node @types/react @types/react-dom axios react react-dom react-router-dom react-scripts supertokens-auth-react typescript web-vitals

###########################################################################################
# ROOT
###########################################################################################
WORKDIR /

COPY package.json .
COPY package-lock.json .
RUN npm install

#CMD ["npm run start"]
CMD ["npm", "run", "start"]