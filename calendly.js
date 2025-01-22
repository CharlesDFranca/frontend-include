function loadDoctorInfo() {
    const doctorInfoElement = document.querySelector('.doctor-info');
    if (doctorInfoElement) {
        const doctor = JSON.parse(localStorage.getItem('selectedDoctor'));
        
        if (doctor) {
            
            const doctorNameElement = doctorInfoElement.querySelector('.doctor-name');
            const doctorSpecialtyElement = doctorInfoElement.querySelector('.doctor-specialty');
            
            if (doctorNameElement) {
                doctorNameElement.textContent = doctor.name;
            }
            
            if (doctorSpecialtyElement) {
                doctorSpecialtyElement.textContent = doctor.specialty;
            }
            
            
            const specialtyBreadcrumb = document.querySelector('.breadcrumb-item:nth-child(2)');
            const cityBreadcrumb = document.querySelector('.breadcrumb-item:nth-child(3)');
            const doctorBreadcrumb = document.querySelector('.breadcrumb-item:nth-child(4)');
            
            if (specialtyBreadcrumb) {
                specialtyBreadcrumb.textContent = doctor.specialty;
            }
            if (cityBreadcrumb) {
                cityBreadcrumb.textContent = doctor.city;
            }
            if (doctorBreadcrumb) {
                doctorBreadcrumb.textContent = doctor.name;
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', loadDoctorInfo);