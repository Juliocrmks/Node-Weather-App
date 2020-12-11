// const weatherForm = document.querySelector('form');
// const searchElement = document.querySelector('input');
// const weatherForm = 
const searchElement = $('#input-box')


$('#submit-button').click((e)=>{
    e.preventDefault();
    const location = searchElement.val() ;

    fetch('http://localhost:3000/weather?address='+ location).then((response)=>{
        response.json().then((data) =>{
            if(data.error){
                $('#location').text(data.error);
            }else{
                $('#location').text(data.location);
                $('#forecast').text(data.forecast);
            }
        })
    })
    
})
