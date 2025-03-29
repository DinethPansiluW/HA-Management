// Global variable to store the temporary file URL
let tempFileUrl = null;

// Function to save data to a temporary file
function saveToTempFile(event) {
    event.preventDefault();
    
    let data = [];
    for (let i = 1; i <= 11; i++) {
        let name = document.getElementById(`Name${i}`).value;
        let rent = document.getElementById(`Rent${i}`).value;
        let unit = document.getElementById(`Unit${i}`).value;
        let month = document.getElementById(`Month${i}`).value;
        data.push({ name, rent, unit, month });
    }

    // Clean up previous temp file if exists
    if (tempFileUrl) {
        URL.revokeObjectURL(tempFileUrl);
    }

    // Create new temporary file
    let blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    tempFileUrl = URL.createObjectURL(blob);
    
    // Store in localStorage for persistence across page reloads
    localStorage.setItem('tempFileData', JSON.stringify(data));
    
    console.log('Data saved to temporary storage');
    alert('Data saved to temporary storage!');
}

// Function to load data from temporary storage
function loadTempData() {
    // Check localStorage first
    const savedData = localStorage.getItem('tempFileData');
    
    if (savedData) {
        try {
            const data = JSON.parse(savedData);
            
            // Populate your form fields
            for (let i = 0; i < Math.min(data.length, 11); i++) {
                const item = data[i];
                if (document.getElementById(`Name${i+1}`)) {
                    document.getElementById(`Name${i+1}`).value = item.name || '';
                    document.getElementById(`Rent${i+1}`).value = item.rent || '';
                    document.getElementById(`Unit${i+1}`).value = item.unit || '';
                    document.getElementById(`Month${i+1}`).value = item.month || '';
                }
            }
            
            console.log('Temporary data loaded from storage');
            return true;
        } catch (e) {
            console.error('Error parsing saved data:', e);
            return false;
        }
    }
    return false;
}

// Function to clear temporary data
function clearTempData() {
    if (tempFileUrl) {
        URL.revokeObjectURL(tempFileUrl);
        tempFileUrl = null;
    }
    localStorage.removeItem('tempFileData');
    console.log('Temporary data cleared');
    alert('Temporary data cleared!');
}

// Auto-load when window loads
window.onload = function() {
    // Check if we should load temp data (you might want to add a confirmation)
    const shouldLoad = confirm('Load previously saved temporary data?');
    
    if (shouldLoad) {
        const success = loadTempData();
        if (success) {
            alert('Temporary data loaded successfully!');
        } else {
            alert('No temporary data found or error loading data.');
        }
    }
};

// Clean up when window closes (not always reliable)
window.onbeforeunload = function() {
    if (tempFileUrl) {
        URL.revokeObjectURL(tempFileUrl);
    }
};