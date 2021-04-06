const phone = document.getElementById('phonenumber');

var filter = [];

const keypad = 'Digit';
const numpad = 'Numpad';

for (var i = 0; i <= 9; i++) {
    filter.push(keypad + i);
    filter.push(numpad + i);
}


phone.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" || e.key === "Delete")
        return;
    if (e.target.value.length === 3) {
        phone.value = phone.value + "-";
    }
    if (e.target.value.length === 7) {
        phone.value = phone.value + "-";
    }
    if (e.target.value.length === 12) {
        e.preventDefault();
    }
    if (filter.indexOf(e.code) < 0) {
        e.preventDefault();
        return false;
    }

})

document.getElementById("form").addEventListener("submit", myFunction);

function myFunction() {
    alert("The form was submitted");
}