// ==========================
// ELEMENTS
// ==========================

const showingResults =
  document.getElementById(
    "showingResults"
  );

const activeFilters =
  document.getElementById(
    "activeFilters"
  );

const categoryFilters =
  document.querySelectorAll(
    ".categoryFilter"
  );

const colorFilters =
  document.querySelectorAll(
    ".colorFilter"
  );

const materialFilters =
  document.querySelectorAll(
    ".materialFilter"
  );

const stockFilters =
  document.querySelectorAll(
    ".stockFilter"
  );

const priceRange =
  document.getElementById(
    "priceRange"
  );

const sortSelect =
  document.getElementById(
    "sortSelect"
  );

const pagination =
  document.getElementById(
    "pagination"
  );


  let currentPage = 1;

const itemsPerPage = 12;

// ==========================
// RENDER PRODUCTS
// ==========================

function renderProducts(
  productsArray
) {

  // CLEAR OLD PRODUCTS

  productsContainer.innerHTML = "";



  // SHOWING RESULTS

  showingResults.textContent =

    `Showing ${productsArray.length} Results`;



  // NO PRODUCTS

  if (
    productsArray.length === 0
  ) {

    productsContainer.innerHTML = `

      <div
        class="col-span-full
        text-center py-20"
      >

        <h2
          class="text-3xl
          font-semibold
          text-zinc-700"
        >
          No Products Found
        </h2>

      </div>

    `;

    return;
  }

  
  // ==========================
// PAGINATION
// ==========================

const startIndex =

  (currentPage - 1)

  * itemsPerPage;



const endIndex =

  startIndex + itemsPerPage;



const paginatedProducts =

  productsArray.slice(
    startIndex,
    endIndex
  );

  // RENDER CARDS

  paginatedProducts.forEach(
    (product) => {

      productsContainer.innerHTML += `

        <!-- PRODUCT CARD -->

        <div
          class="group"

          data-aos="fade-up"
        >

          <!-- IMAGE BOX -->

          <div
            class="relative
            bg-[#F3F3F3]
            rounded-[20px]

            h-[320px]

            overflow-hidden

            flex items-center
            justify-center"
          >

            <!-- BADGE -->

            <span
              class="absolute
              top-4 left-4

              bg-[#1D5A2B]

              text-white

              text-[15px]

              font-medium

              px-4 py-[7px]

              rounded-full

              z-10"
            >
              ${product.discount}% off
            </span>



            <!-- ACTIONS -->

            <div
              class="absolute
              top-4 right-4

              flex flex-col
              gap-3

              z-10"
            >

              <button
                class="w-10 h-10
                rounded-full

                bg-white

                shadow-sm

                flex items-center
                justify-center

                text-[#666666]

                hover:bg-[#F4B740]

                duration-300"
              >

                <i class="ri-heart-line"></i>

              </button>



              <button
                class="w-10 h-10
                rounded-full

                bg-white

                shadow-sm

                flex items-center
                justify-center

                text-[#666666]

                hover:bg-[#F4B740]

                duration-300"
              >

                <i class="ri-expand-diagonal-line"></i>

              </button>



              <button
                class="w-10 h-10
                rounded-full

                bg-white

                shadow-sm

                flex items-center
                justify-center

                text-[#666666]

                hover:bg-[#F4B740]

                duration-300"
              >

                <i class="ri-shopping-bag-line"></i>

              </button>

            </div>



            <!-- IMAGE -->

            <img
              src="${product.images[0]}"

              alt="${product.title}"

              class="w-[220px]
              h-[220px]

              object-contain

              group-hover:scale-105

              duration-500"
            >

          </div>





          <!-- CONTENT -->

          <div class="pt-5">

            <!-- TOP -->

            <div
              class="flex items-center
              justify-between"
            >

              <span
                class="text-[16px]
                text-[#9A9A9A]"
              >
                ${product.category}
              </span>



              <div
                class="flex items-center
                gap-[6px]"
              >

                <i
                  class="ri-star-fill
                  text-[#F4B740]
                  text-sm"
                ></i>

                <span
                  class="text-[17px]
                  font-medium
                  text-[#444444]"
                >
                  ${product.rating}
                </span>

              </div>

            </div>



            <!-- TITLE -->

            <h3
              class="mt-[10px]
              text-[24px]
              leading-[30px]
              font-semibold
              text-[#222222]"
            >
              ${product.title}
            </h3>



            <!-- PRICE -->

            <div
              class="flex items-center
              gap-3 mt-3"
            >

              <span
                class="text-[30px]
                font-bold
                text-[#222222]"
              >
                $${product.price}.00
              </span>



              <span
                class="text-[18px]
                text-[#B8B8B8]
                line-through"
              >
                $${product.oldPrice}.00
              </span>

            </div>

          </div>

        </div>

      `;
    }
  );

  // ==========================
// RENDER PAGINATION
// ==========================

renderPagination(
  productsArray
);



}

function renderPagination(
  productsArray
) {

  pagination.innerHTML = "";



  const totalPages = Math.ceil(

    productsArray.length /

    itemsPerPage
  );



  // PREV BUTTON

  pagination.innerHTML += `

    <button

      class="paginationBtn

      w-11 h-11

      rounded-full

      border border-[#E5E5E5]

      bg-white"

      data-page="prev"
    >

      <i class="ri-arrow-left-s-line"></i>

    </button>

  `;



  // PAGE BUTTONS

  for (

    let i = 1;

    i <= totalPages;

    i++

  ) {

    pagination.innerHTML += `

      <button

        class="paginationBtn

        w-11 h-11

        rounded-full

        border border-[#E5E5E5]

        ${
          currentPage === i

          ? "bg-[#F4B740]"

          : "bg-white"
        }

        text-[#222222]

        font-semibold"

        data-page="${i}"
      >

        ${i}

      </button>

    `;
  }



  // NEXT BUTTON

  pagination.innerHTML += `

    <button

      class="paginationBtn

      w-11 h-11

      rounded-full

      border border-[#E5E5E5]

      bg-white"

      data-page="next"
    >

      <i class="ri-arrow-right-s-line"></i>

    </button>

  `;



  // EVENTS

  const paginationButtons =

    document.querySelectorAll(
      ".paginationBtn"
    );



  paginationButtons.forEach(
    (button) => {

      button.addEventListener(
        "click",

        () => {

          const page =

            button.dataset.page;



          // PREV

          if (
            page === "prev"
          ) {

            if (
              currentPage > 1
            ) {

              currentPage--;

              applyFilters();
            }
          }



          // NEXT

          else if (
            page === "next"
          ) {

            if (
              currentPage < totalPages
            ) {

              currentPage++;

              applyFilters();
            }
          }



          // NUMBER

          else {

            currentPage =
              Number(page);

            applyFilters();
          }



          // SCROLL TOP

          window.scrollTo({

            top: 0,

            behavior: "smooth",
          });
        }
      );
    }
  );
}



// ==========================
// ACTIVE FILTERS
// ==========================

function renderActiveFilters() {

  activeFilters.innerHTML = "";



  // CATEGORY TAGS

  [...categoryFilters]

  .filter((item) => item.checked)

  .forEach((item) => {

    activeFilters.innerHTML += `

      <button
        class="h-[38px]
        px-4 rounded-full

        bg-[#F4B740]

        text-[#222222]

        text-[14px]

        font-medium"
      >

        ${item.value}

      </button>

    `;
  });



  // COLOR TAGS

  [...colorFilters]

  .filter((item) => item.checked)

  .forEach((item) => {

    activeFilters.innerHTML += `

      <button
        class="h-[38px]
        px-4 rounded-full

        bg-[#F4B740]

        text-[#222222]

        text-[14px]

        font-medium"
      >

        ${item.value}

      </button>

    `;
  });
}



// ==========================
// APPLY FILTERS
// ==========================

function applyFilters() {

  let updatedProducts =
    [...products];



  // ==========================
  // CATEGORY
  // ==========================

  const selectedCategories =

    [...categoryFilters]

    .filter((item) => item.checked)

    .map((item) => item.value);



  if (
    selectedCategories.length > 0
  ) {

    updatedProducts =
      updatedProducts.filter(
        (product) =>

          selectedCategories.includes(
            product.category
          )
      );
  }



  // ==========================
  // COLOR
  // ==========================

  const selectedColors =

    [...colorFilters]

    .filter((item) => item.checked)

    .map((item) => item.value);



  if (
    selectedColors.length > 0
  ) {

    updatedProducts =
      updatedProducts.filter(
        (product) =>

          selectedColors.includes(
            product.color
          )
      );
  }



  // ==========================
  // MATERIAL
  // ==========================

  const selectedMaterials =

    [...materialFilters]

    .filter((item) => item.checked)

    .map((item) => item.value);



  if (
    selectedMaterials.length > 0
  ) {

    updatedProducts =
      updatedProducts.filter(
        (product) =>

          selectedMaterials.includes(
            product.material
          )
      );
  }



// ==========================
// STOCK
// ==========================

const selectedStock =

  [...stockFilters]

  .filter((item) => item.checked)

  .map((item) => item.value);



// IN STOCK

if (
  selectedStock.includes(
    "In Stock"
  )
) {

  updatedProducts =
    updatedProducts.filter(
      (product) =>
        product.stock === true
    );
}



// OUT OF STOCK

if (
  selectedStock.includes(
    "Out Of Stock"
  )
) {

  updatedProducts =
    updatedProducts.filter(
      (product) =>
        product.stock === false
    );
}



  // ==========================
  // PRICE
  // ==========================

  updatedProducts =
    updatedProducts.filter(
      (product) =>

        product.price <=
        Number(priceRange.value)
    );



  // ==========================
  // SORTING
  // ==========================

  if (
    sortSelect.value ===
    "lowToHigh"
  ) {

    updatedProducts.sort(
      (a, b) =>
        a.price - b.price
    );
  }



  if (
    sortSelect.value ===
    "highToLow"
  ) {

    updatedProducts.sort(
      (a, b) =>
        b.price - a.price
    );
  }



  // FINAL RENDER

  renderProducts(
    updatedProducts
  );



  renderActiveFilters();
}



// ==========================
// EVENTS
// ==========================

categoryFilters.forEach(
  (item) => {

    item.addEventListener(
      "change",
      applyFilters
    );
  }
);

colorFilters.forEach(
  (item) => {

    item.addEventListener(
      "change",
      applyFilters
    );
  }
);

materialFilters.forEach(
  (item) => {

    item.addEventListener(
      "change",
      applyFilters
    );
  }
);

stockFilters.forEach(
  (item) => {

    item.addEventListener(
      "change",
      applyFilters
    );
  }
);

priceRange.addEventListener(
  "input",
  applyFilters
);

sortSelect.addEventListener(
  "change",
  applyFilters
);



// ==========================
// INITIAL RENDER
// ==========================

renderProducts(products);



