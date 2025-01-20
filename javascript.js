const express = require('express')
const app = express();
const port = 2006;

app.use(express.static('public'));
app.use('/images', express.static('images'));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});