const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://sanchitasethi14:flLh6A2CVfNOfwKl@cluster0.2urn5cp.mongodb.net/?retryWrites=true&w=majority'

async function getEmpData() {
    let client = await MongoClient.connect(url);
    let connection = client.db('issueTracker'); // Establish connection
    return connection.collection('IssueTracker2023'); // creating a collection and naming it also
}

module.exports = getEmpData;