import Mock from 'mockjs';

const Heroes = [];

for (let i = 0; i < 100; i++) {
  Heroes.push(Mock.mock({
    firstLetter: Mock.Random.character('upper'),
    "id|1-100": 100,
    "hid|10000-70000": 10001,
    name: Mock.Random.cname(),
    nickName: Mock.Random.cname(),
    dateTime: Mock.Random.datetime(),
    sex: Mock.Random.integer(0, 1),
    avator: Mock.Random.image('50x50', '#EEEEEE'),
    "price|200-9999": 200
    
  }));
}

export  { Heroes };
