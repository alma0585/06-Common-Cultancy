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
                           label: 'Amount of Post through the years',
                           data: amounts,
                           borderColor: 'rgba(75, 192, 192, 1)',
                           backgroundColor: ['#121a77', '#c5af00'],
                       }]
                   },
                   options: {
                       scales: {
                           y: {
                               ticks:{
                                   color:'white'
                               },
                                beginAtZero: true,
                               grid: {
                                    display: false,
                               }
                           },
                           x: {
                               ticks:{
                                   color:'white'
                               },
                               grid: {
                                   display: false,
                               }
                           }
                       },
                       plugins: {
                           legend: {
                               labels: {
                                   color:'white',
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
                        label: 'Interactions on facebook',
                        data: interactions,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    }
                    ]
                },
                options: {
                    scales: {
                        y: {
                            ticks:{
                                color:'white'
                            },
                            beginAtZero: true,
                            grid: {
                                display: false,
                            }
                        },
                        x: {
                            ticks:{
                                color:'white'
                            },
                            grid: {
                                display: false,
                            }
                        }
                    },plugins: {
                    legend: {
                        labels: {
                            color:'white',
                            boxWidth: 0, // Fjern farveboksen
                            boxHeight: 0, // Fjern farveboksen
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
                        label: 'Interactions on facebook',
                        data: opslag,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    }
                    ]
                },
                options: {
                    scales: {
                        y: {
                            ticks:{
                                color:'white'
                            },
                            beginAtZero: true,
                            grid: {
                                display: false,
                            }
                        },
                        x: {
                            ticks:{
                                color:'white'
                            },
                            grid: {
                                display: false,
                            }
                        }
                    },plugins: {
                        legend: {
                            labels: {
                                color:'white',
                                boxWidth: 0, // Fjern farveboksen
                                boxHeight: 0, // Fjern farveboksen
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
                        label: 'Amount of post i 2022',
                        data: opslag,
                        borderColor: '#FFDD00',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    }
                    ]
                },
                options: {
                    scales: {
                        y: {
                            ticks:{
                                color:'white'
                            },
                            beginAtZero: true,
                            grid: {
                                display: false,
                            }
                        },
                        x: {
                            ticks:{
                                color:'white'
                            },
                            grid: {
                                display: false,
                            }
                        }
                    },plugins: {
                        legend: {
                            labels: {
                                color:'white',
                                boxWidth: 0, // Fjern farveboksen
                                boxHeight: 0, // Fjern farveboksen
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
                        label: 'Amount of post in 2023',
                        data: opslag,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    }
                    ]
                },
                options: {
                    scales: {
                        y: {
                            ticks:{
                                color:'white'
                            },
                            beginAtZero: true,
                            grid: {
                                display: false,
                            }
                        },
                        x: {
                            ticks:{
                                color:'white'
                            },
                            grid: {
                                display: false,
                            }
                        }
                    },plugins: {
                        legend: {
                            labels: {
                                color:'white',
                                boxWidth: 0, // Fjern farveboksen
                                boxHeight: 0, // Fjern farveboksen
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

// til slide sektionen
let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    // Update the current slide index
    currentSlide += direction;

    // Loop slides if out of bounds
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1; // Go to the last slide
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0; // Go to the first slide
    }

    // Move the slides container
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}