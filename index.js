const infoData = [
  {"id":640,"name":"路分组","itemIndex":28,"opacity":100,"visible":true,"bounds":{"left":4719,"top":975,"right":24697,"bottom":5272,"width":19978,"height":4297},"typename":"LayerSet","width":19978,"height":4297,"children":[{"id":90,"name":"94fe0af37871ce44de8395a18aeb5fb0","itemIndex":27,"opacity":100,"visible":true,"bounds":{"left":10850,"top":3192,"right":12338,"bottom":3998,"width":1488,"height":806,"relativeLeft":6131,"relativeTop":2217,"relativeRight":12359,"relativeBottom":1274,"percentageLeft":30.68,"percentageRight":61.86,"percentageTop":51.59,"percentageBottom":29.64,"percentageHeight":18.75,"percentageWidth":7.44},"typename":"ArtLayer","width":1488,"height":806,"kind":"SMARTOBJECT","isBackgroundLayer":false,"fileName":"@|90.png|"},
  {"id":502,"name":"图层 28 拷贝","itemIndex":26,"opacity":65,"visible":true,"bounds":{"left":4719,"top":2601,"right":24697,"bottom":5272,"width":19978,"height":2671,"relativeLeft":0,"relativeTop":1626,"relativeRight":0,"relativeBottom":0,"percentageLeft":0,"percentageRight":0,"percentageTop":37.84,"percentageBottom":0,"percentageHeight":62.15,"percentageWidth":100},"typename":"ArtLayer","width":19978,"height":2671,"kind":"NORMAL","isBackgroundLayer":false,"fileName":"@|502.png|"},
  {"id":187,"name":"山1","itemIndex":25,"opacity":100,"visible":true,"bounds":{"left":9495,"top":1928,"right":12698,"bottom":3897,"width":3203,"height":1969,"relativeLeft":4776,"relativeTop":953,"relativeRight":11999,"relativeBottom":1375,"percentageLeft":23.9,"percentageRight":60.06,"percentageTop":22.17,"percentageBottom":31.99,"percentageHeight":45.82,"percentageWidth":16.03},"typename":"ArtLayer","width":3203,"height":1969,"kind":"NORMAL","isBackgroundLayer":false,"fileName":"@|187.png|"},
  {"id":205,"name":"山2","itemIndex":24,"opacity":100,"visible":true,"bounds":{"left":12076,"top":1945,"right":15869,"bottom":3919,"width":3793,"height":1974,"relativeLeft":7357,"relativeTop":970,"relativeRight":8828,"relativeBottom":1353,"percentageLeft":36.82,"percentageRight":44.18,"percentageTop":22.57,"percentageBottom":31.48,"percentageHeight":45.93,"percentageWidth":18.98},"typename":"ArtLayer","width":3793,"height":1974,"kind":"NORMAL","isBackgroundLayer":false,"fileName":"@|205.png|"},
  {"id":198,"name":"高铁","itemIndex":23,"opacity":100,"visible":true,"bounds":{"left":8496,"top":2681,"right":12867,"bottom":2948,"width":4371,"height":267,"relativeLeft":3777,"relativeTop":1706,"relativeRight":11830,"relativeBottom":2324,"percentageLeft":18.9,"percentageRight":59.21,"percentageTop":39.7,"percentageBottom":54.08,"percentageHeight":6.21,"percentageWidth":21.87},"typename":"ArtLayer","width":4371,"height":267,"kind":"SMARTOBJECT","isBackgroundLayer":false,"fileName":"@|198.png|"},
  {"id":219,"name":"桥","itemIndex":22,"opacity":100,"visible":true,"bounds":{"left":8317,"top":2928,"right":16981,"bottom":3473,"width":8664,"height":545,"relativeLeft":3598,"relativeTop":1953,"relativeRight":7716,"relativeBottom":1799,"percentageLeft":18,"percentageRight":38.62,"percentageTop":45.45,"percentageBottom":41.86,"percentageHeight":12.68,"percentageWidth":43.36},"typename":"ArtLayer","width":8664,"height":545,"kind":"NORMAL","isBackgroundLayer":false,"fileName":"@|219.png|"},
  {"id":251,"name":"图层 87","itemIndex":21,"opacity":100,"visible":true,"bounds":{"left":6246,"top":2604,"right":21101,"bottom":4974,"width":14855,"height":2370,"relativeLeft":1527,"relativeTop":1629,"relativeRight":3596,"relativeBottom":298,"percentageLeft":7.64,"percentageRight":17.99,"percentageTop":37.91,"percentageBottom":6.93,"percentageHeight":55.15,"percentageWidth":74.35},"typename":"ArtLayer","width":14855,"height":2370,"kind":"NORMAL","isBackgroundLayer":false,"fileName":"@|251.png|"},
  {"id":224,"name":"山4","itemIndex":20,"opacity":100,"visible":true,"bounds":{"left":6827,"top":1103,"right":11219,"bottom":3119,"width":4392,"height":2016,"relativeLeft":2108,"relativeTop":128,"relativeRight":13478,"relativeBottom":2153,"percentageLeft":10.55,"percentageRight":67.46,"percentageTop":2.97,"percentageBottom":50.1,"percentageHeight":46.91,"percentageWidth":21.98},"typename":"ArtLayer","width":4392,"height":2016,"kind":"NORMAL","isBackgroundLayer":false,"fileName":"@|224.png|"},{"id":201,"name":"山3","itemIndex":19,"opacity":100,"visible":true,"bounds":{"left":10647,"top":975,"right":14332,"bottom":3092,"width":3685,"height":2117,"relativeLeft":5928,"relativeTop":0,"relativeRight":10365,"relativeBottom":2180,"percentageLeft":29.67,"percentageRight":51.88,"percentageTop":0,"percentageBottom":50.73,"percentageHeight":49.26,"percentageWidth":18.44},"typename":"ArtLayer","width":3685,"height":2117,"kind":"NORMAL","isBackgroundLayer":false,"fileName":"@|201.png|"}]}
]

let newData = []
let index = 0
infoData[0].children.forEach(element => {
  newData.push({
    name: element.name,
    fileName: element.fileName,
    width: element.width,
    height: element.height,
    opacity: element.opacity,
    left: element.bounds.left,
    top: element.bounds.top,
    index: index += 2
  })
})

console.log(newData)