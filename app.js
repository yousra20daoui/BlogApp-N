const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postRoutes = require('./src/routes/postRoutes');
const middleware = require('./middleware');


mongoose
  .connect("mongodb://localhost:27017/BlogApp" )
  .then(() => {
    console.log("Connected to database");
    
  })
  .catch((error) => console.error("Error connecting to database:", error));
  
  app.use(middleware.loggerMiddleware);
  app.use(bodyParser.json());
  app.use(express.json());
  
  app.use('/posts', postRoutes);

  app.use(middleware.errorHandler);
  



app.listen(PORT, () => {
    console.log(`Serveur Express en cours d'exécution sur le port ${PORT}`);
});
