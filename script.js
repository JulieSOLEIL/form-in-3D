const signInBtn = document.querySelector('.signInBtn');
const signUpBtn = document.querySelector('.signUpBtn');
const formsWrapper = document.querySelector('.formsWrapper');

signUpBtn.addEventListener('click',(e) =>{
    e.preventDefault();
    formsWrapper.classList.add("change");
});
signInBtn.addEventListener('click',(e) =>{
    e.preventDefault();
    formsWrapper.classList.remove("change");
});