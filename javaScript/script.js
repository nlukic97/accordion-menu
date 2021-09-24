document.querySelectorAll('.questions .question-component div .btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
        // closeOpenQuestions()

        let answer = btn.parentElement.parentElement.querySelector('.answer')
        toggleClass(answer,'shown')
    })
})

const closeOpenQuestions = () =>{
    document.querySelectorAll('.answer').forEach(el=>{
        if(el.classList.value.includes('shown')){
            el.classList.remove('shown')
        }
    })
}

//toggle the visibility of the class
const toggleClass = function(element,className){
    element.classList.toggle(className);
}