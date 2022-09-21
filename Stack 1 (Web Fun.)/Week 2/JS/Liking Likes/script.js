// index     0  1   2
var likes = [9, 12, 9];
var spans = [

    document.querySelector("#nm"),
    document.querySelector("#nk"),
    document.querySelector("#jr")

];

function add(id) {
    likes[id]++;
    spans[id].innerHTML = likes[id];
}