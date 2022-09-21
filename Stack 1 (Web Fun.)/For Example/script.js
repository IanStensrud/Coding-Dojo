var para = document.getElementById('para');

function reveal() {
    
    var hidden = document.getElementById('hidden');
    hidden.style.display = 'flex';
}

function change() {
    para.innerText = "Well, aren't you are a curious one.";
}

function changeAgain() {
    para.innerText = "Unfortunately, something's in life have very little pay-off.";
    reveal();
}