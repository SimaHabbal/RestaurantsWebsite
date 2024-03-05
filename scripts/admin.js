let users = JSON.parse(localStorage.getItem('users')) || [];
let restaurants = JSON.parse(localStorage.getItem('restaurants')) || [];

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

function addResto() { 
    let name = document.getElementById("rNameInput").value.trim(); 
    let imageUrl = document.getElementById("rImageInput").value.trim(); 
    let description = document.getElementById("rDesInput").value.trim(); 

    if (name === '' || imageUrl === '' || description === '') {
        alert('Please fill in all fields');
        return;
    }

    let newResto = { name, imageUrl, description };
    restaurants.push(newResto);
    localStorage.setItem('restaurants', JSON.stringify(restaurants));
    clearRestoInputs(); 
    displayRestaurants();
}

function deleteResto(index) { 
    restaurants.splice(index, 1);
    localStorage.setItem('restaurants', JSON.stringify(restaurants));
    displayRestaurants();
}
function editResto(index) {
    let newName = prompt("Enter the new name for the restaurant:");
    if (newName === null || newName.trim() === '') {
        return; // Cancelled or empty input, do nothing
    }

    let newImageUrl = prompt("Enter the new image URL:");
    if (newImageUrl === null) {
        return; // Cancelled, do nothing
    }

    let newDescription = prompt("Enter the new description:");
    if (newDescription === null) {
        return; // Cancelled, do nothing
    }

    // Update the restaurant at the specified index
    restaurants[index].name = newName.trim();
    restaurants[index].imageUrl = newImageUrl.trim();
    restaurants[index].description = newDescription.trim();

    // Update the local storage
    localStorage.setItem('restaurants', JSON.stringify(restaurants));

    // Update the displayed list of restaurants
    displayRestaurants();
}


function displayRestaurants() {
    let rightTable = document.getElementById("restoList");
    rightTable.innerHTML = '';

    restaurants.forEach((resto, index) => {
        let newRow = rightTable.insertRow();
        newRow.insertCell(0).innerHTML = index + 1; // Id starts from 1
        newRow.insertCell(1).innerHTML = resto.name; 
        newRow.insertCell(2).innerHTML = resto.imageUrl; 
        newRow.insertCell(3).innerHTML = resto.description; 
        let deleteCell = newRow.insertCell(4);
        deleteCell.innerHTML = "<span class='close' onclick='deleteResto(" + index + ")'>&times;</span>";    });
}

function clearRestoInputs() { 
    document.getElementById("rNameInput").value = ""; 
    document.getElementById("rImageInput").value = ""; 
    document.getElementById("rDesInput").value = "";
}

displayRestaurants();
