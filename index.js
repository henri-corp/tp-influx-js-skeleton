const {InfluxDB} = require('@influxdata/influxdb-client')
const { exit } = require('process');
const colors = require('colors');
require('dotenv').config();

// You can generate a Token from the "Tokens Tab" in the UI
const token = process.env.INFLUX_TOKEN;
const org = process.env.INFLUX_ORG;
const bucket = process.env.INFLUX_BUCKET;

(async () => {

  const client = new InfluxDB({url: process.env.INFLUX_URL, token: token})
  console.log(`👑 Influx DB`.green);
  const cmd = process.argv.slice(2)[0]||'ex0';
  let exercice=null;
  try{
    exercice = require(`./exercices/${cmd}.js`);
    console.log(`🦊 Exercice ${cmd} found`.green);
  }catch(error){
    console.error(`😭 Cannot find ${cmd}.js in exercices or ${cmd} contains errors`.white.bgRed.bold);
    console.debug(error);
    exit(100)    
  }
  console.log(`🍣 Starting ${cmd}`.green);
  try{
      await exercice(client,org,bucket);
  }catch(error){
      console.log(`😱 An error occured`.red.bold);
      console.log(error);
  }
  console.log(`👋 Closing InfluxDB`.gray);
  exit(0);
})();