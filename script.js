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

const scroolAnimition = () => {};
scroolAnimition();
