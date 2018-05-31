function lazyLoadImages() {
  /**
   * @dest 懒加载页面上的图片。
   */
  const figures = document.querySelectorAll('figure.loading');
  const figuresLazy = [];
  let figuresLoadStatus = 0;
  const scrollTop = getScrollTop() //光标到文档页面顶端滚过的距离。来自getSomeSize.js
  const viewportHeight = getViewportHeight() //浏览器视口高度。来自getSomeSize.js
  for (const oneFigure of figures) {
    const imageWidth = oneFigure.offsetWidth;
    const imageHeight = oneFigure.offsetHeight;
    const imageTop = getOffsetTop(oneFigure);//图片顶部距离文档页面顶端的距离。来自getSomeSize.js
    const imageUrl = oneFigure.getAttribute('data-url') || '';
    if (imageUrl) {
      const oneFigureLazy = {
        imageTop,
        imageUrl
      }
      figuresLazy.push(oneFigure);
    }
  }

  for (const oneFigureLazy of figuresLazy) {
    if (scrollTop + viewportHeight*2 > oneFigureLazy.imageTop ) {
      //当图片距离文档顶部的高度，在scroll之后露出的实际视口高度和下一个视口高度内，就加载。
      figures[i].innerHTML = `<img src="${oneFigureLazy[imageUrl]}"`;
    }
  }
}

function dynamicLoadScriptSrc(url) {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
  document.body.appendChild(script)
}
function dynamicLoadScriptString(code) {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  try {
      script.appendChild(document.createTextNode(code));
  } catch(ex) {
      script.text = code;//For IE
  }
  document.body.appendChild(script);
}
//参考:《Javascirpt高级程序设计》P278

//注意：动态加载的script并不能准确知道何时加载完成，所以html后面不能有变量依赖动态加载进来的script代码