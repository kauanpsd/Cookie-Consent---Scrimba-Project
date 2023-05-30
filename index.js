const modal = document.getElementById("modal")
const modalCloseBtn = document.getElementById('modal-close-btn')
const modalForm = document.getElementById("costumer-form")
const modalText= document.getElementById("modal-text")

setTimeout(function(){
    modal.style.display = 'inline'
    },1500)

setTimeout(function(){
    modalCloseBtn.removeAttribute('disabled')
},5000)
    

modalCloseBtn.addEventListener('click',function(){
    modal.style.display = 'none'
}) 

modalForm.addEventListener('submit',function(e){
    e.preventDefault()
    console.log("submited")
    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="uploadText">
            Uploading your data to the dark web...
        </p>
    </div>
    `

    setTimeout(function(){
        document.getElementById("uploadText").innerText = `Making the sale...`
    },1500)

    
    const FormDataCostumer = new FormData(modalForm)
    const name = FormDataCostumer.get('costumerName')

    setTimeout(function(){
        document.getElementById("modal-inner").innerHTML = `
        <h2>Thanks <span class="modal-display-name">${name}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate-laughing.gif">
        </div>
    ` 
    },3000)

})

