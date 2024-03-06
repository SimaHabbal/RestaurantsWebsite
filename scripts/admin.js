let users = JSON.parse(localStorage.getItem('users')) || [];
function loadDataFromLocalStorage() {
  restaurants = JSON.parse(localStorage.getItem('restaurants')) || [];
}
let plates = [];
function addUser() { 
    let name = document.getElementById("uNameInput").value.trim(); 
    let email = document.getElementById("uEmailInput").value.trim(); 
    let pass = document.getElementById("uPasswordInput").value.trim(); 

    if (name === '' || email === '' || pass === '') {
        alert('Please fill in all fields');
        return;
    }
    let newUser = { name, email, pass };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    clearInputs(); 
    displayUsers();
}

function deleteUser(index) { 
    users.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(users));
    displayUsers();
}

function displayUsers() {
    let userList = document.getElementById("userList");
    userList.innerHTML = '';

    users.forEach((user, index) => {
        let newRow = userList.insertRow();
        newRow.insertCell(0).innerHTML = user.name; 
        newRow.insertCell(1).innerHTML = user.email; 
        newRow.insertCell(2).innerHTML = user.pass; 
        let deleteCell = newRow.insertCell(3);
        deleteCell.innerHTML = "<span class='close' onclick='deleteUser(" + index + ")'>&times;</span>";    });
}

function clearInputs() { 
    document.getElementById("uNameInput").value = ""; 
    document.getElementById("uEmailInput").value = ""; 
    document.getElementById("uPasswordInput").value = "";
}

displayUsers();


window.onload = function() {
  loadDataFromLocalStorage();
  displayRestaurantDetails();
};
function addPlate() {
    let platesDiv = document.getElementById("plates");
    let plateDiv = document.createElement("div");
    plateDiv.classList.add("plate");
    plateDiv.innerHTML = `
        <label for="plateName">Plate Name:</label>
        <input type="text" name="plateName" required>
        <label for="platePrice">Price:</label>
        <input type="number" name="platePrice" min="0" required>
    `;
    platesDiv.appendChild(plateDiv);
}

function addRestaurant() {
    let restaurantName = document.getElementById("restaurantName").value;
    let restaurantDescription = document.getElementById("restaurantDescription").value;
    let restaurantImage = document.getElementById("restaurantImage").value;
    plates = [];

    let plateDivs = document.querySelectorAll(".plate");
    plateDivs.forEach((plateDiv,index) => {
        let plateName = plateDiv.querySelector('input[name="plateName"]').value;
        let platePrice = plateDiv.querySelector('input[name="platePrice"]').value;

        let plate = {
            name: plateName,
            price: platePrice
        };
        plates.push(plate);
    });

    if (restaurantName === "" || restaurantDescription === "" || restaurantImage === "" || plates.length === 0) {
        alert("Please fill in all fields.");
        return;
    }

    let restaurant = {
        name: restaurantName,
        description: restaurantDescription,
        image: restaurantImage,
        plates: plates
    };

    restaurants.push(restaurant); 
    displayRestaurantDetails();
    saveDataToLocalStorage();

    console.log("New restaurant added: ", restaurant);

    document.getElementById("addRestaurantForm").reset();
}


function deleteRestaurant(index) {
    restaurants.splice(index, 1);
    
    saveDataToLocalStorage();

    displayRestaurantDetails();
}

function displayRestaurantDetails() {
    let tableBody = document.getElementById("restaurantTableBody");
    tableBody.innerHTML = "";

    restaurants.forEach((restaurant, index) => {
        let row = tableBody.insertRow();

        let nameCell = row.insertCell(0);
        nameCell.textContent = restaurant.name;

        let descriptionCell = row.insertCell(1);
        descriptionCell.textContent = restaurant.description;

        let imageCell = row.insertCell(2);
        imageCell.textContent = restaurant.image;

        let platesCell = row.insertCell(3);
        
        if (Array.isArray(restaurant.plates) && restaurant.plates.length > 0) {
            let platesList = document.createElement("ul");

            restaurant.plates.forEach((plate, index) => {
                let plateItem = document.createElement("li");
                plateItem.textContent = `${plate.name} - $${plate.price}`;
                platesList.appendChild(plateItem);
            });

            platesCell.appendChild(platesList);
        } else {
            platesCell.textContent = "No plates available";
        }

        let deleteCell = row.insertCell(4);
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            deleteRestaurant(index);
        });
        deleteCell.appendChild(deleteButton);
    });
}


document.addEventListener('DOMContentLoaded', function() {
  let restaurantCards = document.querySelectorAll('.restaurant-card');

  restaurantCards.forEach(function(card) {
      card.addEventListener('click', function(event) {
          let restaurantName = card.querySelector('h2').textContent;
          let restaurantDescription = card.querySelector('p').textContent;

          let menuURL = `menu.html?name=${encodeURIComponent(restaurantName)}&description=${encodeURIComponent(restaurantDescription)}`;
 
          window.location.href = menuURL;
      });
  });
});

function saveDataToLocalStorage() {
    localStorage.setItem('restaurants', JSON.stringify(restaurants));
}
