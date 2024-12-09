// script.js
document.addEventListener('DOMContentLoaded', () => {
    const timeline = document.querySelector('.timeline');

    // Funktion til at tilføje en ny begivenhed
    function addTimelineEvent(year, title, description) {
        const newItem = document.createElement('div');
        newItem.classList.add('timeline-item');
        newItem.setAttribute('data-year', year);

        newItem.innerHTML = `
      <div class="timeline-content">
        <h2>${title}</h2>
        <p>${description}</p>
      </div>
    `;

        timeline.appendChild(newItem);
    }

    function fetchData() {
       fetch("http://localhost:3000/data")
           .then(response => response.json())
           .then(data => {
                console.log(data)


           })

    }

    fetchData()

    // Tilføj en ny begivenhed efter 3 sekunder
    setTimeout(() => {
        addTimelineEvent(2030, 'År 2030', 'Fremtidens æra begynder!');
    }, 3000);

});

const ctx = document.querySelector('#chart1').getContext('2d');

const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2022', '2023', '2024'],
        datasets: [{
            label: 'Mængde af opslag om Ukraine',
            data: [1000, 650, 200],
            backgroundColor: 'rgba(50, 50, 150, 1)',
            borderColor: 'rgba(50, 50, 150, 0.2)'
        }],

    },
    options: {
        plugins: {
            legend: {
                labels: {
                    boxWidth: 0,
                    boxHeight: 0,
                }
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                }
            },
            y: {
                grid: {
                    display: false,
                }
            }
        }
    }

});