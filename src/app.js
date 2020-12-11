const path = require('path')
const express = require('express')
const hbs = require('hbs')
const { send } = require('process')
//const forecast = require('../../weather-app/utils/forecast')
const app = express()
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


const directoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

const port = process.env.PORT || 3000

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(directoryPath))


app.get('', (req, res) => {
    res.render('index', {
        'title': 'Weather App',
        'name':'Julio  Ruiz'

    })

})


app.get('/about', (req, res) => {
    res.render('about', {
        'title': 'About ',
        'name': 'Julio  Ruiz'
    })
})



app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error:'You must provide an address'
        })
    }
    geocode(req.query.address,(error,{lat,long,location} = {})=>{
        if(error){
            return res.send({error});
        }
        forecast(lat,long,(error,forecastData)=>{
            if(error){
                return res.send({error});
            }
            return res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})

app.get('/help', (req, res) => {
    res.render('help',{
        'title': 'Help',
        'helptext':'This is a help site for the weather app',
        'name': 'Julio Ruiz'
    })
})

app.get('/products',(req,res) =>{
    if(!req.query.search){
        return res.send({
            error:'You must provide a search term'
        })
    }

    console.log(req.query)
    res.send({
        products:[]
    })
})



app.get('/help/*', (req,res)=>{
    res.render('404',{
        'title':'404',
        'errorMessage':'Help article not found',
        'name': 'Julio Ruiz'
    })
})

app.get('*',(req,res) => {
    res.render('404',{
        'title':'Help 404',
        'errorMessage':'Page not Found'
    })

})


app.listen(port, () => {
    console.log('Server is up on port ' + port)

})
