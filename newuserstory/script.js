let currentRow;

function markAsCompleted(button) {
  const row = button.closest('tr');
  row.classList.remove('pending');
  row.classList.add('completed');
  row.cells[3].textContent = 'Completed';
  button.disabled = true;
}

function reschedulePayment(button) {
  currentRow = button.closest('tr');
  const dueDate = currentRow.cells[1].textContent;
  document.getElementById('rescheduleModal').style.display = "block";
}

function closeModal() {
  document.getElementById('rescheduleModal').style.display = "none";
}

function saveReschedule() {
  const newDate = document.getElementById('newDate').value;
  if (newDate) {
    currentRow.cells[1].textContent = new Date(newDate).toLocaleDateString();
  }
  closeModal();
}

function sortPayments() {
  const sortBy = document.getElementById('sortBy').value;
  const table = document.getElementById('paymentTable');
  const rows = Array.from(table.rows).slice(1);

  rows.sort((rowA, rowB) => {
    const cellA = rowA.cells[sortBy === 'dueDate' ? 1 : 2].textContent;
    const cellB = rowB.cells[sortBy === 'dueDate' ? 1 : 2].textContent;
    return sortBy === 'dueDate' ? new Date(cellA) - new Date(cellB) : parseFloat(cellA.slice(1)) - parseFloat(cellB.slice(1));
  });

  rows.forEach(row => table.appendChild(row));
}

function filterPayments() {
  const filter = document.getElementById('statusFilter').value;
  const rows = document.querySelectorAll('#paymentTable tbody tr');
  
  rows.forEach(row => {
    if (filter === 'all' || row.classList.contains(filter)) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
}
