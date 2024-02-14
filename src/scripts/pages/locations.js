function animateCards() {
  const ANIMATION_CLASS = "animations__fade-in";

  const element = document.querySelector("#locations-cards");

  if (!element) {
    throw new Error("Element not found");
  }

  const children = element.children;

  console.log(children);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const isIntersecting = entry.isIntersecting;
        const target = entry.target;

        if (isIntersecting) {
          target.classList.add(ANIMATION_CLASS);
          observer.unobserve(target);
        }
      });
    },
    { threshold: 0.01 }
  );

  for (let i = 0; i < children.length; i++) {
    observer.observe(children[i]);
  }
}

function animatePoints() {
  const ANIMATION_CLASS = "animations__from-left";

  const element = document.querySelector("#locations-points");

  if (!element) {
    throw new Error("Element not found");
  }

  const children = element.children;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const isIntersecting = entry.isIntersecting;
        /**
         * @type {HTMLDivElement}
         */
        const target = entry.target;

        if (isIntersecting) {
          target.style.animationDuration = `${Math.random() * 1000}ms`;
          target.classList.add(ANIMATION_CLASS);

          observer.unobserve(target);
        }
      });
    },
    { threshold: 0.01 }
  );

  for (let i = 0; i < children.length; i++) {
    observer.observe(children[i]);
  }
}

function init() {
  animateCards();
  animatePoints();
}

init();
