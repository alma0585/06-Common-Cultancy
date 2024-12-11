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

        //opslag
       fetch("http://localhost:3000/data")
           .then(response => response.json())
           .then(data => {
               const labels = data.map(item => item.year)
               const amounts = data.map(item => item.amount)
               console.log(data)

               const ctx = document.getElementById('chart1').getContext('2d');
               const barChart1 = new Chart(ctx, {
                   type: 'bar',
                   data: {
                       labels: labels,
                       datasets: [{
                           label: 'Antal opslag',
                           data: amounts,
                           borderColor: 'rgba(75, 192, 192, 1)',
                           backgroundColor: 'rgba(75, 192, 192, 0.2)',
                       }]
                   },
                   options: {
                       scales: {
                           y: {
                                beginAtZero: true,
                               grid: {
                                    display: false,
                               }
                           },
                           x: {
                               grid: {
                                   display: false,
                               }
                           }
                       },
                       plugins: {
                           legend: {
                               labels: {
                                   boxWidth: 0, // Fjern farveboksen
                                   boxHeight: 0, // Fjern farveboksen
                               }
                           }
                       }
                   }
               });


           })

    fetch("http://localhost:3000/data2")
        .then(response => response.json())
        .then(data => {
            const labels = data.map(item => item.month)
            const interactions = data.map(item => item.interactions)
            console.log(data)

            const ctx = document.getElementById('chart2').getContext('2d');
            const barChart1 = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Interaktioner',
                        data: interactions,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    }
                    ]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                display: false,
                            }
                        },
                        x: {
                            grid: {
                                display: false,
                            }
                        }
                    }
                }
            });


        })

    fetch("http://localhost:3000/data3")
        .then(response => response.json())
        .then(data => {
            const labels = data.map(item => item.month)
            const opslag = data.map(item => item.interactions)
            console.log(data)

            const ctx = document.getElementById('chart3').getContext('2d');
            const barChart1 = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Interaktioner',
                        data: opslag,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    }
                    ]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                display: false,
                            }
                        },
                        x: {
                            grid: {
                                display: false,
                            }
                        }
                    }
                }
            });


        })
    fetch("http://localhost:3000/data4")
        .then(response => response.json())
        .then(data => {
            const labels = data.map(item => item.month)
            const opslag = data.map(item => item.opslag)
            console.log(data)

            const ctx = document.getElementById('chart4').getContext('2d');
            const barChart1 = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Opslag',
                        data: opslag,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    }
                    ]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                display: false,
                            }
                        },
                        x: {
                            grid: {
                                display: false,
                            }
                        }
                    }
                }
            });


        })
    fetch("http://localhost:3000/data5")
        .then(response => response.json())
        .then(data => {
            const labels = data.map(item => item.month)
            const opslag = data.map(item => item.opslag)
            console.log(data)

            const ctx = document.getElementById('chart5').getContext('2d');
            const barChart1 = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Opslag',
                        data: opslag,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    }
                    ]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                display: false,
                            }
                        },
                        x: {
                            grid: {
                                display: false,
                            }
                        }
                    }
                }
            });


        })

    // Tilføj en ny begivenhed efter 3 sekunder
    setTimeout(() => {
        addTimelineEvent(2030, 'År 2030', 'Fremtidens æra begynder!');
    }, 3000);

});
