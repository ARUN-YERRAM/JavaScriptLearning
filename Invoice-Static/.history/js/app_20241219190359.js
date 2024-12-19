document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('invoices-tbody');

    // Load invoices from localStorage
    const loadInvoices = () => {
        const invoices = JSON.parse(localStorage.getItem('invoices')) || [];
        tableBody.innerHTML = invoices.map((invoice, index) => `
            <tr>
                <td>${invoice.id}</td>
                <td contenteditable="false">${invoice.customer}</td>
                <td contenteditable="false">${invoice.amount}</td>
                <td contenteditable="false">${invoice.date}</td>
                <td>
                    <button onclick="enableEdit(this, ${invoice.id})">Update</button>
                    <button onclick="deleteInvoice(${invoice.id})">Delete</button>
                </td>
            </tr>
        `).join('')
    };

    // Enable editing for a row
    window.enableEdit = (button, id) => {
        const row = button.parentElement.parentElement;
        const isEditing = row.contentEditable === "true";

        if (isEditing) {
            const [customer, amount, date] = Array.from(row.cells).slice(1, 4).map(cell => cell.textContent);

            if (confirm("Confirm update?")) {
                const invoices = JSON.parse(localStorage.getItem('invoices')) || [];
                const invoiceIndex = invoices.findIndex(invoice => invoice.id === id);
                if (invoiceIndex >= 0) {
                    invoices[invoiceIndex] = { ...invoices[invoiceIndex], customer, amount: parseFloat(amount), date };
                    localStorage.setItem('invoices', JSON.stringify(invoices));
                }
            }
            button.textContent = "Update";
        } else {
            Array.from(row.cells).slice(1, 4).forEach(cell => cell.contentEditable = true);
            button.textContent = "Submit";
        }
        row.contentEditable = !isEditing;
    };

    // Delete an invoice
    window.deleteInvoice = (id) => {
        if (confirm("Are you sure you want to delete this invoice?")) {
            const invoices = JSON.parse(localStorage.getItem('invoices')) || [];
            const updatedInvoices = invoices.filter(invoice => invoice.id !== id);
            localStorage.setItem('invoices', JSON.stringify(updatedInvoices));
            loadInvoices();
        }
    };

    loadInvoices();
});
