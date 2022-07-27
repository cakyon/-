var r = 250;
var itemList = document.querySelector('.item-list'); 
var count = itemList.children.length; 


function dispatch(extraDeg) {
  var pieceDeg = 360 / count; 
  for (var i = 0; i < count; i++) {
    var li = itemList.children[i];
    var deg = i * pieceDeg + extraDeg;
    var rad = ((2 * Math.PI) / 360) * deg; 
    var x = Math.sin(rad) * r;
    var y = -Math.cos(rad) * r;
    li.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
  }
}
dispatch(0);

var timerId = null;
var curExtraDeg = 0;
function start() {
  if (timerId) {
    return;
  }
  timerId = setInterval(function () {
    dispatch(curExtraDeg);
    curExtraDeg += 0.5;
    if (curExtraDeg > 360) {
      curExtraDeg -= 360;
    }
  }, 16);
}

function stop() {
  clearInterval(timerId);
  timerId = null;
}

itemList.onmouseenter = stop;
itemList.onmouseleave = start;

start();

var map = document.querySelector('.map');
var teacher = document.querySelector('.teacher');
map.onmousemove = function (e) {
  var x = e.clientX;
  if (x < document.documentElement.clientWidth / 2) {
    teacher.className = 'teacher left';
  } else {
    teacher.className = 'teacher';
  }
};
