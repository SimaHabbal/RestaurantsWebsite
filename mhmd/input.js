document
  .getElementById("restaurantForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const restaurantName = document.getElementById("restaurantName").value;
    const restaurantRating = document.getElementById("restaurantRating").value;
    const restaurantImage = document.getElementById("restaurantImage").value;

    const newRestaurant = {
      name: restaurantName,
      rating: restaurantRating,
      image: restaurantImage,
      plates: [], 
    };

    const existingRestaurants =
      JSON.parse(localStorage.getItem("restaurants")) || [];

    existingRestaurants.push(newRestaurant);

    localStorage.setItem("restaurants", JSON.stringify(existingRestaurants));

    document.getElementById("restaurantName").value = "";
    document.getElementById("restaurantRating").value = "";
    document.getElementById("restaurantImage").value = "";

    document.getElementById("plateForm").style.display = "block";
    document.getElementById("addPlateBtn").style.display = "inline-block";
  });

document.getElementById("addPlateBtn").addEventListener("click", function () {
  document.getElementById("plateForm").style.display = "block";
});

document
  .getElementById("plateForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const plateName = document.getElementById("plateName").value;
    const platePrice = document.getElementById("platePrice").value;
    const plateRating = document.getElementById("plateRating").value;
    const plateImage = document.getElementById("plateImage").value;

    const lastAddedRestaurant = JSON.parse(
      localStorage.getItem("restaurants")
    ).pop();

    const newPlate = {
      name: plateName,
      price: platePrice,
      rating: plateRating,
      image: plateImage,
    };

    lastAddedRestaurant.plates.push(newPlate);

    localStorage.setItem(
      "restaurants",
      JSON.stringify(JSON.parse(localStorage.getItem("restaurants")))
    );

    document.getElementById("plateName").value = "";
    document.getElementById("platePrice").value = "";
    document.getElementById("plateRating").value = "";
    document.getElementById("plateImage").value = "";
  });
