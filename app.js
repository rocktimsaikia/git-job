#!/usr/bin/env node

const chalk = require('chalk');
const meow = require('meow');
const striptags = require('striptags');
const CLI = require('./cli');

chalk.enabled = true;
chalk.level = 3;

// As Chalk does not work on bash .This is workaround function to escape the coloured string,
// src : https://stackoverflow.com/a/48588723
function fixColors(str) {
  return unescape(
    escape(
      str,
    )
      .replace(/\%1B/i, '%1B'),
  );
}


const cli = meow(fixColors(chalk`{magenta Usage :}
           $ gitjob <city> <lang> 

    {magenta Examples :}
           $ gitjob
                     
           $ gitjobs newyork python :
              
             "{yellowBright Position} : {cyanBright Frontend Engineer}
              {yellowBright Job Type} : {cyanBright Full Time}
              {yellowBright Company}  : {cyanBright Google}
              {yellowBright Location} : {cyanBright California}
              {yellowBright Apply here} : {cyanBright https://applyforthisjob.com}
              {yellowBright Company website} : {cyanBright google.com}"
    `, {}));

CLI.getJobs(cli.input).then((data) => {
  for (let i = 0; i < data.length; i += 1) {
    const {
      id, type, title, company, created_at, location, how_to_apply, company_url, details,
    } = data[i];
    //  Thu, Mar, 28, 14:57:49, UTC, 2019 - step one
    const arr = created_at.split(' ');
    arr.splice(3, 2);//  Thu, Mar, 28, 2019 - step two
    let date = [arr[1], arr[2]]; // [Mar,28]
    date = date.join('-'); //= Mar28
    arr.splice(1, 2, date);
    const time = arr.join(' ');

    // regex check for 'how_to_apply' property
    const urlReg = /(https?:\/\/[^\s]+)/g;
    let website = striptags(how_to_apply);
    website = urlReg.exec(website);
    // checking for null field
    if (website !== null) {
      [website] = website;
    } else {
      website = 'Not given';
    }


    console.log(fixColors(chalk`{yellowBright (${i + 1})}
              {yellowBright Position} : {cyanBright.bold.magentaBright ${title}}💻
              {yellowBright Job Type} : {cyanBright ${type}}
              {yellowBright Company}  : {cyanBright ${company}}
              {yellowBright Location} : {cyanBright ${location}}
              {yellowBright Posted At} : {cyanBright ${time}}
              {yellowBright Apply here} : {cyanBright.underline ${website}.}
              {yellowBright Company website} : {cyanBright.underline ${company_url}.}
              {yellowBright More details here} : {cyanBright.underline https://jobs.github.com/positions/${id}.}
              `));

    /*
    //TODO :

              //Trying to expand the description section only on user command
              //Still researching , will make it happen soon.

              let details=description;
              const reg = /[A-Z]([(\s)a-z]+:)$/gmi;
              if(description.match(reg)){
                     const markedWords = description.match(reg);
                     const highlightedWords = markedWords.map(i=>chalk.yellowBright(i));

                     for(let j=0;j<markedWords.length;j++){
                          details = details.replace(markedWords[j],`
              \n             ${highlightedWords[j]}`);
                     }
              }else{
                     details=description;
              }
              */
  }
});
