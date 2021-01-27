$(".blog-news__list").imagesLoaded(function() {
  $(".blog-news__list").masonry({
    itemSelector: ".blog-news__item",
    horizontalOrder: true,
  });
});