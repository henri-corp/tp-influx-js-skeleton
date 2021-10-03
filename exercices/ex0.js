const {Point, InfluxDB} = require('@influxdata/influxdb-client')
/**
 * 
 * @param {InfluxDB} client 
 * @param {string} org 
 * @param {string} bucket 
 */
module.exports = async function(client, org, bucket){

    /*
    const writeApi = client.getWriteApi(org, bucket);
    const point = new Point('test')
        .intField('ok', 42)
    writeApi.writePoint(point)
    await writeApi.close()


    let test = await execute(client, org, `from(bucket: "${bucket}") |> range(start: -1h)`);

    console.log(test.length>0?"🥳 OK".green:"😭😭😭😭 PAS OK".red)
    */
    console.log(`🥳 Awesome, it works`)


}

async function execute(client, org, query){
    return new Promise((resolve, reject) => {
        let listing=[];
        const queryApi = client.getQueryApi(org);
        queryApi.queryRows(query,{
            next: (row, tableMeta) => {
                const o = tableMeta.toObject(row)
                listing.push(o)
            },
            error: (err) => {
                reject(err)
            },
            complete() {
                resolve(listing)
            }

        })
    })
}