
const weatherForm = document.querySelector('form')
const search =document.querySelector('input')
const messageOne = document.querySelector('#messageOne')
const messageTwo = document.querySelector('#messageTwo')


weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location =search.value
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    //fetching from url produced be heroku or local(http://localhost:3000)
    fetch("/weather?query&address=" + location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
           messageOne.textContent = data.error
        } else{
        messageOne.textContent = data.location
        messageTwo.textContent = data.forecast
        }
    })

})
})