// Mock Data
const savingsData = [500, 200, 100, 50];
const expensesData = [300, 150, 50, 100];
const expensesLabels = ["Rent", "Groceries", "Utilities", "Entertainment"];

// Savings Chart (Bar chart)
const savingsCtx = document.getElementById('savingsChart').getContext('2d');
const savingsChart = new Chart(savingsCtx, {
  type: 'bar',
  data: {
    labels: ['Emergency Fund', 'Retirement', 'Investment', 'Other'],
    datasets: [{
      label: 'Amount in $',
      data: savingsData,
      backgroundColor: ['#4CAF50', '#2196F3', '#FF9800', '#9C27B0'],
      borderColor: ['#388E3C', '#1976D2', '#F57C00', '#7B1FA2'],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }
});

// Expenses Chart (Pie chart)
const expensesCtx = document.getElementById('expensesChart').getContext('2d');
const expensesChart = new Chart(expensesCtx, {
  type: 'pie',
  data: {
    labels: expensesLabels,
    datasets: [{
      label: 'Expenses in $',
      data: expensesData,
      backgroundColor: ['#FF5733', '#FFC107', '#2196F3', '#8BC34A'],
      borderColor: ['#C0392B', '#FF9800', '#1976D2', '#388E3C'],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  }
});

// Future enhancements: Make the charts interactive (e.g., on hover) and update dynamically from real data sources
