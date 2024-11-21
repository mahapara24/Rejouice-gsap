function cursorEffect() {
  var page1Content = document.querySelector("#page1-content");
  var Cursor = document.querySelector("#cursor");

  page1Content.addEventListener("mousemove", function (e) {
    gsap.to(Cursor, { x: e.x, y: e.y });
  });

  page1Content.addEventListener("mouseenter", function () {
    gsap.to(Cursor, {
      scale: 1,
      opacity: 1,
    });
  });

  page1Content.addEventListener("mouseleave", function () {
    gsap.to(Cursor, {
      scale: 0,
      opacity: 0,
    });
  });
}
cursorEffect();

function page2Animation() {
  gsap.from(" h1", {
    y: 120,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "body",
      start: "top 47%",
      end: "top 46%",

      scrub: 2,
    },
  });
}
page2Animation();

gsap.from("page2nav h3"),
  {
    x: 120,
    stagger: 0.2,
    duration: 1,
    duration: 1,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "body",
      start: "top 47%",
      end: "top 46%",
      markers: true,
      scrub: 2,
    },
  };
