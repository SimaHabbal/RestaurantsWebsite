let restaurants = JSON.parse(localStorage.getItem("restaurants")) || [];


function displayRestaurantCards() {
  let aboutRestaurant = document.getElementsByClassName("image-container");
  let detailsContainer = document.getElementById("cards-details");

  let about = imageContainer.createElement("div");

  about.innerHTML = `<!-- <h6 class="text-white">WELCOME TO ${restaurants.name}</h6>
                                <h1 class="display-1 my-3 fw-bold text-white">${restaurants.slogan}</h1>
                                <a href="#" class="btn btn-brand">Reservation</a> -->`;

  restaurants.plates.forEach((plate) => {
    let card = document.createElement("div");
    card.innerHTML = `    <div class="col-lg-3 col-sm-6">
                                <div class="menu-item bg-white shadow-on-hover">
                                    <img src="${plate.image}" alt="">
                                    <div class="menu-item-content p-4">
                                        <h5 class="mt-1 mb-2"><a href="#">${plate.name}</a></h5>
                                        <p class="small">${plate.description}</p>
                                    </div>
                                </div>
                            </div>
    `;

    detailsContainer.appendChild(card);
  });
}
