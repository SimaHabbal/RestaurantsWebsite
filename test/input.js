document
  .getElementById("itemForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get input values
    const itemName = document.getElementById("itemName").value;
    const itemPrice = document.getElementById("itemPrice").value;
    const itemImage = document.getElementById("itemImage").value;

    // Create item object
    const newItem = {
      name: itemName,
      price: itemPrice,
      image: itemImage,
    };

    // Retrieve existing items from local storage or create an empty array
    const existingItems = JSON.parse(localStorage.getItem("items")) || [];

    // Add the new item to the array
    existingItems.push(newItem);

    // Store the updated array back in local storage
    localStorage.setItem("items", JSON.stringify(existingItems));
    document.getElementById("itemName").value = "";
    document.getElementById("itemPrice").value = "";
    document.getElementById("itemImage").value = "";
  });
