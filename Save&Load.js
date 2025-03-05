//Save and Load Settings
function saveToFile(event) {
    event.preventDefault();
    let data = [];
    for (let i = 1; i <= 11; i++) {
        let name = document.getElementById(`Name${i}`).value;
        let rent = document.getElementById(`Rent${i}`).value;
        let unit = document.getElementById(`Unit${i}`).value;
        let month = document.getElementById(`Month${i}`).value;
        data.push({ name, rent, unit, month });
    }

    // Get current date and time for the filename
    let now = new Date();
    let year = now.getFullYear().toString().slice(-2);  // Last two digits of the year
    let month = now.toLocaleString('default', { month: 'long' });  // Full month name
    let date = String(now.getDate()).padStart(2, '0');  // Day with leading zero if needed
    let time = now.toLocaleTimeString('en-GB', { hour12: false }).replace(/:/g, '-');  // Time in 24-hour format, replacing ':' with '-'

    // Create the filename using the format
    let filename = `${year}${month}${date}-${time}.json`;

    let blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    let a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function loadFromFile(event) {
    event.preventDefault();
    let input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.addEventListener('change', function () {
        let file = input.files[0];
        if (file) {
            let reader = new FileReader();
            reader.onload = function (e) {
                let data = JSON.parse(e.target.result);
                for (let i = 0; i < data.length; i++) {
                    document.getElementById(`Name${i + 1}`).value = data[i].name;
                    document.getElementById(`Rent${i + 1}`).value = data[i].rent;
                    document.getElementById(`Unit${i + 1}`).value = data[i].unit;
                    document.getElementById(`Month${i + 1}`).value = data[i].month;
                }
            };
            reader.readAsText(file);
        }
    });
    input.click();
}
