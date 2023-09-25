import { heroes } from "../data/heroes"


//Callbacks es un metodo que se llama dentro de otro metodo
export const callbackComponent = (element) => {

    const id = '5d86371f1efebc31def272e2';

    findHero(id, (error, heroes) => {
        //element.innerHTML = heroes?.name || '';

        if (error) {
            element.innerHTML = error;
            return;
        }
        element.innerHTML = heroes?.name || '';
    });

}

/**
 * 
 * @param {String} id 
 * @param {(error: String | null, heroes: Object)=>void} callback 
 */
const findHero = (id, callback) => {


    const heroe = heroes.find(heroe => heroe.id === id);

    if (!heroe) {
        callback(`Hero with id ${id} not found`);
        return; //undefined
    }

    callback(null, heroe);

}