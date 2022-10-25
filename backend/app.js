/* 
    NOTE: This app is bare bones as I considered it overkill for this assignment to use the express generator.
    We only really need 1 endpoint that acts as a pass through
*/
import fetch from 'node-fetch';
import express from 'express';
import cors from 'cors';
const app = express()
const port = 3030

app.use(cors())

app.get('/search', async (req, res) => {
    const [specificKey] = Object.keys(req.query);
    const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&${specificKey}=true&q=${req.query[specificKey]}`);
    const data = await response.json();

    data.objects = await fetchObjects(data.objectIDs, data.total);

    res.json(data);
})

const fetchObjects = async (ids, totalIds) => {
    const metArt = [];
    // This was made in order to control the request limit to 80 per sec assuming each req takes around a sec.
    // TODO: Add a way to include pagination for more than 80 items
    for (let i = 0; i < totalIds && i < 75; i++) {
        const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${ids[i]}`);
        const data = await response.json();
        metArt.push(data)
    }
    return metArt;
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})