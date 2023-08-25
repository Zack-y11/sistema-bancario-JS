//Capturar los textos
const depositoTexto = document.getElementById('depositoActual'),
    retiroTexto = document.getElementById('retiroActual'),
    balanceTexto = document.getElementById('balanceActual')
/*
*Capturat los inputs
*/
    inputDeposito = document.getElementById('depositoInput'),
    inputRetiro = document.getElementById('retiroInput'),
/*
*Capturar Boton
*/
    btnDeposito = document.getElementById('calcularDeposito'),
    btnRetiro = document.getElementById('calcularRetiro')
/*
*Agregar evento deposito
*/
    btnDeposito.addEventListener('click', (event) => {
        const valorDeposito = inputDeposito.value

        const totalDeposito = Number(depositoTexto.innerText)+Number(valorDeposito)
        const totalBalance = Number(balanceTexto.innerText) + Number(valorDeposito)
        depositoTexto.innerHTML = totalDeposito
        balanceTexto.innerHTML = totalBalance

        inputDeposito.value = ''
        
    })

    btnRetiro.addEventListener('click', (event) => {
        const valorRetiro = inputRetiro.value
        if (valorRetiro == 0){
            alert('No hay dinero para retirar')
            return
        }
        
        if (Number(valorRetiro) > Number(balanceTexto)){
            alert("Fondos Insuficientes")
            return
        }

        
        alert('Retiro exitoso')
        
    })
    
    
