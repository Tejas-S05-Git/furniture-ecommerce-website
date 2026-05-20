

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
    href="../shop-details.html?id=${product.id}"

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




const params =
  new URLSearchParams(
    window.location.search
  );

const productId =
  params.get("id");


  const singleProduct =
  products.find(
    (product) =>
      product.id == productId
  );

console.log(singleProduct);



const productCategory =
  document.getElementById(
    "productCategory"
  );

const productTitle =
  document.getElementById(
    "productTitle"
  );

const productPrice =
  document.getElementById(
    "productPrice"
  );

const productOldPrice =
  document.getElementById(
    "productOldPrice"
  );

const productDescription =
  document.getElementById(
    "productDescription"
  );

const mainProductImage =
  document.getElementById(
    "mainProductImage"
  );

const productRating =
  document.getElementById(
    "productRating"
  );

const productSku =
  document.getElementById(
    "productSku"
  );

const productTags =
  document.getElementById(
    "productTags"
  );

const thumbnailContainer =
  document.getElementById(
    "thumbnailContainer"
  );


  productCategory.innerText =
  singleProduct.category;

productTitle.innerText =
  singleProduct.title;

productPrice.innerText =
  `$${singleProduct.price}.00`;

productOldPrice.innerText =
  `$${singleProduct.oldPrice}.00`;

productDescription.innerText =
  singleProduct.description;

mainProductImage.src =
  singleProduct.images[0];

productRating.innerText =
  `${singleProduct.rating} (${singleProduct.totalReviews} Review)`;

productSku.innerText =
  singleProduct.sku;

productTags.innerText =
  singleProduct.tags.join(", ");



 singleProduct.images.forEach(
  (image, index) => {

    thumbnailContainer.innerHTML += `

      <button
        data-image="${image}"

        class="thumbnailBtn

        group

        w-[110px]
        h-[120px]

        bg-[#F7F7F7]

        rounded-[22px]

        border-2

        ${
          index === 0
            ? "border-[#1F5B2B]"
            : "border-transparent"
        }

        hover:border-[#1F5B2B]

        overflow-hidden

        flex items-center
        justify-center

        duration-300"
      >

        <img
          src="${image}"

          class="w-[82px]
          h-[82px]

          object-contain

          group-hover:scale-110

          duration-300"
        />

      </button>

    `;

  }
); 


const thumbnailBtns =
  document.querySelectorAll(
    ".thumbnailBtn"
  );

thumbnailBtns.forEach((button) => {

  button.addEventListener(
    "click",

    () => {

      const image =
        button.dataset.image;

      mainProductImage.src =
        image;

      thumbnailBtns.forEach((btn) => {

        btn.classList.remove(
          "border-[#1F5B2B]"
        );

        btn.classList.add(
          "border-transparent"
        );

      });

      button.classList.remove(
        "border-transparent"
      );

      button.classList.add(
        "border-[#1F5B2B]"
      );

    }
  );

});


const prevBtn =
  document.getElementById(
    "prevBtn"
  );

const nextBtn =
  document.getElementById(
    "nextBtn"
  );

let currentImageIndex = 0;


nextBtn.addEventListener(
  "click",

  () => {

    currentImageIndex++;

    if (
      currentImageIndex >=
      singleProduct.images.length
    ) {

      currentImageIndex = 0;

    }

    mainProductImage.src =
      singleProduct.images[
        currentImageIndex
      ];

  }
);



prevBtn.addEventListener(
  "click",

  () => {

    currentImageIndex--;

    if (currentImageIndex < 0) {

      currentImageIndex =
        singleProduct.images.length - 1;

    }

    mainProductImage.src =
      singleProduct.images[
        currentImageIndex
      ];

  }
);


const minusBtn =
  document.getElementById(
    "minusBtn"
  );

const plusBtn =
  document.getElementById(
    "plusBtn"
  );

const quantityCount =
  document.getElementById(
    "quantityCount"
  );

  

let quantity = 1;

quantityCount.innerText =
  quantity;


  plusBtn.addEventListener(
  "click",

  () => {

    quantity++;

    quantityCount.innerText =
      quantity;

  }
);


minusBtn.addEventListener(
  "click",

  () => {

    if (quantity > 1) {

      quantity--;

      quantityCount.innerText =
        quantity;

    }

  }
);


const dynamicDescription =
  document.getElementById(
    "dynamicDescription"
  );

dynamicDescription.innerText =
  singleProduct.description;



  const featuresContainer =
  document.getElementById(
    "featuresContainer"
  );



  singleProduct.features.forEach(
  (feature) => {

    featuresContainer.innerHTML += `

      <div
        class="flex items-start
        gap-5"
      >

        <div
          class="relative
          mt-1"
        >

          <div
            class="w-8
            h-8

            rounded-full

            bg-[#1F5B2B]"
          ></div>

          <div
            class="absolute
            left-[-2px]
            top-1/2
            -translate-y-1/2

            w-5
            h-5

            rounded-full

            bg-[#F6B428]"
          ></div>

        </div>

        <p
          class="text-zinc-700

          text-lg
          lg:text-[22px]

          leading-[38px]"
        >
          ${feature}
        </p>

      </div>

    `;

  }
);


const additionalInfoContainer =
  document.getElementById(
    "additionalInfoContainer"
  );


  Object.entries(
  singleProduct.additionalInformation
).forEach(([key, value], index) => {

  additionalInfoContainer.innerHTML += `

    <tr
      class="${
        index % 2 === 0
          ? "bg-[#F7F7F7]"
          : ""
      }"
    >

      <td
        class="py-6
        px-6
        lg:px-8

        text-sm
        lg:text-[20px]

        text-zinc-700"
      >
        ${key}
      </td>

      <td
        class="py-6
        px-6
        lg:px-8

        text-sm
        lg:text-[20px]

        text-zinc-700"
      >
        ${value}
      </td>

    </tr>

  `;

});

const reviewRating =
  document.getElementById(
    "reviewRating"
  );

const totalReviews =
  document.getElementById(
    "totalReviews"
  );

  reviewRating.innerText =
  singleProduct.rating;

totalReviews.innerText =
  `(${singleProduct.totalReviews} Reviews)`;