import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Îndex Page');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}...`);
});
