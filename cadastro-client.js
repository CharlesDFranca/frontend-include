import axios from "axios"

document.getElementById('form-client').addEventListener('submit', async (e) => {
    e.preventDefault();  
    
    const name = document.getElementById('nome').value;
    const contact = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('senha').value;
  
    const clientData = { name, contact, email, password};
  
    try {
        await axios.post('https://include-backend.onrender.com/patients', clientData);
    
        document.getElementById('form-client').reset();
    } catch (error) {
        console.error(error);
        alert('Erro ao cadastrar o cliente. Tente novamente!');
    }
});
