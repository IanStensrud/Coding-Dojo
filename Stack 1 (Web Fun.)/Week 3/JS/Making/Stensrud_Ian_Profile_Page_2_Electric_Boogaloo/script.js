var connections = 418;
var request_count = 2;
var friends = document.querySelector('#friends');
var requests = document.querySelector('#requests');

function changeName(element) {
    var y = document.querySelector("#prof-name");
    y.contentEditable = 'true';
};

function add(element) {
    connections++;
    friends.innerText = connections;
    document.querySelector('.requester').remove();
    request_count--;
    requests.innerText = request_count;
    if (request_count < 1) {
        document.querySelector('#go-away').remove();
    }
};
function subtract(element) {
    connections--;
    friends.innerText = connections;
    request_count--;
    requests.innerText = request_count;
    if (request_count < 1) {
        document.querySelector('#go-away').remove();
    }
};