let doctors = []

async function getDoctors() {
    const token = localStorage.getItem('token');

    if (!token) {
        alert('Você precisa fazer login.');
        window.location.href = "./login.html";
        return;
    }

    try {
        const response = await axios.get('http://localhost:3000/doctors', {
            headers: {
                Authorization: `Bearer ${token}`, 
            }
        });

        doctors = response.data
    } catch (error) {}
}

getDoctors()


function searchDoctors() {
    const specialty = document.querySelector('input[placeholder="Nome ou especialidade"]').value.toLowerCase();
    const city = document.querySelector('input[placeholder="Cidade"]').value.toLowerCase();
    
    const filteredDoctors = doctors.filter(doctor => {
        const matchSpecialty = doctor.specialty.toLowerCase().includes(specialty) ||
                             doctor.name.toLowerCase().includes(specialty);
        
        return matchSpecialty && (city === '');
    });
    
    displayResults(filteredDoctors);
}


function displayResults(results) {
    const resultsContainer = document.getElementById('searchResults');
    
    if (!resultsContainer) {
        const container = document.createElement('div');
        container.id = 'searchResults';
        container.className = 'search-results';
        document.querySelector('.search-form').after(container);
    }
    
    const container = document.getElementById('searchResults');
    container.innerHTML = '';
    
    if (results.length === 0) {
        container.innerHTML = '<p class="no-results">Nenhum médico encontrado com os critérios especificados.</p>';
        return;
    }
    
    results.forEach(doctor => {
        const doctorCard = document.createElement('div');
        doctorCard.className = 'doctor-card';
        doctorCard.innerHTML = `
            <div class="doctor-info">
                <h3 >${doctor.name}</h3>
                <p>${doctor.specialty}</p>
                <button class="schedule-btn" onclick="scheduleAppointment('${doctor.id}')">
                    Agendar Consulta
                </button>
            </div>
        `;
        container.appendChild(doctorCard);
    });
}


function scheduleAppointment(id) {
    localStorage.setItem('selectedDoctor', JSON.stringify(id));
    window.location.href = 'calendly.html';
}


document.addEventListener('DOMContentLoaded', () => {
    const searchInputs = document.querySelectorAll('.search-input');
    const searchButton = document.querySelector('.search-button');
    
    if (searchInputs && searchButton) {
        searchInputs.forEach(input => {
            input.addEventListener('input', searchDoctors);
        });
        
        searchButton.addEventListener('click', searchDoctors);
    }
});