let result = [
  {
    id: 1,
    type: 'Article',
    createAt: '2019-06-12 08:10:20',
    updateAt: '2019-08-15 09:00:00',
  },
  {
    id: 2,
    type: 'Answer',
    createAt: '2019-04-11 08:11:23',
    updateAt: '2019/08/15 09:00:00',
  },
  {
    id: 3,
    type: 'Course',
    createTime: 1554941483000,
    updateAt: 1565830800000,
  }
]

let adapter = function (item) {
  switch (item.type) {
    case 'Article':
      [item.createAt, item.updateAt] = [
        new Date(item.createAt.replace(/-/g, '/')).getTime(),
        new Date(item.updateAt.replace(/-/g, '/')).getTime()
      ]
      break;
    case 'Answer':
      item.createAt = new Date(item.createAt.replace(/-/g, '/')).getTime();
      break;
    case 'Course':
      item.createAt = item.createTime
      break;
  }
}
let endResult = result.map(item => {
  adapter(item)
  console.log(item.createAt)
});