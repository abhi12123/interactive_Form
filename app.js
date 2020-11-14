animatedForm = () => {
    const arrows= document.querySelectorAll(".fa-arrow-down");
    arrows.forEach(arrow =>{
        arrow.addEventListener('click',()=>{
            const input=arrow.previousElementSibling;
            const parent=arrow.parentElement;
            const nextForm=parent.nextElementSibling;

            if(input.type === 'text' && validateUser(input)){
                nextSlide(parent,nextForm);
            }else if(input.type === 'email' && validateEmail(input)){
                nextSlide(parent,nextForm);
            }else if(input.type === 'password' && validateUser(input)){
                nextSlide(parent,nextForm);
            }else{
                parent.style.animation = "shake 0.5s ease"
            }
            parent.addEventListener('animationend', ()=>{
                parent.style.animation = "";
            })
        });
    });
}
validateUser = (user) =>{
    if(user.value.length<6){
        document.body.style.backgroundColor='red';
    }else{
        document.body.style.backgroundColor='darkgreen';
        return true;
    }
}
validateEmail = (email) =>{
    const validation = 
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(validation.test(email.value)){
        document.body.style.backgroundColor='darkgreen';
        return true;
    }else{
        document.body.style.backgroundColor='red';
    }
}
nextSlide = (parent, nextForm) =>{
    parent.classList.add('inactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}

animatedForm();

