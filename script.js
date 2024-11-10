function checkNetworkCoverage() {
    const insurance = document.getElementById("insurance").value;
    const treatment = document.getElementById("problem").value;

    const treatmentCosts = {
        "general": "$100",
        "dental": "$200",
        "cardio": "$500",
        "orthopedic": "$300",
        "dermatology": "$250"
    };

    let responseMessage = "";

    if (insurance && insurance !== "other") {
        responseMessage += `Yes, the provider is in the network for the selected insurance (${insurance}). `;
    } else if (insurance === "other") {
        responseMessage += "The selected provider is not in the network. ";
    }

    if (treatment && treatmentCosts[treatment]) {
        responseMessage += `The estimated cost for the selected treatment after insurance coverage is ${treatmentCosts[treatment]}.`;
    }

    document.getElementById("response").innerText = responseMessage;
}

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const name = document.getElementById("name").value;
    const insurance = document.getElementById("insurance").value;
    const location = document.getElementById("location").value;
    const treatment = document.getElementById("problem").value;
    const contact = document.getElementById("contact").value;
    const responseText = document.getElementById("response").innerText;

    doc.text("Healthcare Provider Search Summary", 10, 10);
    doc.text(`Name: ${name}`, 10, 20);
    doc.text(`Insurance Provider: ${insurance}`, 10, 30);
    doc.text(`Location/Zip Code: ${location}`, 10, 40);
    doc.text(`Treatment Type: ${treatment}`, 10, 50);
    doc.text(`Contact Information: ${contact}`, 10, 60);
    doc.text(`Coverage and Cost Estimate: ${responseText}`, 10, 70);

    doc.save("PlanPal_Healthcare_Summary.pdf");
}