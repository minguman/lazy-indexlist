import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { Heroes } from './data/heroes';

console.log(Heroes)

let _Heroes = Heroes;

let mock = new MockAdapter(axios);
//获取info列表
mock.onGet('/api/heroes').reply(config => {
  console.dir(config);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200,{
        heroes: _Heroes
      }]);
    },1000);
  })
})


export default mock