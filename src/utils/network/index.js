import axios from 'axios';
import {api_url} from './config';
import fp from 'lodash/fp';


const mapWithKey = fp.map.convert({cap: false});

const validateParams = (config, payload) => fp.flow(
  fp.get('params'),
  fp.difference(fp.keys(payload))
)(config);

const rejected = type => error => {

  console.error(`${type}\n${error}`);
};

const appendParams = fp.flow(
  mapWithKey((value, key) => `${key}=${value}&`),
  fp.join('')
);

export const networkRequest = (config, payload) => {

  const invalidParams = fp.has('params', config)
    ? validateParams(config, payload)
    : [];

  if (fp.isEmpty(invalidParams)) {

    const url = api_url + appendParams({
      ...fp.pick('action', config),
      ...payload
    });

    return axios({
      ...fp.pick(['method', 'headers'], config),
      url
    })
      .then(response => { return response; })
      .catch(rejected('[NEWORK ERROR]'));
  }

  return Promise.reject(new Error('Invalid Params: ' + fp.join(', ', invalidParams)))
    .then(fp.noop, rejected('[INVALID PARAM]'));
};
