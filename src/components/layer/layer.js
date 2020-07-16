import './layer.less';
//从layer.html导入的tpl为字符串
//import tpl from './layer.html';
//从handlebars导入的tpl为函数，通过函数的参数把值传入模板中。
import tpl from './layer.handlebars';
function layer() {
    return {
        name: 'layer',
        tpl: tpl
    };
}

export default layer;