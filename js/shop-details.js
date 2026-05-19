

//  tabs


 const tabBtns = document.querySelectorAll(".tabBtn");

  const tabContents = document.querySelectorAll(".tabContent");

  tabBtns.forEach((btn) => {

    btn.addEventListener("click", () => {

      const tab = btn.dataset.tab;

      tabBtns.forEach((button) => {

        button.classList.remove(
          "text-[#1F5B2B]"
        );

        button.classList.add(
          "text-zinc-400"
        );

        const underline =
          button.querySelector("span");

        if (underline) {
          underline.remove();
        }

      });

      btn.classList.remove(
        "text-zinc-400"
      );

      btn.classList.add(
        "text-[#1F5B2B]"
      );

      btn.innerHTML += `
        <span
          class="absolute
          left-0
          bottom-0

          w-full
          h-[4px]

          rounded-full

          bg-[#1F5B2B]"
        ></span>
      `;

      tabContents.forEach((content) => {
        content.classList.add("hidden");
      });

      document
        .getElementById(`${tab}Tab`)
        .classList.remove("hidden");

    });

  });




  /* =========================================
RELATED PRODUCTS RENDER
========================================= */

const relatedProductsContainer =
  document.getElementById(
    "relatedProductsContainer"
  );



products.forEach((product) => {

  relatedProductsContainer.innerHTML += `

  <!-- PRODUCT CARD -->

  <a
    href="../shop-details.html"

    class="group
    block min-w-[300px]
  sm:min-w-[340px]
  xl:min-w-[360px]

  flex-shrink-0"
  >

    <div>

      <!-- IMAGE BOX -->

      <div
        class="relative

        bg-[#F5F5F5]

        rounded-[28px]

        h-[280px]
        sm:h-[320px]

        overflow-hidden

        flex items-center
        justify-center

        p-6"
      >

        <!-- DISCOUNT BADGE -->

        <span
          class="absolute
          top-5
          left-5

          bg-[#1F5B2B]

          text-white

          text-[14px]
          sm:text-[15px]

          font-medium

          px-4
          py-[7px]

          rounded-full

          z-10"
        >
          ${product.discount}% off
        </span>



        <!-- ACTION BUTTONS -->

        <div
          class="absolute
          top-5
          right-5

          flex flex-col
          gap-3

          z-10"
        >

          <!-- WISHLIST -->

          <button
            class="w-11
            h-11

            rounded-full

            bg-white

            shadow-[0_4px_20px_rgba(0,0,0,0.08)]

            flex items-center
            justify-center

            text-[#666666]

            hover:bg-[#F6B428]
            hover:text-white

            duration-300"
          >

            <i
              class="ri-heart-line
              text-[18px]"
            ></i>

          </button>



          <!-- QUICK VIEW -->

          <button
            class="w-11
            h-11

            rounded-full

            bg-white

            shadow-[0_4px_20px_rgba(0,0,0,0.08)]

            flex items-center
            justify-center

            text-[#666666]

            hover:bg-[#F6B428]
            hover:text-white

            duration-300"
          >

            <i
              class="ri-expand-diagonal-line
              text-[18px]"
            ></i>

          </button>



          <!-- CART -->

          <button
            class="w-11
            h-11

            rounded-full

            bg-white

            shadow-[0_4px_20px_rgba(0,0,0,0.08)]

            flex items-center
            justify-center

            text-[#666666]

            hover:bg-[#F6B428]
            hover:text-white

            duration-300"
          >

            <i
              class="ri-shopping-bag-line
              text-[18px]"
            ></i>

          </button>

        </div>



        <!-- PRODUCT IMAGE -->

        <img
          src="${product.images[0]}"

          alt="${product.title}"

          class="w-full
          h-full

          max-w-[240px]
          max-h-[240px]

          object-contain

          group-hover:scale-105

          duration-500"
        >

      </div>





      <!-- CONTENT -->

      <div
        class="pt-5"
      >

        <!-- TOP -->

        <div
          class="flex items-center
          justify-between
          gap-4"
        >

          <!-- CATEGORY -->

          <span
            class="text-[16px]
            text-[#9B9B9B]

            font-medium"
          >
            ${product.category}
          </span>



          <!-- RATING -->

          <div
            class="flex items-center
            gap-[6px]"
          >

            <i
              class="ri-star-fill

              text-[#F6B428]
              text-[17px]"
            ></i>

            <span
              class="text-[18px]
              font-semibold
              text-[#333333]"
            >
              ${product.rating}
            </span>

          </div>

        </div>



        <!-- TITLE -->

        <h3
          class="mt-3

          text-[24px]
          sm:text-[26px]

          leading-[34px]

          font-bold

          text-[#222222]

          duration-300

          group-hover:text-[#1F5B2B]"
        >
          ${product.title}
        </h3>



        <!-- PRICE -->

        <div
          class="flex items-center
          gap-4

          mt-4"
        >

          <!-- NEW PRICE -->

          <span
            class="text-[32px]

            font-bold

            text-[#222222]"
          >
            $${product.price}.00
          </span>



          <!-- OLD PRICE -->

          <span
            class="text-[22px]

            text-[#BDBDBD]

            line-through"
          >
            $${product.oldPrice}.00
          </span>

        </div>

      </div>

    </div>

  </a>

  `;

});