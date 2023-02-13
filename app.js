const bar = document.querySelector('#bar')
const ul = document.querySelector('#ph_nav')

bar.addEventListener('click',()=>{
    // console.log('hello');
    ul.classList.toggle('show')
})