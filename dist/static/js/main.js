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
      camera.position.z = camera.position.z -= 5
      break;
    case 65:
      camera.position.x = camera.position.x -= 5
      break;
    case 83:
      camera.position.z = camera.position.z += 5
      break;
    case 68:
      camera.position.x = camera.position.x += 5
      break;
    case 69:
      camera.rotation.y = camera.rotation.y -= 0.1
      break;
    case 81:
      camera.rotation.y = camera.rotation.y += 0.1
      break;
    default:
      break;
  }
}, {passive: false})