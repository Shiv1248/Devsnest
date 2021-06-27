let seats = 36;
let status;

window.onload = () => {
    status = document.querySelector('.status');
    let grid = document.querySelector('.grid');
    for (let i = 0; i < 36; ++i) {
        let item = document.createElement("div");
        item.classList.add("items");
        item.addEventListener('click', clicked);
        grid.appendChild(item);
    }
}

function clicked() {
    if (this.classList.contains('clicked')) {
        ++seats;
        this.classList.remove('clicked');
    } else {
        --seats;
        this.classList.add('clicked');
    }
    this.tex
    status.textContent = `Seats Left: ${seats} | Seats Booked: ${36-seats}`;
}