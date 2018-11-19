import * as dotenv from 'dotenv';
import {app} from '../app';

dotenv.config();

app.listen(process.env.SERVER_PORT || 8080, () => {
  console.log('ready');
});
