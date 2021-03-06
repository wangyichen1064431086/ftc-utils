function getOffsetTop(el) { 
  /**
   * @dest 获得el元素距页面顶部的距离。对应NEXT中main.js的findTop函数.
   * @param el: TYPE HTMLElement, 目标元素
   * @return:TYPE Number,得到的距离值，单位px
   */
  let curTop = el.offsetTop;
  while (el && el.offsetParent) { 
    //NOTE:HTMLElement.offsetParent 是一个只读属性，返回一个指向最近的（closest，指包含层级上的最近）包含该元素的定位元素。对于fixed元素来说，其offsetParent是null而非fixed定位的那个视口,所以offsetTop要先执行一次
    el = el.offsetParent;
    curTop += el.offsetTop;//NOTE:HTMLElement.offsetTop 为只读属性，它
  }
  return curTop;
}

//getOffsetTop和left还有另外的方式：待细研究。
function getOffsetOtherMethod (el) {
  //来自《深入React技术栈》一书的P128
  const html = el.ownerDocument.documentElement;
  const box = el.getBoundingClientReact();
  return {
    top: box.top + window.pageYOffset - html.clientTop,
    left: box.left + window.pageXOffset - html.clientLeft
  }

}

function getScrollTop() { 
  /**
   * @dest 获得光标现在滚动到的位置距页面顶部的距离。
   * @return TYPE Number,得到的距离值，单位px
   */
  const isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
  /*NOTE:document.compatMode：表明文档的渲染模式是混杂模式or标准模式
  * 混杂模式值为 "BackCompat"
  * 标准模式值为 "CSS1Compat"
  */
  return window.pageYOffset || isCSS1Compat ? document.documentElement.scrollTop : document.body.srcollTop;
  /* NOTE:
   * window.scrollY:返回文档在垂直方向已滚动的像素值
   * window.pageYOffset:scrollY的别名。为了跨浏览器兼容，请使用 window.pageYOffset 代替 window.scrollY。但IE9以下两种属性都不支持，需要使用scrollTop
   * Element.scrollTop 属性可以获取或设置一个元素的内容垂直滚动的像素数。
  */
}

function getViewportWidth() {
  /**
   * @dest 获得浏览器当前视口的高度
   * @source 源于NEXT中main.js的function getBodyHeight()
   */
  return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  /** NOTE：
   * window.innerHeight:浏览器窗口的视口（viewport）高度（以像素为单位），就是DOM在浏览器窗口中能看到的那部分的高度。如果存在水平滚动条，则包括它；如果底部是控制台窗口，则去除了控制台窗口的高度
  * 

   * 
   */
}
