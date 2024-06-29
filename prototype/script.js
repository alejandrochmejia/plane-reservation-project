document.addEventListener('DOMContentLoaded', () => {
    const seats = [
        '30A', '30B', '30C', '30D', '30E', '30F', '30G', '30H', '30J',
        '31A', '31B', '31C', '31D', '31E', '31F', '31G', '31H', '31J',
        // Add all seat identifiers based on the seat map
    ];

    const seatMap = document.getElementById('seatMap');
    const seatSelect = document.getElementById('seat');
    const passengerList = document.getElementById('passengerList');
    let passengers = [];

    seats.forEach(seat => {
        const seatElement = document.createElement('div');
        seatElement.classList.add('seat', 'available');
        seatElement.textContent = seat;
        seatElement.id = seat;
        seatElement.addEventListener('click', () => selectSeat(seat));
        seatMap.appendChild(seatElement);

        const option = document.createElement('option');
        option.value = seat;
        option.textContent = seat;
        seatSelect.appendChild(option);
    });

    document.getElementById('reservationForm').addEventListener('submit', event => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const seat = document.getElementById('seat').value;
        const handLuggage = document.getElementById('handLuggage').checked;
        const checkedLuggage = document.getElementById('checkedLuggage').checked;

        passengers.push({ name, email, seat, handLuggage, checkedLuggage });

        document.getElementById(seat).classList.remove('available');
        document.getElementById(seat).classList.add('unavailable');
        seatSelect.querySelector(`option[value="${seat}"]`).remove();

        event.target.reset();
    });

    document.getElementById('viewPassengersButton').addEventListener('click', () => {
        passengerList.innerHTML = '<h3>Pasajeros Registrados</h3>';
        passengers.forEach(passenger => {
            const passengerElement = document.createElement('div');
            passengerElement.textContent = `Nombre: ${passenger.name}, Asiento: ${passenger.seat}`;
            passengerList.appendChild(passengerElement);
        });
    });

    function selectSeat(seat) {
        const seatElement = document.getElementById(seat);
        if (seatElement.classList.contains('available')) {
            document.getElementById('seat').value = seat;
        }
    }
});
