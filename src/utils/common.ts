/**
* 缓冲函数
* @param {Object} dom 目标dom
* @param {Number} destination 目标位置
* @param {Number} rate 缓动率
* 示例用法
* var dom = document.documentElement || document.body;
* this.$util.easeout(dom, 0, 5);
*/
export function easeout(dom: HTMLElement, destination = 0, rate = 3) {
 let position = dom.scrollTop;
 if (
   position === destination ||
   typeof destination !== 'number' ||
   rate === 0
 ) {
   return false;
 }
 // 不存在原生`requestAnimationFrame`，用`setTimeout`模拟替代
 if (!window.requestAnimationFrame) {
   window.requestAnimationFrame = function(fn) {
     return setTimeout(fn, 17);
   };
 }
 const step = function() {
   position = position + (destination - position) / rate;
   if (Math.abs(destination - position) < 1) {
     // 动画结束
     dom.scrollTop = destination;
     return;
   }
   dom.scrollTop = position;
   requestAnimationFrame(step);
 };
 step();
}
