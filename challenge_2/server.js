const express = require('express');
const app = express();
const axios = require('axios');
const port = 7676;


app.use(express.static('./public'));

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})

