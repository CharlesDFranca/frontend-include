let currentConsultationId = null;

function showCancelModal(consultationId) {
    currentConsultationId = consultationId; 
    document.getElementById('overlay').classList.add('active');
    document.getElementById('cancelModal').classList.add('active');
    document.getElementById('cancelReason').value = ''; 
}

function hideCancelModal() {
    document.getElementById('overlay').classList.remove('active');
    document.getElementById('cancelModal').classList.remove('active');
    currentConsultationId = null;
}

function showSuccessNotification() {
    const notification = document.getElementById('successNotification');
    notification.classList.add('active');

    setTimeout(() => {
        notification.classList.remove('active');
    }, 3000);
}

function removeConsultation(consultationId) {
    const consultation = document.querySelector(`.consultation-item[data-id="${consultationId}"]`);
    if (consultation) {
        consultation.remove(); 

        
        const remainingConsultations = document.querySelectorAll('.consultation-item');
        if (remainingConsultations.length === 0) {
            const consultationList = document.querySelector('.consultation-list');
            consultationList.innerHTML = '<p style="text-align: center; padding: 2rem;">Você não possui consultas agendadas.</p>';
        }
    } else {
        console.error(`Consulta com ID ${consultationId} não encontrada.`);
    }
}

function confirmCancellation() {
    const reason = document.getElementById('cancelReason').value.trim();

    if (reason === '') {
        alert('Por favor, informe o motivo do cancelamento.');
        return;
    }
    
    hideCancelModal(); 
    showSuccessNotification(); 
    removeConsultation(currentConsultationId); 
}