const locomotiveScrollTriger = () => {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".smooth-scroll", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".smooth-scroll").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
};
locomotiveScrollTriger();

// gsap.to(".logo svg", {
//   // transform: "translateY(-100%)",
// });
//
//

//
//
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
//
//
const loadingAnimition = () => {
  gsap.from("#page1 h1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    stagger: 0.5,
    duration: 0.7,
  });
  gsap.from(["#page1 #book", "#child1"], {
    y: 99,
    opacity: 0,
    delay: 1.6,
    duration: 0.9,
  });
};
loadingAnimition();
//
//
const page3Scrool = () => {
  document.addEventListener("mousemove", (dets) => {
    gsap.to("#cursor", {
      left: dets.x,
      top: dets.y,
    });
  });

  const child = document.querySelectorAll("#child");
  console.log(child);
  child.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      gsap.to("#cursor", {
        transform: `translate(-50%, -50%) scale(1)`,
      });
    });

    element.addEventListener("mouseleave", () => {
      gsap.to("#cursor", {
        transform: `translate(-50%, -50%) scale(0)`,
      });
    });
  });
};
page3Scrool();
