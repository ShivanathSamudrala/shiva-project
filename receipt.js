javascript
Copy
function generateReceipt(orderDetails) {
  const doc = new jsPDF();
  doc.text("Order Receipt", 10, 10);
  doc.text(`Order ID: ${orderDetails.orderId}`, 10, 20);
  doc.text(`Items: ${orderDetails.items.join(', ')}`, 10, 30);
  doc.text(`Total Amount: ${orderDetails.totalAmount}`, 10, 40);
  doc.save("receipt.pdf");
}
