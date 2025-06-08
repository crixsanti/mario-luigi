// Seleciona o campo de telefone
const telefoneInput = document.querySelector('input[name="telefone"]');

// Adiciona a máscara de telefone
telefoneInput.addEventListener('input', function(e) {
    let value = this.value.replace(/\D/g, ''); // Remove todos os não-dígitos
    let formattedValue = '';
    
    if (value.length > 0) {
        formattedValue = '(' + value.substring(0, 2);
    }
    if (value.length > 2) {
        formattedValue += ') ' + value.substring(2, 7);
    }
    if (value.length > 7) {
        formattedValue += '-' + value.substring(7, 11);
    }
    
    this.value = formattedValue;
});

const form = document.querySelector(".formulario")
const maskForm = document.querySelector(".mascara-form")

function showForm() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    maskForm.style.visibility = "visible"
}

function hiddenForm() {
    form.style.left = "-300px"
    form.style.transform = "none"
    maskForm.style.visibility = "hidden"
}