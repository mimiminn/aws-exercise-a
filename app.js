const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<html><body><iframe width="560" height="315" src="https://www.youtube.com/embed/JaqXmpfQmnk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br>나로호 발사 성공!!!!!</body></html>' );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

app.get('/health', (req, res) => {
  res.status(200).send();
});
