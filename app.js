require('babel-register')();

const app              = require('express')();
const server           = require('http').Server(app);
const morgan           = require('morgan');
const port             = 2000;
const helpers          = require('./helpers');
const WelcomeComponent = require('./components/Welcome').Welcome;

app.use(morgan('dev'));

app.get('*', (req, res) => {
  
  const str = helpers.render(WelcomeComponent, {
    nick_name: 'JBM'
  });
  
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(str);
  res.end();
  
});

server.listen(port, function () {
  console.log(`Server listening at port ${port}`);
});