
const express = require('express');
const app = express();
const port = 3000;

app.use(
  express.static('public')
);
app.use(
  '/images',
  express.static('public')
);
app.use(
  '/hawk',
  express.static('public/hawk')
);
app.use(
  '/raven',
  express.static('public/raven')
);

app.listen(port, () => {
  console.log('File Storage Server @ ' + port);
});