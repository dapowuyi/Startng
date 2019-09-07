let modal = document.querySelector(".modal");
let triggerModal = document.querySelector(".triggerModal");
let closeButton = document.querySelector(".close-button");
let form =  document.querySelector(".form");
let msg = document.querySelector(".msg");

    const toggleModal = () => {
        modal.classList.toggle("show-modal");
    }

    const windowOnClick = (event) => {
        if (event.target === modal) {
            toggleModal();
        }
    }

  
    triggerModal.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);


form.title.addEventListener('input', (e) =>{
    msg.textContent = "";
    const validator = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
    if (!validator.test(form.title.value)) {
        msg.textContent = "Please, enter valid title";
        msg.style.color = "red";
        return false;
    }     
})

form.name.addEventListener('input', (e) =>{

    msg.textContent = "";
    const validator = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
    if (!validator.test(form.name.value)) {
        msg.textContent = "Please, enter valid name & not numbers numbers";
        msg.style.color = "red";
        return false;
    } 

})

form.email.addEventListener('input', (e) =>{
    msg.textContent = "";
    const validator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!validator.test(form.email.value)) {
        msg.textContent = "Please, enter valid email address";
        msg.style.color = "red";
        return false;
    } 
})

form.textarea.addEventListener('input', (e) =>{
    msg.textContent = "";
})

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    if(form.name.value === "" || form.textarea === "" || form.email === ""){
       msg.textContent = "Please, fill all required fields";
       msg.style.color = "red";
        return false;
    }
    

    if(form.name.value.length < 4){
      msg.textContent = "Name must be more than 4 characters";
      msg.style.color = "red";
        return false;
    }

    if(form.textarea.value.length < 20){
       msg.textContent = "Message cannot be less than 20 characters";
       msg.style.color = "red";
        return false;
    }
    
    
    form.title.value = "";
    form.email.value = "";
    form.name.value = "";
    form.textarea.value = "";
    
    msg.textContent = "Thank you for your message. I will reach you shortly";
    msg.style.color = "red";
    alert("Thanks for your message. I will reach you shortly");
    msg.textContent = "";


    toggleModal();
})