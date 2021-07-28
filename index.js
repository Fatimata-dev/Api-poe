const expres = require("express");
const Characters = require('./models/character')

const app = expres();
const port = 3000;
const CharacterControlleur = require('./controlleurs/character-controlleur')
app.get('/', (req, res)=> res.json({message : 'Bonjour le jour'}));

app.get('Characters',(req,res)=>{
    res.json(Characters.findAll())
})
app.get('/characters',  CharacterControlleur.getAll)
app.listen(port, ()  => {
    console.log('Server is running on port ', port);
})