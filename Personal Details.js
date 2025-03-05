// Save Button Comfirmation

let Save = false;

document.getElementById("Save").addEventListener("click", function() {
    Save = true;
    alert("Data saved successfully!");
});

window.addEventListener("beforeunload", function(event) {
    if (!Save) {
        event.preventDefault();
        event.returnValue = "You have not saved your changes. Are you sure you want to leave?";
    }
});

// Reset Button Comfirmation
document.getElementById('Reset').addEventListener('click', function(event) {
    let confirmReset = confirm("Are you sure you want to reset? This action cannot be undone.");
    if (!confirmReset) {
        event.preventDefault(); // Cancel the reset action
    }
});



// Save Datas
let Name = [];
let WA = [];

function SaveButton() {
    for (let i=1; i<=11; i++) {
        Name[i] = document.getElementById('Name'+i).value;
   
        WA[i] = document.getElementById('WA'+i).value;

        localStorage.setItem("Name"+i, Name[i]);

        localStorage.setItem("WA"+i, WA[i]);

}   
};

// Load Data 
function LoadData() {
    for (let i = 1; i <= 11; i++) {
        document.getElementById('Name' + i).value = localStorage.getItem('Name' + i) || '';
        document.getElementById('WA' + i).value = localStorage.getItem('WA' + i) || '';
    }
};

window.onload = LoadData;



