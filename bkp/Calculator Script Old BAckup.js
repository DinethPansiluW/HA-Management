// Units Prices Assign Variables
let PE1 = 130; let PW1 = 80;
let PE2 = 100; 
let PE3 = 80; 
let PE4 = 60; 
let PE5 = 50;

document.getElementById('PE1').innerHTML = PE1;
document.getElementById('PE2').innerHTML = PE2;
document.getElementById('PE3').innerHTML = PE3;
document.getElementById('PE4').innerHTML = PE4;
document.getElementById('PE5').innerHTML = PE5;

document.getElementById('PW1').innerHTML = PW1;
document.getElementById('PW2').innerHTML = PW1;
document.getElementById('PW3').innerHTML = PW1;
document.getElementById('PW4').innerHTML = PW1;
document.getElementById('PW5').innerHTML = PW1;

// Calculate Units
let Q1, TE1, TW1;
let Q2, TE2, TW2;
let Q3, TE3, TW3;
let Q4, TE4, TW4;
let Q5, TE5, TW5;
let Units;
let TotalE, TotalW, Total;
let Rent;
let Ser_Chg;
let Fix_Chg;

function RentValue() {
    let RentSelect = document.getElementById('RentSelect');

    if (RentSelect.value === "23000" || RentSelect.value === "17500") {
        Rent = parseInt(RentSelect.value);
        document.getElementById('Rent').style.display = 'none';
        document.getElementById('RentSelect').style.width= "100%";
    } 
        else {
            document.getElementById('Rent').style.display = 'block';
            document.getElementById('RentSelect').style.width= "50%";
            document.getElementById('Rent').style.width= "150%";
            Rent = parseInt(document.getElementById('Rent').value);
        }
    }

function Cal() {
    RentValue() ;

    Units = parseInt(document.getElementById('CurrentRead').value) - parseInt(document.getElementById('LastRead').value);
    document.getElementById('Units').value = Units;

    if (Units > 40) {
        Q1 = 10; Q2 = 10; Q3 = 10; Q4 = 10; Q5 = Units - 40;
    } else if (Units > 30) {
        Q1 = 10; Q2 = 10; Q3 = 10; Q4 = Units - 30; Q5 = 0;
    } else if (Units > 20) {
        Q1 = 10; Q2 = 10; Q3 = Units - 20; Q4 = 0; Q5 = 0;
    } else if (Units > 10) {
        Q1 = 10; Q2 = Units - 10; Q3 = 0; Q4 = 0; Q5 = 0;
    } else if (Units >= 0) {
        Q1 = Units; Q2 = 0; Q3 = 0; Q4 = 0; Q5 = 0;
    } else {
        Total = Rent + Ser_Chg + Fix_Chg + Other_Chg + Deduction;

        document.querySelectorAll('.Q1').forEach(el => el.innerHTML = " ");
        document.querySelectorAll('.Q2').forEach(el => el.innerHTML = " ");
        document.querySelectorAll('.Q3').forEach(el => el.innerHTML = " ");
        document.querySelectorAll('.Q4').forEach(el => el.innerHTML = " ");
        document.querySelectorAll('.Q5').forEach(el => el.innerHTML = " ");

        document.getElementById('TE1').innerHTML = " ";
        document.getElementById('TE2').innerHTML = " ";
        document.getElementById('TE3').innerHTML = " ";
        document.getElementById('TE4').innerHTML = " ";
        document.getElementById('TE5').innerHTML = " ";

        document.getElementById('TW1').innerHTML = " ";
        document.getElementById('TW2').innerHTML = " ";
        document.getElementById('TW3').innerHTML = " ";
        document.getElementById('TW4').innerHTML = " ";
        document.getElementById('TW5').innerHTML = " "; 

        document.getElementById('TotalE').innerHTML = "Update Inputs";
        document.getElementById('TotalW').innerHTML = "Update Inputs";
        document.getElementById('Total').innerHTML = "Rs. "+Total;

        document.getElementById('Units').value="";

    }
}

function UnitCal() {
    Cal();
    
    Ser_Chg = parseInt(document.getElementById('Ser_Chg').value);
    Fix_Chg = parseInt(document.getElementById('Fix_Chg').value);
    Other_Chg = parseInt(document.getElementById('Other_Chg').value);
    Deduction = parseFloat(document.getElementById('Deduction').value);

    TE1 = Q1 * PE1;
    TE2 = Q2 * PE2;
    TE3 = Q3 * PE3;
    TE4 = Q4 * PE4;
    TE5 = Q5 * PE5;

    TW1 = Q1 * PW1;
    TW2 = Q2 * PW1;
    TW3 = Q3 * PW1;
    TW4 = Q4 * PW1;
    TW5 = Q5 * PW1;

    TotalE = TE1 + TE2 + TE3 + TE4 + TE5;
    TotalW = (Q1 + Q2 + Q3 + Q4 + Q5) * PW1;
    Total = TotalE + TotalW  + Rent + Ser_Chg + Fix_Chg + Other_Chg + Deduction;

    document.querySelectorAll('.Q1').forEach(el => el.innerHTML = Q1);
    document.querySelectorAll('.Q2').forEach(el => el.innerHTML = Q2);
    document.querySelectorAll('.Q3').forEach(el => el.innerHTML = Q3);
    document.querySelectorAll('.Q4').forEach(el => el.innerHTML = Q4);
    document.querySelectorAll('.Q5').forEach(el => el.innerHTML = Q5);

    document.getElementById('TE1').innerHTML = TE1;
    document.getElementById('TE2').innerHTML = TE2;
    document.getElementById('TE3').innerHTML = TE3;
    document.getElementById('TE4').innerHTML = TE4;
    document.getElementById('TE5').innerHTML = TE5;

    document.getElementById('TW1').innerHTML = TW1;
    document.getElementById('TW2').innerHTML = TW2;
    document.getElementById('TW3').innerHTML = TW3;
    document.getElementById('TW4').innerHTML = TW4;
    document.getElementById('TW5').innerHTML = TW5; 

    document.getElementById('TotalE').innerHTML = TotalE;
    document.getElementById('TotalW').innerHTML = TotalW;
    document.getElementById('Total').innerHTML = " Rs." + Total;

    Cal();

    
};

//Deduction Start (-)
function enforceNegative(input) {
    // Ensure the value always starts with '-'
    if (!input.value.startsWith('-')) {
        input.value = '-' + input.value.replace(/-/g, '');
    }

    // Remove non-numeric characters except the leading '-'
    input.value = '-' + input.value.substring(1).replace(/\D/g, '');
}


//Input Fields Hide Show
function hideZero(input) {
    if (input.value === "0") {
        input.value = "";
    }
}


function showZero(input) {
    if (input.value === "") {
        input.value = "0";
    }
}

function hide550(input) {
    if (input.value === "550") {
        input.value = "";
    }
}


function show550(input) {
    if (input.value === "") {
        input.value = "550";
    }
}

function hide300(input) {
    if (input.value === "300") {
        input.value = "";
    }
}


function show300(input) {
    if (input.value === "") {
        input.value = "300";
    }
}


function hide22500(input) {
    if (input.value === "22500") {
        input.value = "";
    }
}


function show22500(input) {
    if (input.value === "") {
        input.value = "22500";
    }
}

function hideMinusZero(input) {
    if (input.value === "-0") {
        input.value = "-";
    }
}


function showMinusZero(input) {
    if (input.value === "-") {
        input.value = "-0";
    }
}


//Default This Month
document.addEventListener("DOMContentLoaded", function () {
    const monthSelect = document.getElementById("month");
    const currentMonth = new Date().toLocaleString("en-US", { month: "long" });

    for (let option of monthSelect.options) {
        if (option.text === currentMonth) {
            option.selected = true;
            break;
        }
    }
});


//Coma in Number 3 by 3
function formatNumber(input) {
    let value = input.value.replace(/,/g, "");
    if (!isNaN(value) && value !== "") {
        input.value = Number(value).toLocaleString();
    }
}



// Generate PDF 


function generatePDF() {
    // Get input values
    const roomNumber = document.querySelector("#roomNumberSelect").value.trim();
    const name = document.getElementById("Name").value.trim().replace(/\s+/g, " ").replace(/_/g, " "); // Replace underscores with spaces
    const monthElement = document.querySelector("select[name='month']");
    const month = monthElement && monthElement.value !== "0" ? monthElement.options[monthElement.selectedIndex].text.trim() : "";
    const lastRead = document.getElementById("LastRead").value.trim();
    const currentRead = document.getElementById("CurrentRead").value.trim();
    const unitsConsumed = document.getElementById("Units").value.trim();
    const rentSelect = document.getElementById("RentSelect");
    const rentValue = rentSelect.value === "Other" ? parseFloat(document.getElementById("Rent").value) || 0 : parseFloat(rentSelect.value);
    const serviceCharge = parseFloat(document.getElementById("Ser_Chg").value) || 0;
    const fixedCharge = parseFloat(document.getElementById("Fix_Chg").value) || 0;
    const electricityCharge = parseFloat(document.getElementById("TotalE").textContent) || 0;
    const waterCharge = parseFloat(document.getElementById("TotalW").textContent) || 0;
    const otherCharges = parseFloat(document.getElementById("Other_Chg").value) || 0;
    const deduction = parseFloat(document.getElementById("Deduction").value) || 0;

    // Format numbers with commas (no decimals)
    const formatCurrency = (value) => value.toLocaleString('en-IN', { style: 'currency', currency: 'INR' }).replace('₹', 'Rs.').replace('.00', '');

    // Check for empty fields
    let emptyFields = [];
    if (!roomNumber || roomNumber === "0") emptyFields.push("Room Number");
    if (!name) emptyFields.push("Name");
    if (!month || month === "") emptyFields.push("Month");
    if (!lastRead) emptyFields.push("Last Meter Reading");
    if (!currentRead) emptyFields.push("Current Meter Reading");
    if (!unitsConsumed) emptyFields.push("Units Consumed");

    if (emptyFields.length > 0) {
        let message = "The following fields are empty:\n" + emptyFields.join("\n");
        alert(message);
        return;
    }

    const totalRent = rentValue + serviceCharge + fixedCharge + electricityCharge + waterCharge + otherCharges + deduction;

    // Generate PDF content
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Get the current date and time from the device
    const today = new Date();

    // Format the date as "March 3rd 2025"
    const day = today.getDate();
    const monthName = today.toLocaleString('default', { month: 'long' });
    const year = today.getFullYear();
    
    const suffix = (day) => {
        if (day >= 11 && day <= 13) return 'th';
        switch (day % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    };
    const formattedDate = `${monthName} ${day}${suffix(day)} ${year}`;

    // Format the time as "04:46:56 PM"
    const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const formattedTime = today.toLocaleTimeString('en-US', optionsTime);

    // Get last two digits of the current year
    const yearLastTwoDigits = today.getFullYear().toString().slice(-2);

    // Set Hemis Apartment Title (Bold & Green)
    doc.setFont("helvetica", "bold");
    doc.setFontSize(27);
    doc.setTextColor(0, 153, 0); // Green color
    const apartmentTitle = "Hemis Apartment";
    const titleWidth = doc.getTextWidth(apartmentTitle);
    const pageWidth = doc.internal.pageSize.width;
    doc.text(apartmentTitle, (pageWidth - titleWidth) / 2, 15); // Centered at top

    // Set Rent Title (Blue, Size 14)
    doc.setFontSize(21);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 0, 255); // Blue color
    const rentTitle = `${month}'${yearLastTwoDigits} Rent`;
    const rentTitleWidth = doc.getTextWidth(rentTitle);
    doc.text(rentTitle, (pageWidth - rentTitleWidth) / 2, 25); // Centered below apartment title

    // Set Date and Time (Blue, Size 14)
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 0, 255); // Blue color
    const dateTimeText = `${formattedDate}, ${formattedTime}`;
    const dateTimeWidth = doc.getTextWidth(dateTimeText);
    doc.text(dateTimeText, (pageWidth - dateTimeWidth) / 2, 35); // Centered below rent title

    // Line Separator (Soft Thin Line)
    doc.setLineWidth(0.5);
    doc.line(10, 40, 200, 40);
    doc.setFontSize(18);

    // Column for aligning colons
    const labelX = 10;
    const valueX = 70;

    // Personal Details Section (Black)
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 0, 0); // Black color for text
    doc.text("Room No.:", labelX, 50);
    doc.text("Name:", labelX, 60);
    doc.text("Month of Bill:", labelX, 70);
    doc.text("Meter Now:", labelX, 80);
    doc.text("Unit Used:", labelX, 90);

    // Personal Info (Normal Font)
    doc.setFont("helvetica", "normal");
    doc.text(roomNumber, valueX, 50);
    doc.text(name, valueX, 60);
    doc.text(month, valueX, 70);
    doc.text(currentRead, valueX, 80);
    doc.text(unitsConsumed, valueX, 90);

    // Bill Breakdown Header (Blue, Size 14)
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 0, 255); // Blue color
    doc.text("Bill Breakdown:", labelX, 110);

    // Bill Details Section (Black)
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 0, 0); // Black color for text
    doc.text("Rent:", labelX, 120);
    doc.text("Service Charge:", labelX, 130);
    doc.text("Fixed Charge:", labelX, 140);
    doc.text("Electricity Charge:", labelX, 150);
    doc.text("Water Charge:", labelX, 160);
    doc.text("Other Charges:", labelX, 170);
    doc.text("Deduction:", labelX, 180);

    // Bill Info in Normal font
    doc.setFont("helvetica", "normal");
    doc.text(formatCurrency(rentValue), valueX, 120);
    doc.text(formatCurrency(serviceCharge), valueX, 130);
    doc.text(formatCurrency(fixedCharge), valueX, 140);
    doc.text(formatCurrency(electricityCharge), valueX, 150);
    doc.text(formatCurrency(waterCharge), valueX, 160);
    doc.text(formatCurrency(otherCharges), valueX, 170);
    doc.text(formatCurrency(deduction), valueX, 180);

    // Total Bill Section (Red, Size 14 Bold)
    doc.setFont("helvetica", "bold");
    doc.setFontSize(23);
    doc.setTextColor(255, 0, 0); // Red color for the total
    
    doc.text(`Total Bill: Rs. ${totalRent.toLocaleString('en-IN')}`, labelX, 200);

    // Draw an ash-colored line before the "Thanks" message
    doc.setDrawColor(169, 169, 169); // Ash color
    doc.setLineWidth(0.5);
    doc.line(10, 210, 200, 210); // Horizontal line

    // Add "Thanks for using Our Service!" message (Ash Color)
    doc.setFont("helvetica", "normal");
    doc.setTextColor(128, 128, 128); // Ash color
    doc.setFontSize(20);
    doc.text("Thanks For Using Our Service!", (pageWidth - doc.getTextWidth("Thanks for using Our Service!")) / 2, 220);

    // Generate the filename in the format: Room(number)_Name_(Month)'(Year last two digits).pdf
    const filename = `Room${roomNumber}_${name}_${month}'${yearLastTwoDigits}.pdf`;

    // Save the document with the generated filename
    doc.save(filename);
}

