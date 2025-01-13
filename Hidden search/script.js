const active = document.querySelector('.active')
const toggle = document.querySelector('.btn')
const search = document.querySelector('.search')

toggle.addEventListener('click', () =>{
    if(search.classList.contains('active')){
        search.classList.remove('active')
}else{
    search.classList.add('active')
}
})