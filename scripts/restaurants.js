let dataOnCarousel = document.getElementById("carousel");
const restaurants = JSON.parse(localStorage.getItem("restaurants")) || [];

//i should be the restaurant at index

let imageContainer = document.getElementsByClassName("image-container");
document.addEventListener("DOMContentLoaded", function () {
  const cont = document.createElement("div");
  cont.innerHTML = `      <img src="${restaurants[i].image}">
      <div class="overlay-text">${e}</div>`;

  restaurants.sort((a, b) => a.name.localeCompare(b.name));

  const restaurantsContainer = document.getElementById("restaurantsContainer");
});

displayRestaurants(restaurants);

document
  .getElementById("plateForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const plateName = document.getElementById("plateName").value;
    const platePrice = document.getElementById("platePrice").value;
    const plateRating = document.getElementById("plateRating").value;
    const plateImage = document.getElementById("plateImage").value;
    const selectedRestaurantName = restaurantDropdown.value;

    const selectedRestaurant = restaurants.find(
      (restaurant) => restaurant.name === selectedRestaurantName
    );

    if (selectedRestaurant) {
      const newPlate = {
        name: plateName,
        price: platePrice,
        rating: plateRating,
        image: plateImage,
      };

      selectedRestaurant.plates = selectedRestaurant.plates || [];
      selectedRestaurant.plates.push(newPlate);

      localStorage.setItem("restaurants", JSON.stringify(restaurants));

      document.getElementById("plateName").value = "";
      document.getElementById("platePrice").value = "";
      document.getElementById("plateRating").value = "";
      document.getElementById("plateImage").value = "";

      restaurantsContainer.innerHTML = "";
      displayRestaurants(restaurants);
    }
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

    if (
      restaurant.hasOwnProperty("plates") &&
      Array.isArray(restaurant.plates)
    ) {
      restaurant.plates.sort((a, b) => a.name.localeCompare(b.name));

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

displayTextOnCarousel = () => {
  dataOnCarousel.textContent = `<!-- <h6 class="text-white">WELCOME TO ${restaurants.name}</h6>
                                <h1 class="display-1 my-3 fw-bold text-white">${restaurants.slogan}</h1>
                                <a href="#" class="btn btn-brand">Reservation</a> -->`;
};
