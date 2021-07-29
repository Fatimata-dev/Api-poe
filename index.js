const expres = require("express");
const Characters = require('./models/character')

const app = expres();
const port = 3000;
const CharacterControlleur = require('./controlleurs/character-controlleur');
app.use(expres.json());
app.get('/', (req, res)=> res.json({message : 'Bonjour le jour'}));

app.get('Character',(req,res)=>{
    res.json(Characters.findAll())
})

app.get('/character',  CharacterControlleur.getAll)
app.get('/character/:id',  CharacterControlleur.getOne)
app.post('/character',  CharacterControlleur.create)
app.listen(port, ()  => {
    console.log('Server is running on port ', port);
})