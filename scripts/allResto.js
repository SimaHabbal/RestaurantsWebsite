document.addEventListener('DOMContentLoaded', function() {
    let restaurants = JSON.parse(localStorage.getItem('restaurants')) || [];
    
    displayRestaurantCards(restaurants);
    
    document.getElementById("searchInput").addEventListener("input", function() {
        let searchTerm = this.value.trim();
        filterRestaurants(searchTerm);
    });

    function filterRestaurants(searchTerm) {
        let filteredRestaurants = restaurants.filter(function(restaurant) {
            return restaurant.name.toLowerCase().includes(searchTerm.toLowerCase());
        });

        displayRestaurantCards(filteredRestaurants);
    }

    function displayRestaurantCards(restaurants) {
        let container = document.getElementById("restaurantCardsContainer");
        container.innerHTML = ""; 

        restaurants.forEach(function(restaurant) {
            let card = document.createElement("div");
            card.classList.add("restaurant-card");

            let name = document.createElement("h2");
            name.textContent = restaurant.name;

            let description = document.createElement("p");
            description.textContent = restaurant.description;

            let image = document.createElement("img");
            image.src = "./assets/" + restaurant.image;
            image.alt = restaurant.name;

            card.appendChild(name);
            card.appendChild(description);
            card.appendChild(image);
            container.appendChild(card);
        });
    }
});


document.getElementById("searchInput").addEventListener("input", function() {
    let searchTerm = this.value.trim();
    displayRestaurants(searchTerm);
});

window.onload = function() {
    displayRestaurantCards();
};
