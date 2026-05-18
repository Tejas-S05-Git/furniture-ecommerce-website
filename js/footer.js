AOS.init({
  once: true,
});

AOS.init({
    once: true,
    duration: 1000,
  });



// ==========================
// FOOTER ACCORDION
// ==========================

const footerAccordion =
  document.querySelectorAll(
    ".footerAccordion"
  );


footerAccordion.forEach(
  (item) => {

    const btn =
      item.querySelector(
        ".footerAccordionBtn"
      );

    const content =
      item.querySelector(
        ".footerAccordionContent"
      );

    const icon =
      btn.querySelector("i");


    btn.addEventListener(
      "click",

      () => {

        // MOBILE ONLY

        if (
          window.innerWidth < 1024
        ) {

          const isOpen =
            content.style.maxHeight;


          // CLOSE ALL

          footerAccordion.forEach(
            (accordion) => {

              const accordionContent =
                accordion.querySelector(
                  ".footerAccordionContent"
                );

              const accordionIcon =
                accordion.querySelector(
                  "i"
                );


              accordionContent.style.maxHeight =
                null;

              accordionIcon.style.transform =
                "rotate(0deg)";
            }
          );


          // OPEN CURRENT

          if (!isOpen) {

            content.style.maxHeight =
              content.scrollHeight +
              "px";

            icon.style.transform =
              "rotate(180deg)";
          }
        }
      }
    );
  }
);


// ==========================
// AUTO COPYRIGHT YEAR
// ==========================

const footerYear =
  document.getElementById(
    "footerYear"
  );

footerYear.textContent =
  new Date().getFullYear();


// ==========================
// BACK TO TOP BUTTON
// ==========================

const backToTop =
  document.getElementById(
    "backToTop"
  );


// SHOW BUTTON

window.addEventListener(
  "scroll",

  () => {

    if (
      window.scrollY > 500
    ) {

      backToTop.classList.remove(
        "opacity-0",
        "invisible"
      );

    } else {

      backToTop.classList.add(
        "opacity-0",
        "invisible"
      );
    }
  }
);


// SCROLL TOP

backToTop.addEventListener(
  "click",

  () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
);
