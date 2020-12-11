// const weatherForm = document.querySelector('form');
// const searchElement = document.querySelector('input');
// const weatherForm = 
const searchElement = $('#input-box')
const dict = {
    "113": "../images/sunny.gif",
    "116": "../images/partlyCloudy.gif",
    "119": "../images/partlyCloudy.gif",
    "122": "../images/cloudy.gif",
    "143": "../images/cloudy.gif",
    "248": "../images/cloudy.gif",
    "260": "../images/cloudy.gif",
    "176": "../images/rainy.gif",
    "185": "../images/rainy.gif",
    "263": "../images/rainy.gif",
    "266": "../images/rainy.gif",
    "281": "../images/rainy.gif",
    "284": "../images/rainy.gif",
    "293": "../images/rainy.gif",
    "296": "../images/rainy.gif",
    "299": "../images/rainy.gif",
    "302": "../images/rainy.gif",
    "305": "../images/rainy.gif",
    "308": "../images/rainy.gif",
    "311": "../images/rainy.gif",
    "200": "../images/thunderstorm.gif",
    "179": "../images/snowy.gif",
    "182": "../images/snowy.gif",
    "277": "../images/snowy.gif",

    

}

const getImageSrc= (weatherCode) => {
    $("#forecast-jumbotron").css({"background-image": "url(" + dict[weatherCode] + ")","background-repeat":"repeat","background-position":"center center" })
}
 

$('#submit-button').click((e)=>{
    e.preventDefault();
    const location = searchElement.val() ;

    fetch('/weather?address='+ location).then((response)=>{
        response.json().then((data) =>{
            if(data.error){
                $('#location').text(data.error);
            }else{
                $('#location').text(data.location);
                $('#forecast').text(data.forecast);
                getImageSrc(data.weatherCode)
            }
        })
    })
    
})
