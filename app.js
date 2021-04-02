const  express    = require('express'),
       app        = express(),
       port       = process.env.PORT || 3000,
       bodyParser = require('body-parser'),
       path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const publicPath = path.join(__dirname, '/client', 'dist');

app.use(express.static(publicPath));
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => console.log(`Server is running on ${port}`));
