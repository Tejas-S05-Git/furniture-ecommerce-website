

// ==========================
// HERO SWIPER
// ==========================

const heroSwiper = new Swiper(".heroSwiper", {
  loop: true,

  spaceBetween: 25,

  grabCursor: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".heroNext",
    prevEl: ".heroPrev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    1024: {
      slidesPerView: 1.4,
    },
  },
});


// ==========================
// AOS INIT
// ==========================

AOS.init({
  once: true,
});

AOS.init({
    once: true,
    duration: 1000,
  });



  // ===========================
// AOS
// ===========================

AOS.init({
  once: true,
  duration: 1000,
});


// ===========================
// PRODUCTS SWIPER
// ===========================

const productsSwiper = new Swiper(".productsSwiper", {
  loop: true,

  spaceBetween: 25,

  grabCursor: true,

  navigation: {
    nextEl: ".productsNext",
    prevEl: ".productsPrev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    640: {
      slidesPerView: 1.5,
    },

    1024: {
      slidesPerView: 2.5,
    },

    1400: {
      slidesPerView: 3.2,
    },
  },
});


// ===========================
// FILTER BUTTONS
// ===========================

const filterBtns =
  document.querySelectorAll(".filterBtn");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {

    filterBtns.forEach((item) => {
      item.classList.remove(
        "bg-primary",
        "text-white"
      );

      item.classList.add(
        "bg-white",
        "text-zinc-800",
        "border"
      );
    });

    btn.classList.add(
      "bg-primary",
      "text-white"
    );
  });
});


// ==========================
// PRODUCT MODAL
// ==========================

const modal =
  document.getElementById("productModal");

const closeModal =
  document.getElementById("closeModal");

const productCards =
  document.querySelectorAll(".productCard");

const modalImage =
  document.getElementById("modalImage");

const modalTitle =
  document.getElementById("modalTitle");

const modalPrice =
  document.getElementById("modalPrice");

const modalDescription =
  document.getElementById("modalDescription");


// OPEN MODAL

productCards.forEach((card) => {

  const eyeBtn =
    card.querySelector(".openModal");

  eyeBtn.addEventListener("click", () => {

    const image =
      card.dataset.image;

    const title =
      card.dataset.title;

    const price =
      card.dataset.price;

    const description =
      card.dataset.description;

    // SET DATA

    modalImage.src = image;

    modalTitle.textContent = title;

    modalPrice.textContent = price;

    modalDescription.textContent =
      description;

    // OPEN

    modal.classList.remove("hidden");

    modal.classList.add("flex");

    document.body.style.overflow =
      "hidden";
  });
});


// CLOSE MODAL

closeModal.addEventListener("click", () => {

  modal.classList.add("hidden");

  modal.classList.remove("flex");

  document.body.style.overflow =
    "auto";
});


// OUTSIDE CLICK CLOSE

modal.addEventListener("click", (e) => {

  if (e.target === modal) {

    modal.classList.add("hidden");

    modal.classList.remove("flex");

    document.body.style.overflow =
      "auto";
  }
});


// ===========================
// REAL COUNTDOWN
// ===========================

const days =
  document.querySelector(".days");

const hours =
  document.querySelector(".hours");

const mins =
  document.querySelector(".mins");

const secs =
  document.querySelector(".secs");

let totalSeconds = 5 * 24 * 60 * 60;

setInterval(() => {

  let d =
    Math.floor(totalSeconds / 86400);

  let h =
    Math.floor((totalSeconds % 86400) / 3600);

  let m =
    Math.floor((totalSeconds % 3600) / 60);

  let s =
    totalSeconds % 60;

  days.textContent =
    String(d).padStart(2, "0");

  hours.textContent =
    String(h).padStart(2, "0");

  mins.textContent =
    String(m).padStart(2, "0");

  secs.textContent =
    String(s).padStart(2, "0");

  totalSeconds--;

}, 1000);





// ==========================
// AOS
// ==========================

AOS.init({
  once: true,
  duration: 1000,
});


// ==========================
// REAL COUNTDOWN TIMER
// ==========================

const saleDays =
  document.querySelector(".saleDays");

const saleHours =
  document.querySelector(".saleHours");

const saleMins =
  document.querySelector(".saleMins");

const saleSecs =
  document.querySelector(".saleSecs");


// 5 DAYS TIMER

let saleTime =
  5 * 24 * 60 * 60;


setInterval(() => {

  let days =
    Math.floor(saleTime / 86400);

  let hours =
    Math.floor((saleTime % 86400) / 3600);

  let mins =
    Math.floor((saleTime % 3600) / 60);

  let secs =
    saleTime % 60;


  saleDays.textContent =
    String(days).padStart(2, "0");

  saleHours.textContent =
    String(hours).padStart(2, "0");

  saleMins.textContent =
    String(mins).padStart(2, "0");

  saleSecs.textContent =
    String(secs).padStart(2, "0");


  if (saleTime > 0) {
    saleTime--;
  }

}, 1000);



// ==========================
// AOS
// ==========================

AOS.init({
  once: true,
  duration: 1000,
});


// ==========================
// DEALS SWIPER
// ==========================

const dealsSwiper =
  new Swiper(".dealsSwiper", {

    loop: true,

    slidesPerView: 1,

    spaceBetween: 20,

    grabCursor: true,

    centeredSlides: false,

    speed: 1000,

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    navigation: {
      nextEl: ".dealsNext",
      prevEl: ".dealsPrev",
    },

    breakpoints: {

      0: {
        slidesPerView: 1,
      },

      768: {
        slidesPerView: 1,
      },

      1200: {
        slidesPerView: 1.8,
      },
    },
});

// ==========================
// MODAL
// ==========================

const dealModal =
  document.getElementById("dealModal");

const openDealModal =
  document.querySelectorAll(".openDealModal");

const closeDealModal =
  document.getElementById("closeDealModal");


openDealModal.forEach((btn) => {

  btn.addEventListener("click", () => {

    dealModal.classList.remove("hidden");

    dealModal.classList.add("flex");

    document.body.style.overflow =
      "hidden";
  });
});


closeDealModal.addEventListener("click", () => {

  dealModal.classList.add("hidden");

  dealModal.classList.remove("flex");

  document.body.style.overflow =
    "auto";
});


dealModal.addEventListener("click", (e) => {

  if (e.target === dealModal) {

    dealModal.classList.add("hidden");

    dealModal.classList.remove("flex");

    document.body.style.overflow =
      "auto";
  }
});


// ==========================
// TESTIMONIAL SWIPER
// ==========================

const testimonialSwiper =
  new Swiper(".testimonialSwiper", {

    loop: true,

    spaceBetween: 25,

    grabCursor: true,

    speed: 1000,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {

      // MOBILE

      0: {
        slidesPerView: 1,
      },

      // TABLET

      768: {
        slidesPerView: 1.3,
      },

      // DESKTOP

      1200: {
        slidesPerView: 2,
      },
    },
});



// ==========================
// INSTAGRAM SWIPER
// ==========================

const instagramSwiper =
  new Swiper(".instagramSwiper", {

    loop: true,

    grabCursor: true,

    spaceBetween: 20,

    speed: 1000,

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    breakpoints: {

      // MOBILE

      0: {
        slidesPerView: 1.2,
      },

      // SMALL TABLET

      576: {
        slidesPerView: 2,
      },

      // TABLET

      768: {
        slidesPerView: 2.5,
      },

      // LAPTOP

      1024: {
        slidesPerView: 3.2,
      },

      // DESKTOP

      1280: {
        slidesPerView: 4,
      },
    },
});



// ==========================
// FAQ ACCORDION
// ==========================

const faqItems =
  document.querySelectorAll(".faqItem");


faqItems.forEach((item) => {

  const question =
    item.querySelector(".faqQuestion");

  const answer =
    item.querySelector(".faqAnswer");

  const icon =
    item.querySelector(".faqIcon");

  const text =
    item.querySelector(".faqText");

  const para =
    item.querySelector(".faqPara");


  question.addEventListener("click", () => {

    const isActive =
      item.classList.contains("activeFaq");


    // CLOSE ALL FAQS

    faqItems.forEach((faq) => {

      faq.classList.remove(
        "activeFaq"
      );

      // ELEMENTS

      const faqAnswer =
        faq.querySelector(".faqAnswer");

      const faqIcon =
        faq.querySelector(".faqIcon");

      const faqText =
        faq.querySelector(".faqText");

      const faqPara =
        faq.querySelector(".faqPara");


      // ANSWER CLOSE

      faqAnswer.classList.remove(
        "grid-rows-[1fr]"
      );

      faqAnswer.classList.add(
        "grid-rows-[0fr]"
      );


      // ICON RESET

      faqIcon.classList.remove(
        "ri-subtract-line",
        "text-accent",
        "rotate-180"
      );

      faqIcon.classList.add(
        "ri-add-line",
        "text-zinc-700"
      );


      // TEXT COLOR RESET

      faqText.classList.remove(
        "text-white"
      );

      faqText.classList.add(
        "text-zinc-900"
      );


      faqPara.classList.remove(
        "text-white/80"
      );

      faqPara.classList.add(
        "text-zinc-600"
      );


      // CARD RESET

      faq.classList.remove(
        "bg-primary/90",
        "shadow-2xl",
        "ring-2",
        "ring-primary/20"
      );

      faq.classList.add(
        "bg-white/70",
        "border",
        "border-white/50"
      );
    });


    // OPEN CURRENT FAQ

    if (!isActive) {

      item.classList.add(
        "activeFaq"
      );


      // OPEN ANSWER

      answer.classList.remove(
        "grid-rows-[0fr]"
      );

      answer.classList.add(
        "grid-rows-[1fr]"
      );


      // ICON

      icon.classList.remove(
        "ri-add-line",
        "text-zinc-700"
      );

      icon.classList.add(
        "ri-subtract-line",
        "text-accent",
        "rotate-180"
      );


      // TEXT COLORS

      text.classList.remove(
        "text-zinc-900"
      );

      text.classList.add(
        "text-white"
      );


      para.classList.remove(
        "text-zinc-600"
      );

      para.classList.add(
        "text-white/80"
      );


      // ACTIVE CARD

      item.classList.remove(
        "bg-white/70",
        "border",
        "border-white/50"
      );

      item.classList.add(
        "bg-primary/90",
        "shadow-2xl",
        "ring-2",
        "ring-primary/20"
      );
    }
  });
});



// ==========================
// NEWSLETTER FORM
// ==========================

const newsletterForm =
  document.getElementById(
    "newsletterForm"
  );

const newsletterEmail =
  document.getElementById(
    "newsletterEmail"
  );

const newsletterBtn =
  document.getElementById(
    "newsletterBtn"
  );

const newsletterToast =
  document.getElementById(
    "newsletterToast"
  );

const newsletterError =
  document.getElementById(
    "newsletterError"
  );


// EMAIL REGEX

const emailPattern =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


// SUBMIT

newsletterForm.addEventListener(
  "submit",

  (e) => {

    e.preventDefault();

    const email =
      newsletterEmail.value.trim();


    // INVALID EMAIL

    if (
      !emailPattern.test(email)
    ) {

      newsletterError.classList.remove(
        "hidden"
      );

      newsletterEmail.focus();

      return;
    }


    // HIDE ERROR

    newsletterError.classList.add(
      "hidden"
    );


    // BUTTON LOADING

    newsletterBtn.innerHTML =
      `
      <span class="flex items-center gap-3">
        <i class="ri-loader-4-line animate-spin"></i>
        Subscribing...
      </span>
      `;

    newsletterBtn.disabled = true;


    // SUCCESS

    setTimeout(() => {

      // RESET BUTTON

      newsletterBtn.innerHTML =
        "Subscribe";

      newsletterBtn.disabled =
        false;


      // CLEAR INPUT

      newsletterEmail.value = "";


      // SHOW TOAST

      newsletterToast.classList.remove(
        "translate-x-[150%]"
      );


      // HIDE TOAST

      setTimeout(() => {

        newsletterToast.classList.add(
          "translate-x-[150%]"
        );

      }, 3000);

    }, 2000);
  }
);




