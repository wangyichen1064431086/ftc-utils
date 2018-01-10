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