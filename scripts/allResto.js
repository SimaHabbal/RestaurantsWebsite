let restaurants = JSON.parse(localStorage.getItem("restaurants")) || [];

function displayRestaurantCards() {
  let container = document.getElementById("restaurantCardsContainer");
  let detailsContainer = document.getElementById("cards-details");

    restaurants.forEach( (restaurant)=> {
    let card = document.createElement("div");
    card.innerHTML=`    <div class="col-lg-3 col-sm-6">
                                <div class="menu-item bg-white shadow-on-hover">
                                    <img src="${item.image}" alt="">
                                    <div class="menu-item-content p-4">
                                        <h5 class="mt-1 mb-2"><a href="#">${item.name}</a></h5>
                                        <p class="small">${item.description}</p>
                                    </div>
                                </div>
                            </div>
    `
        ;


    container.appendChild(card);
  });
}

function displayRestaurantDetails(restaurant, detailsContainer) {
  detailsContainer.innerHTML = "";

  let detailsName = document.createElement("h2");
  detailsName.textContent = restaurant.name;

  let detailsDescription = document.createElement("p");
  detailsDescription.textContent = restaurant.description;

  let detailsImage = document.createElement("img");
  detailsImage.src = "./assets/" + restaurant.image;
  detailsImage.alt = restaurant.name;

  detailsContainer.appendChild(detailsName);
  detailsContainer.appendChild(detailsDescription);
  detailsContainer.appendChild(detailsImage);

}

window.onload = function () {
  displayRestaurantCards();
};
