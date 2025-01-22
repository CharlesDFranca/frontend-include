function toggleMenu() {
    const menuDropdown = document.querySelector('.menu-dropdown:not(.hidden)'); 
    if (menuDropdown) {
        menuDropdown.classList.toggle('active'); 
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const modalHTML = `
        <div id="userTypeModal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
            background-color: rgba(0,0,0,0.5); z-index: 1000; justify-content: center; align-items: center;">
            <div style="background-color: white; padding: 2rem; border-radius: 8px; width: 90%; max-width: 400px; text-align: center;">
                <h2 style="color: #333; margin-bottom: 2rem;">Qual papel você exerce na clínica?</h2>
                <div style="display: flex; gap: 1rem; justify-content: center; margin-bottom: 2rem;">
                    <button onclick="selectUserType('medico')" 
                        style="padding: 1rem 2rem; border: 1px solid #ddd; border-radius: 4px; background: white; cursor: pointer; flex: 1;">
                        Médico
                    </button>
                    <button onclick="selectUserType('paciente')"
                        style="padding: 1rem 2rem; border: 1px solid #ddd; border-radius: 4px; background: white; cursor: pointer; flex: 1;">
                        Paciente
                    </button>
                </div>
                <button id="confirmarBtn" disabled
                    style="width: 100%; padding: 1rem; background: #55917F; color: white; border: none; 
                    border-radius: 4px; cursor: pointer; opacity: 0.5;">
                    Confirmar
                </button>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    
    const loginBtn = document.querySelector('.login-btn');
if (loginBtn) {
    loginBtn.addEventListener('click', function() {
        window.location.href = 'login.html';
    });
}

    
    const registerLink = document.querySelector('.register-link');
    if (registerLink) {
        registerLink.addEventListener('click', function(e) {
            e.preventDefault();
            showUserTypeModal();
        });
    }
});

let selectedType = null;

function showUserTypeModal() {
    const modal = document.getElementById('userTypeModal');
    modal.style.display = 'flex';
}

function selectUserType(type) {
    selectedType = type;
    
    
    document.querySelectorAll('#userTypeModal button').forEach(btn => {
        if (!btn.id.includes('confirmarBtn')) {  
            btn.style.background = 'white';
            btn.style.color = '#333';
        }
    });
    
    
    event.target.style.background = '#55917F';
    event.target.style.color = 'white';
    
    
    const confirmarBtn = document.getElementById('confirmarBtn');
    confirmarBtn.disabled = false;
    confirmarBtn.style.opacity = '1';
    
    
    confirmarBtn.onclick = function() {
        if (selectedType === 'medico') {
            window.location.href = 'cadastromedico.html';
        } else {
            window.location.href = 'cadastrocliente.html';
        }
    };
}

