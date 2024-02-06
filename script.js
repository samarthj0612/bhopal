gsap.to("#main2 #img", {
  scrollTrigger: {
    trigger: "#main2",
    start: "30% 60%",
    end: "30% 20%",
    scrub: 3
  },
  y: 100,
});