import Mock from 'mockjs';

const Heroes = [];

for (let i = 0; i < 50; i++) {
  Heroes.push(Mock.mock({
    id: Mock.Random.guid(),
    hid: Mock.Random.guid()
    name: Mock.Random.cname(),
    nickName: Mock.Random.cname(),
    dateTime: Mock.Random.datetime(),
    sex: Mock.Random.integer(0, 1),
    avator: Mock.Random.url('http', 'chen1218chen.com'),
    price: Random.Integer(4,4),
    gold: Random.Integer(4,4),
    firstLetter: Random.character('upper') 
  }));
}

export Heroes;
