import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { Heroes } from './data/heroes';
import { mergeSort } from '@/util/'
let _Heroes = Heroes;

export default {

	bootstrap(){
		let mock = new MockAdapter(axios);
    //获取info列表
    mock.onGet('/api/heroes').reply(config => {

      let sortHeroes = mergeSort(_Heroes, 'firstLetter')
      //console.log(mergeSort(_Heroes, 'firstLetter'))
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200,{
            data: sortHeroes,
            message: 'Success'
          }]);
        },100);
      })
    })
    // mock.onGet('/api/heroes').reply(200, {
    //   data: _Heroes
    // })
	}
}