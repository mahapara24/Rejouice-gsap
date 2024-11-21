var page1Content = document.querySelector("#page1-content");
var Cursor = document.querySelector("#cursor");

page1Content.addEventListener("mousemove", function (e) {
  gsap.to(Cursor, { x: e.x, y: e.y });
});

page1Content.addEventListener("mouseenter", function () {
  gsap.to(Cursor, {
    scale: 1,
  });
});

page1Content.addEventListener("mouseleave", function () {
  gsap.to(Cursor, {
    scale: 0,
  });
});
