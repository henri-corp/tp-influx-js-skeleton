# TP InfluxDB
A base code for the [MongoDB TP](https://course.larget.fr/2021-2022/b2-gobelins/bdd/tp/6-influxdb/)

## Requirements
- NodeJS
- Docker with Docker-compose


## Getting started

### Installation
make a copy of `.env.sample` and name it `.env`.
This file is by default configured to run with the docker-compose or local influxdb installation.

Then run `yarn` or `npm install` depending on your environment.

### Start InfluxDB with Docker

Start Influx server using `docker-compose up -d`. InfluxDB port is `8086`.


### Usage

Every exercices should be stored in exercices folder.
To run them just run the following command : 

```
npm run start ex0
```

If you have `yarn` you can run
```
yarn start ex0
```
It will automatically use the file `./exercices/ex0.js`.

In the Exercices folder, you can find a `ex0.js`, a sample for you to create new exercices.

All exercices can be found on [course.larget.fr](https://course.larget.fr/2021-2022/b2-gobelins/bdd/tp/6-influxdb/)