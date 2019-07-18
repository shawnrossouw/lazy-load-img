const imageObs = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        target.src = target.getAttribute("data-src");
        target.onload = () => {
          target.classList.add("loaded");
          observer.unobserve(target);
        };
      }
    });
  },
  {
    threshold: 0.05,
    rootMargin: "48px"
  }
);

document.querySelectorAll("[data-src]").forEach(image => {
  imageObs.observe(image);
});
