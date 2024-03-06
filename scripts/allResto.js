// Load data from localStorage if available
let restaurants = JSON.parse(localStorage.getItem('restaurants')) || [];

// Function to display restaurant cards
function displayRestaurantCards() {
    let container = document.getElementById("restaurantCardsContainer");

    restaurants.forEach(function(restaurant) {
        let card = document.createElement("div");
        card.classList.add("restaurant-card");

        let name = document.createElement("h2");
        name.textContent = restaurant.name;

        let description = document.createElement("p");
        description.textContent = restaurant.description;

        let image = document.createElement("img");
        image.src = "./assets/" + restaurant.image; // Construct the image path dynamically
        image.alt = restaurant.name; // Use the restaurant name as alt text

        card.appendChild(name);
        card.appendChild(description);
        card.appendChild(image);
        container.appendChild(card);
    });
}




// Call function to display restaurant cards when the page loads
window.onload = function() {
    displayRestaurantCards();
};
