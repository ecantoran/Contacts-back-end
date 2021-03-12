# Contact Management Back-end
Basic Node.js app for contact management
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- Docker
- Docker-compose


### Installing

On your local machine, clone this repo:

```
git clone https://github.com/ecantoran/Contacts-back-end.git
```
Then build and run the project with Docker Compose

```
docker-compose up --build
```
Once the container is built and running, visit http://localhost:4000/api/contacts/ in your web browser to view the app.


To stop the staging container, use the docker-compose down command:
```
docker-compose down
```

## Built With

* [Docker](https://www.docker.com/) - Containerization platform
* [Node.js](https://nodejs.org/en/) - Backend
* [Express.js](https://expressjs.com/) - Web Framework
* [Sequelize](https://sequelize.org/) - ORM  
* [Postgresql](https://www.postgresql.org/) - Database




