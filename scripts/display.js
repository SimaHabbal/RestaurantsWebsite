document.addEventListener("DOMContentLoaded", function () {
  // Retrieve items from local storage
  //const items = JSON.parse(localStorage.getItem("items")) || [];
  const items = JSON.parse(localStorage.getItem("restaurants")) || [];

  // Get the container to display items
  const container = document.getElementById("itemContainer");

  // Display each item in a card
  items.forEach(function (item) {
    const card = document.createElement("div");
    card.className = "card";

    // Populate the card with item details
    card.innerHTML = `
      <h2>${item.name}</h2>
      <p>Price: $${item.price}</p>
      <img src="${item.imageUrl}" alt="${item.name}" style="max-width: 100%;">
      <p>${item.description}</p>
    `;

    // Append the card to the container
    container.appendChild(card);
  });
});
