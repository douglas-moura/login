export const popup = (tipo: string, msg: string) => {

    const mainPage = document.getElementById('pagina') as HTMLElement
    
    mainPage.innerHTML +=
        `<section id="bloco-alert" class="absolute z-50 top-0 mt-4">
            <div id="alert-content" class="container rounded-lg shadow-md">
                <span class="flex-row items-center text-white">
                    <iconify-icon id="icon-alert" icon="akar-icons:triangle-alert" height="20" class="mr-2"></iconify-icon>
                    <p id="msg-alert" class="">Alerta</p>
                </span>
            </div>
        </section>`
        
    const alertBox = document.getElementById('bloco-alert') as HTMLElement
    const alertContent = document.getElementById('alert-content') as HTMLElement
    const alertIcone = document.getElementById('icon-alert') as HTMLElement
    const alertMsg = document.getElementById('msg-alert') as HTMLElement
    
    alertBox.classList.remove('hidden')
    if (tipo == 'erro') {
        alertContent.classList.add('bg-red-700')
        alertIcone.attributes[1].value = 'akar-icons:triangle-alert'
        alertMsg.innerText = msg
    } else if (tipo == 'sucesso') {
        alertContent.classList.add('bg-green-700')
        alertIcone.attributes[1].value = 'akar-icons:circle-check'
        alertMsg.innerText = msg
    } else {
        alertContent.classList.add('bg-amber-500')
        alertIcone.attributes[1].value = 'akar-icons:info'
        alertMsg.innerText = msg
    }
    setTimeout(() => {
        alertBox.classList.add('hidden')
    }, 3000);
}