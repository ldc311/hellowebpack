import _ from 'lodash';
import printMe from './print.js';
import './style.css';
import Layer from './components/layer/layer';
import Icon from './icon.png';

function hello() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
  element.classList.add('hello');
  // 将图像添加到我们现有的 div。
  var myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  var btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);
  
  return element;
}

function createLayer()
{
  var element = document.createElement('div');
  var layer = new Layer();
  element.innerHTML = layer.tpl({
    name: 'john',
    people: ['zhang', 'wang', 'li']
  });

  return element;
}

document.body.appendChild(hello());
document.body.appendChild(createLayer());
//用Visual Studio Code搭建Node.js开发环境
//https://www.bilibili.com/video/av5827351/
console.log("console is here");
const num = 1;
//alert(num);