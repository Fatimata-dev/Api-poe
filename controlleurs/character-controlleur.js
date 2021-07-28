const db = require('../models');
const Character = db.Character;

class CharacterControlleur {
    getAll = async (req,res) =>{
        const data = await Character.findAll();
        res.json(data);
    }

    getOne = () =>{}

    create = () =>{}

    update = () =>{}

    dalete = () =>{}
}
module.exports = new CharacterControlleur();