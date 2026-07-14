/**
 * MEMBER 1 - UI SHELL & FORMS
 * Plain, simple functions to handle form data collection and resetting.
 */

// 1. Grab the HTML input boxes from the team lead's HTML page
const nameField = document.getElementById('childName');
const schoolField = document.getElementById('schoolName');
const feesField = document.getElementById('totalFees');
const paidField = document.getElementById('paidAmount');
const dateField = document.getElementById('dueDate');
const editIdField = document.getElementById('editId');
const formElement = document.getElementById('childForm');

/**
 * Function to read what the user typed in the form.
 * It packages the values into a clean object matching our team structure.
 */
function getFormData() {
  return {
    id: editIdField.value || Date.now().toString(),
    name: nameField.value.trim(),
    school: schoolField.value.trim(),
    totalFees: Number(feesField.value),
    paid: Number(paidField.value),
    dueDate: dateField.value
  };
}

/**
 * Function to reset the form inputs back to blank.
 * Call this after a child is successfully added or updated.
 */
function clearForm() {
  formElement.reset();
  editIdField.value = "";
}

console.log("Member 1: Simple UI form methods loaded successfully!");
