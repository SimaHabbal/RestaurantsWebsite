document.addEventListener("DOMContentLoaded", function () {
  // Retrieve restaurants from local storage
  const restaurants = JSON.parse(localStorage.getItem("restaurants")) || [];

  // Sort restaurants by name
  restaurants.sort((a, b) => a.name.localeCompare(b.name));

  const restaurantsContainer = document.getElementById("restaurantsContainer");

  // Populate the restaurant dropdown in the plate input form
  //const restaurantDropdown = document.getElementById("restaurantDropdown");
  restaurants.forEach((restaurant) => {
    const option = document.createElement("option");
    option.value = restaurant.name;
    option.textContent = restaurant.name;
  });

  // Display each restaurant and its plates
  displayRestaurants(restaurants);

  // Handle plate form submission
  document
    .getElementById("plateForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const plateName = document.getElementById("plateName").value;
      const platePrice = document.getElementById("platePrice").value;
      const plateRating = document.getElementById("plateRating").value;
      const plateImage = document.getElementById("plateImage").value;
      const selectedRestaurantName = restaurantDropdown.value;

      // Find the selected restaurant by name
      const selectedRestaurant = restaurants.find(
        (restaurant) => restaurant.name === selectedRestaurantName
      );

      if (selectedRestaurant) {
        // Create plate object
        const newPlate = {
          name: plateName,
          price: platePrice,
          rating: plateRating,
          image: plateImage,
        };

        // Add the new plate to the plates array of the selected restaurant
        selectedRestaurant.plates = selectedRestaurant.plates || [];
        selectedRestaurant.plates.push(newPlate);

        // Update the local storage with the modified restaurants array
        localStorage.setItem("restaurants", JSON.stringify(restaurants));

        // Clear plate form
        document.getElementById("plateName").value = "";
        document.getElementById("platePrice").value = "";
        document.getElementById("plateRating").value = "";
        document.getElementById("plateImage").value = "";

        // Redisplay the restaurants with the updated plate
        restaurantsContainer.innerHTML = "";
        displayRestaurants(restaurants);
      }
    });
});

function displayRestaurants(restaurants) {
  const restaurantsContainer = document.getElementById("restaurantsContainer");

  restaurants.forEach((restaurant) => {
    const restaurantDiv = document.createElement("div");
    restaurantDiv.classList.add("restaurant");

    const restaurantHeading = document.createElement("h2");
    restaurantHeading.textContent = `${restaurant.name} - Rating: ${restaurant.rating}`;
    restaurantDiv.appendChild(restaurantHeading);

    const restaurantImage = document.createElement("img");
    restaurantImage.src = restaurant.image;
    restaurantImage.alt = `${restaurant.name} Image`;
    restaurantDiv.appendChild(restaurantImage);

    // Sort plates if the 'plates' property exists
    if (
      restaurant.hasOwnProperty("plates") &&
      Array.isArray(restaurant.plates)
    ) {
      restaurant.plates.sort((a, b) => a.name.localeCompare(b.name));

      // Display each plate for the restaurant
      restaurant.plates.forEach((plate) => {
        const plateDiv = document.createElement("div");
        plateDiv.classList.add("plate");

        const plateHeading = document.createElement("h3");
        plateHeading.textContent = `${plate.name} - Price: ${plate.price} - Rating: ${plate.rating}`;
        plateDiv.appendChild(plateHeading);

        const plateImage = document.createElement("img");
        plateImage.src = plate.image;
        plateImage.alt = `${plate.name} Image`;
        plateDiv.appendChild(plateImage);

        restaurantDiv.appendChild(plateDiv);
      });
    }

    restaurantsContainer.appendChild(restaurantDiv);
  });
}
