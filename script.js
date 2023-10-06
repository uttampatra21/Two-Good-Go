const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

const videoAnimition = () => {
  const videoCont = document.getElementById("book");
  const play = document.getElementById("play");
  videoCont.addEventListener("mouseenter", () => {
    gsap.to(play, {
      scale: 1,
      opacity: 1,
    });
  });
  videoCont.addEventListener("mouseleave", () => {
    gsap.to(play, {
      scale: 0,
      opacity: 0,
    });
  });

  videoCont.addEventListener("mousemove", (dets) => {
    gsap.to(play, {
      left: dets.x - 20,
      top: dets.y - 20,
    });
  });
};
videoAnimition();

const loadingAnimition = () => {
  gsap.from("#page1 h1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    stagger: 0.5,
    duration: 0.7,
  });
  gsap.from("#page1 #book", {
    y: 99,
    opacity: 0,
    delay: 1.6,
    duration: 0.9,
  });
};
loadingAnimition();
