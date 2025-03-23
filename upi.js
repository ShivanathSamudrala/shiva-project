javascript
Copy
function redirectToUPI() {
  const upiId = document.getElementById('upi-id').value;
  const amount = document.getElementById('total-amount').value;
  const paymentLink = `upi://pay?pa=${upiId}&pn=CollegeCanteen&am=${amount}&cu=INR`;
  window.location.href = paymentLink;
}
