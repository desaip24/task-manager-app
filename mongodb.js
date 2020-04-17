const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
    if(error){
        return console.log("unable to connect to db")
    }

    console.log("connection to db successfully")

    const db = client.db(databaseName)

    db.collection('users').updateOne({
        name: 'Parth',
        
    },{
        $set: {
            name : 'mike'
        }
    }).then((result) =>{
        console.log(result.modifiedCount)
    }).catch((e) => {
        console.log('error'+ e)
    })

    db.collection('tasks').insertMany([
        {
            description: 'node.js',
            status: true
        },
        {
            description: 'angular.js',
            status: false 
        },
        {
            description: 'PWA',
            status: false
        }
    ], (error, result) =>{
        if(error){
            return console.log("unable to insert")
        }
        console.log(result.ops)
    })
})
