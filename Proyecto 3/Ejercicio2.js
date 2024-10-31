const select = document.getElementById('curso');
const currentYear = new Date().getFullYear();

    for (let year = 2000; year <= currentYear; year++) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        select.appendChild(option);
    }