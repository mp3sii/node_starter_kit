//@ts-ignore
import * as jsf from 'json-schema-faker';
//@ts-ignore
import {userSchema} from './mockDataSchema';
import * as fs from 'fs';
import * as chalk from 'chalk';
import * as faker from 'faker';

const json = JSON.stringify(jsf.generate(userSchema));

fs.writeFile('./src/api/db.json', json, err => {
  err ? console.log(err) : console.log(chalk.default('mock data generated'));
  console.log(faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));

});


