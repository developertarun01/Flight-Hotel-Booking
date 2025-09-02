// Deals
document.getElementById("deals").addEventListener("click", function (e) {
    e.preventDefault();

    const allDeals = document.getElementById("all-deals");
    const currentDisplay = window.getComputedStyle(allDeals).display;



    if (currentDisplay === "none") {
        allDeals.style.display = "grid";  // show
    } else {
        allDeals.style.display = "none";  // hide
    }
});



document.addEventListener('DOMContentLoaded', function () {
    flatpickr('#daterange', {
        mode: 'range',
        dateFormat: 'd-m-Y',
        // optional:
        // defaultDate: ['09-02-2025', '14-02-2025'],
        // allowInput: true,
    });
});

// document.getElementById("dates").valueAsDate = new Date();

// form-options active 
const options = document.querySelectorAll(".form-options li");

options.forEach(option => {
    option.addEventListener("click", () => {
        // remove active from all
        options.forEach(o => o.classList.remove("active"));
        // add active to clicked one
        option.classList.add("active");
    });
});

// adult child 
// Toggle passenger selector
function togglePassengerSelector() {
    const content = document.getElementById('passengerContent');
    content.classList.toggle('active');
}

// Set up counters
function setupCounter(decBtnId, incBtnId, countId, min = 0, max = 9) {
    const decBtn = document.getElementById(decBtnId);
    const incBtn = document.getElementById(incBtnId);
    const countElem = document.getElementById(countId);

    let count = parseInt(countElem.textContent);

    function updateCount(value) {
        count = value;
        countElem.textContent = count;
        decBtn.disabled = count <= min;
        incBtn.disabled = count >= max;
        updatePassengerHeader();
    }

    decBtn.addEventListener('click', () => updateCount(count - 1));
    incBtn.addEventListener('click', () => updateCount(count + 1));
}

// Update passenger header text
function updatePassengerHeader() {
    const adultCount = document.getElementById('adultCount').textContent;
    const classSelect = document.querySelector('select');
    const selectedClass = classSelect.options[classSelect.selectedIndex].text;

    const passengerHeader = document.querySelector('.passenger-header div:first-child');
    passengerHeader.textContent = `${adultCount} Adult, ${selectedClass}`;
}

// Initialize counters
setupCounter('adultDec', 'adultInc', 'adultCount', 1);
setupCounter('childDec', 'childInc', 'childCount');
setupCounter('infantLapDec', 'infantLapInc', 'infantLapCount');
setupCounter('infantSeatDec', 'infantSeatInc', 'infantSeatCount');

// Update header when class changes
document.querySelector('select').addEventListener('change', updatePassengerHeader);

