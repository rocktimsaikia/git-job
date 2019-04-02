const axios = require('axios');
const striptags = require('striptags');

async function getJobs(input) {
  const baseURL = 'https://jobs.github.com/positions.json';
  const [city, lang] = input;

  const url = (input == '') ? baseURL : `${baseURL}?description=${lang}&location=${city}`;


  const { data } = await axios.get(url);
  const arr = [];

  for (let i = 0; i < data.length; i += 1) {
    const {
      id, type, title, company, created_at, location, description, how_to_apply, company_url,
    } = data[i];
    const details = striptags(description);
    arr.push({
      id,
      type,
      title,
      company,
      created_at,
      location,
      how_to_apply,
      company_url,
      details,
    });
  }
  return arr;
}

module.exports.getJobs = getJobs;
