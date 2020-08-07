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

var user_agent = navigator.userAgent;
if (user_agent.indexOf('Chrome/6') > 0) {
  document.getElementById('videoPlay').setAttribute('x5-video-orientation', 'portrait')
}

var vidElement = document.getElementById('preload');
var vidSources = [
  "http://flv4.people.com.cn/videofile6//pvmsvideo/2020/8/6/QuanMeiTiZhiZuoErBu-ZhangRui_d321a44a592397f531160f33985ab87a.mp4",
  "http://flv4.people.com.cn/videofile6//pvmsvideo/2020/8/6/QuanMeiTiZhiZuoErBu-ZhangRui_b2db8c177d190a413b9836071aa717c5.mp4",
  "http://flv4.people.com.cn/videofile6/pvmsvideo/2020/8/5/QuanMeiTiZhiZuoErBu-ZhangRui_1aa3e1d44ffef1a6e94d97adcb53584d.mp4",
  "http://flv4.people.com.cn/videofile6/pvmsvideo/2020/8/5/QuanMeiTiZhiZuoErBu-ZhangRui_ef7d39b04eff64552bf5e90a90f6d8e2.mp4",
  "http://flv4.people.com.cn/videofile6/pvmsvideo/2020/8/5/QuanMeiTiZhiZuoErBu-ZhangRui_c03916e44973528f4fcd9bfabb61a049.mp4",
  "http://flv4.people.com.cn/videofile6//pvmsvideo/2020/8/6/QuanMeiTiZhiZuoErBu-ZhangRui_e82f926e8539aabb7d02f7b22e8973e5.mp4",
  "http://flv4.people.com.cn/videofile6/pvmsvideo/2020/8/5/QuanMeiTiZhiZuoErBu-ZhangRui_9436272f1910aaeb40fbee603324fb24.mp4",
  "http://flv4.people.com.cn/videofile6/pvmsvideo/2020/8/5/QuanMeiTiZhiZuoErBu-ZhangRui_8e34538bf768836fcf23ca273c5d20ac.mp4",
  "http://flv4.people.com.cn/videofile6/pvmsvideo/2020/8/5/QuanMeiTiZhiZuoErBu-ZhangRui_aa1f27a065733e84a30b0496f7c08763.mp4",
  "http://flv4.people.com.cn/videofile6/pvmsvideo/2020/8/5/QuanMeiTiZhiZuoErBu-ZhangRui_f4d1febf793ae536342671bb169eddc7.mp4",
];

function loadVideo (element, index) {
  setTimeout(function () {
    vidElement.src = element;
    console.log(vidElement)
    vidElement.play()
    setTimeout(function () {
      vidElement.pause()
    }, 800);
  }, 1000 * index);
}

setTimeout(function () {
  if (!_owo.isMobi) {
    document.querySelector('.more').style.top = '20%'
    document.querySelector('.share').style.top = '-100%'
  }
}, 1000);