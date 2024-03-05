document.addEventListener("DOMContentLoaded", function () {
  // Retrieve items from local storage
  const items = JSON.parse(localStorage.getItem("items")) || [];

  // Get the container to display items
  const container = document.getElementById("itemContainer");

  // Display each item in a card
  items.forEach(function (item) {
    const card = document.createElement("div");
    card.className = "card";

    // Populate the card with item details
    // card.innerHTML = `
    //   <h2>${item.name}</h2>
    //   <p>Price: $${item.price}</p>
    //   <img src="${item.image}" alt="${item.name}" style="max-width: 100%;">
    // `;


    card.innerHTML = `
<section class="articles">
  <article>
    <div class="article-wrapper">
      <figure>
        <img src="${item.image}" alt="${item.name}" />
      </figure>
      <div class="article-body">
        <h2>${item.name}</h2>
     
        <a href="#" class="read-more">
          Read more <span class="sr-only">about this is some title</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  </article>
</section>;`



    // Append the card to the container
    container.appendChild(card);
  });
});
