var pets_list = [
    3,
    5,
    8,
    0
]

function pet(element) {
    var pets = document.getElementById(element);
    pets_list[element]++;
    pets.innerText = pets_list[element];
}

function disappear(element) {
    document.getElementById(element).remove();
    alert('Thank you for the donation! Credit card information saved for future use.');
}

function animalAlert(element) {
    var easter = document.getElementById('skizzy');
    var animal = document.getElementById(element.id).value;
    alert('Now looking for ' + animal);

    if (animal == 'Alien Homonids') {
        easter.style.display = 'flex';
    } else {
        easter.style.display = 'none';
    }
}