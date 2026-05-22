//
// =========================
// SCROLL PROGRESS BAR
// =========================
//

window.addEventListener("scroll", () => {

  const scrollTop = window.scrollY;

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrolled = (scrollTop / height) * 100;

  document.getElementById("progressBar")
    .style.width = scrolled + "%";

});





//
// =========================
// COUNTER ANIMATION
// =========================
//

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {

      const counter = entry.target;

      const target = +counter.dataset.target;

      let count = 0;

      const increment = target / 80;

      const updateCounter = () => {

        count += increment;

        if (count < target) {

          counter.innerText = Math.ceil(count);

          requestAnimationFrame(updateCounter);

        }

        else {

          if (target === 100) {

            counter.innerText = target + "k+";

          }

          else {

            counter.innerText = target + "+";

          }

        }

      };

      updateCounter();

      counterObserver.unobserve(counter);

    }

  });

}, {
  threshold: 0.5
});

counters.forEach((counter) => {

  counterObserver.observe(counter);

  
});


//
// =========================
// TEAM CARD STAGGER EFFECT
// =========================
//

const teamCards = document.querySelectorAll(".team-card");

teamCards.forEach((card, index) => {

  card.style.transitionDelay = `${index * 120}ms`;

});





//
// =========================
// MAGNETIC SOCIAL ICONS
// =========================
//

const socialIcons = document.querySelectorAll(".social-icon");

socialIcons.forEach((icon) => {

  icon.addEventListener("mousemove", (e) => {

    const rect = icon.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;

    const y = e.clientY - rect.top - rect.height / 2;

    icon.style.transform =
      `translate(${x * 0.15}px, ${y * 0.15}px)`;

  });





  icon.addEventListener("mouseleave", () => {

    icon.style.transform = "translate(0px,0px)";

  });

});