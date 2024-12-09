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



