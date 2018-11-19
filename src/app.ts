import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as mongodb from 'mongodb';
import * as mongoose from 'mongoose';


class App {
  app: express.Application;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    // support application/json type post data
    this.app.use(bodyParser.json({limit: 1e6}));
    // support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({extended: false}));
    // setup environment variables
    dotenv.config();
    // Configure initial route
    this.routesSetup();


    // Set up Mongo
    // this.mongoSetup();
  }

  private mongoSetup(): void {
    const mongoUrl = `${process.env.MONGO_DBURL}/${process.env.MONGO_DBNAME}`;

    mongoose.connect(
        mongoUrl, {useNewUrlParser: true}, (err: mongodb.MongoError) => {
          if (err) {
            console.log(err);
          }
        });
  }

  private routesSetup(): void {
    this.app.get('/', (req, res) => {
      res.send('Hello');
    });
  }
}

export const app = new App().app;
