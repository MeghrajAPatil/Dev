document.getElementById("predictionForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const patientId = document.getElementById("patientId").value.trim();
  const name = document.getElementById("patientName").value.trim();
  const age = parseInt(document.getElementById("age").value);
  const gestation = parseFloat(document.getElementById("gestation").value);
  const bp = document.getElementById("bp").value.trim();
  const diabetes = document.getElementById("diabetes").value;
  const symptoms = document.getElementById("symptoms").value.trim();

  let classification = "";
  if (gestation > 37) {
    classification = "TERM ✅";
  } else {
    classification = "PRETERM ⚠️";
  }

  const resultText = `Patient ${name} is predicted as: ${classification}`;
  document.getElementById("result").innerText = resultText;

  // Add to history table
  const tbody = document.getElementById("historyBody");
  const newRow = document.createElement("tr");

  newRow.innerHTML = `
    <td>${patientId}</td>
    <td>${name}</td>
    <td>${age}</td>
    <td>${gestation}</td>
    <td>${bp}</td>
    <td>${diabetes}</td>
    <td>${symptoms || "-"}</td>
    <td><strong>${classification}</strong></td>
  `;

  tbody.prepend(newRow); // add latest on top

  // Optional: Clear form
  document.getElementById("predictionForm").reset();
});
