var infoData = [
  {
    name: '文字-山',
    fileName: '@|文字-山.png|',
    width: 85,
    height: 85,
    opacity: 100,
    left: 4558,
    top: 741,
    index: 30
  },
  {
    name: '文字-路',
    fileName: '@|文字-路.png|',
    width: 85,
    height: 84,
    opacity: 100,
    left: 13226,
    top: 568,
    index: 34
  },
  {
    name: '文字-土',
    fileName: '@|文字-土.png|',
    width: 88,
    height: 88,
    opacity: 100,
    left: 12370,
    top: 634,
    index: 38
  },
  {
    name: '文字-药',
    fileName: '@|文字-药.png|',
    width: 88,
    height: 87,
    opacity: 100,
    left: 11491,
    top: 551,
    index: 40
  },
  // {
  //   name: '远山-3',
  //   fileName: '@|远山-3.png|',
  //   width: 2958,
  //   height: 677,
  //   opacity: 100,
  //   left: 8031,
  //   top: 615,
  //   index: 158
  // },
  {
    name: '药土路-土块',
    fileName: '@|药土路-土块.png|',
    width: 129,
    height: 86,
    opacity: 100,
    left: 12731,
    top: 802,
    index: 136
  },
  {
    name: '药土路-房间-1',
    fileName: '@|药土路-房间-1.png|',
    width: 248,
    height: 172,
    opacity: 100,
    left: 11222,
    top: 599,
    index: 138
  },
  {
    name: '药土路-房间-2',
    fileName: '@|药土路-房间-2.png|',
    width: 609,
    height: 130,
    opacity: 100,
    left: 11478,
    top: 651,
    index: 140
  },
  {
    name: '药土路-山-1',
    fileName: '@|药土路-山-1.png|',
    width: 977,
    height: 240,
    opacity: 100,
    left: 10597,
    top: 480,
    index: 142
  },
  {
    name: '药土路-山-2',
    fileName: '@|药土路-山-2.png|',
    width: 2361,
    height: 555,
    opacity: 100,
    left: 11201,
    top: 467,
    index: 144
  },
  {
    name: '高铁',
    fileName: '@|高铁.png|',
    width: 869,
    height: 53,
    opacity: 100,
    left: 13662,
    top: 629,
    index: 146
  },
  {
    name: '桥面',
    fileName: '@|桥面.png|',
    width: 3706,
    height: 102,
    opacity: 100,
    left: 12282,
    top: 683,
    index: 148
  },
  {
    name: '药土路-山-3',
    fileName: '@|药土路-山-3.png|',
    width: 1178,
    height: 289,
    opacity: 100,
    left: 11148,
    top: 407,
    index: 150
  },
  {
    name: '药土路-背景',
    fileName: '@|药土路-背景.png|',
    width: 5441,
    height: 676,
    opacity: 100,
    left: 10670,
    top: 598,
    index: 152
  },
  {
    name: '药土路-远山',
    fileName: '@|药土路-远山.png|',
    width: 7440,
    height: 591,
    opacity: 100,
    left: 8555,
    top: 242,
    index: 154
  },
  // {
  //   name: '远山-2',
  //   fileName: '@|远山-2.png|',
  //   width: 3287,
  //   height: 547,
  //   opacity: 100,
  //   left: 7701,
  //   top: 183,
  //   index: 156
  // },
]
let newData = []
let index = 0
let data = ''
infoData.forEach(element => {
  data += `{name: '${element.name}',fileName: '${element.fileName}',width: ${element.width},height: ${element.height},opacity: ${element.opacity},left: ${element.left - 12000},top: ${element.top - 1000},index: ${element.index + 550}},
  `
})

console.log(data)