async function loadGlobalRates() {
  const response = await fetch("./data/data_mental_health.json");
  const data = await response.json();

  // Calculate global averages
  const totalCountries = data.length;
  const avgDepression = (data.reduce((sum, c) => sum + c.depression, 0) / totalCountries).toFixed(2);
  const avgAnxiety = (data.reduce((sum, c) => sum + c.anxiety, 0) / totalCountries).toFixed(2);
  const avgBipolar = (data.reduce((sum, c) => sum + c.bipolar, 0) / totalCountries).toFixed(2);

  animateCounter('depression-counter', avgDepression);
  animateCounter('anxiety-counter', avgAnxiety);
  animateCounter('bipolar-counter', avgBipolar);
}

function animateCounter(id, target) {
  const element = document.getElementById(id);
  let current = 0;
  const increment = target / 50; //number of steps

  const interval = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(interval);
    }
    element.textContent = current.toFixed(2) + '%';
  }, 20);
}

async function loadDepressionChart() {
  const response = await fetch("./data/data_depression.json");
  const data = await response.json();

  const labels = data.map(c => c.country);
  const values = data.map(c => c.depression);

  const ctx = document.getElementById("depressionChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [{
        label: "Depression Rate (%)",
        data: values,
        backgroundColor: 'rgba(59, 130, 246, 0.6)', // Tailwind blue-500
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => {
              const country = ctx.label;
              const value = ctx.parsed.y;
              return `${country}: ${value}% of population (latest year)`;
            }
          },
          backgroundColor: '#1f2937', // Tailwind gray-800
          titleColor: '#f9fafb',      // Tailwind gray-50
          bodyColor: '#f9fafb',
          padding: 10,
          cornerRadius: 6
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: { display: true, text: 'Percentage of Population' }
        }
      }
    },
  });
}

async function loadGlobalTrendChart() {
  const res = await fetch('./data/data_global_depression_trend.json');
  const data = await res.json();

  const labels = data.map(d => d.year);
  const values = data.map(d => d.avg_depression);

  const ctx = document.getElementById('globalTrendChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: 'Average Depression Rate (%)',
        data: values,
        borderColor: 'rgb(16, 185, 129)', // Tailwind emerald-500
        backgroundColor: 'rgba(16, 185, 129, 0.2)',
        fill: true,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      plugins: {
        tooltip: {
          callbacks: {
            label: ctx => {
              const year = ctx.label;
              const value = ctx.parsed.y;
              const index = ctx.dataIndex;
              let change = '';
              if (index > 0) {
                const prevValue = ctx.chart.data.datasets[0].data[index - 1];
                const diff = (value - prevValue).toFixed(2);
                change = ` (${diff > 0 ? '+' : ''}${diff} vs prev year)`;
              }
              return `Year ${year}: ${value}%${change}`;
            }
          },
          backgroundColor: '#1f2937',
          titleColor: '#f9fafb',
          bodyColor: '#f9fafb',
          padding: 10,
          cornerRadius: 6
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: { display: true, text: 'Percentage of Population' }
        },
        x: {
          title: { display: true, text: 'Year' }
        }
      }
    },
  });
}

function initImpactScrollAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0', 'translate-y-6');
        entry.target.classList.add('opacity-100', 'translate-y-0', 'transition-all', 'duration-700');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.impact-card').forEach(card => {
    observer.observe(card);
  });
}


loadGlobalRates();
loadDepressionChart();
loadGlobalTrendChart();
initImpactScrollAnimation();