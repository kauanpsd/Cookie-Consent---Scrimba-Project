const modal = document.getElementById("modal")
const modalCloseBtn = document.getElementById('modal-close-btn')
const modalForm = document.getElementById("costumer-form")

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
})

