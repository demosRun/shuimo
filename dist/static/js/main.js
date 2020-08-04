function scrollIntoView () {
  window.scrollTo(0, 0)
}

// 阻止微信拖动
document.body.addEventListener('touchmove', function (e) {
  e.preventDefault() // 阻止默认的处理方式(阻止下拉滑动的效果)
}, {passive: false})

document.body.addEventListener('keyup', function (e) {
  // console.log(e)
  switch (e.keyCode) {
    case 87:
      camera.position.z -= 1 * owo.script.page1.data.beishu
      break;
    case 65:
      camera.position.x -= 1 * owo.script.page1.data.beishu
      break;
    case 83:
      camera.position.z += 1 * owo.script.page1.data.beishu
      break;
    case 68:
      camera.position.x += 1 * owo.script.page1.data.beishu
      break;
    case 69:
      camera.rotation.y -= 0.1 * owo.script.page1.data.beishu
      break;
    case 81:
      camera.rotation.y += 0.1 * owo.script.page1.data.beishu
      break;
    case 107:
      camera.position.y += 1 * owo.script.page1.data.beishu
      break;
    case 109:
      camera.position.y -= 1 * owo.script.page1.data.beishu
      break;
    default:
      break;
  }
}, {passive: false})

var musicIsPlay = false

setTimeout(function() {
  var box = document.getElementById('videoPlay')
  if (window.innerWidth / window.innerHeight < 1) {
    if (window.innerHeight / window.innerWidth < 1.77) {
      box.style.height = '100%'
      box.style.width = 'auto'
    } else {
      box.style.height = 'auto'
      box.style.width = '100%'
    }
  } else {
    if (window.innerWidth / window.innerHeight > 1.77) {
      box.style.height = 'auto'
      box.style.width = '100%'
    } else {
      box.style.height = '100%'
      box.style.width = 'auto'
    }
  }
  
}, 1000);