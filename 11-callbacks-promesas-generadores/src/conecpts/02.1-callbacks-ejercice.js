export const callbacksEjercible = (element) => {
    const num = [];

    for (let i = 0; i <= 10; i++) {
        getListNumber(i, (numero) => {
            num.push(numero);    
        });
    } 

    //Creamos un elemento HTML tipo <ul></ul>
    const list = document.createElement('ul');

    //Iteramos sobre los numeros y se agrega un elemento <li></li>

    for (let e = 0; e < num; e++) {
        const elementLista = document.createElement('li');
        elementLista.textContent = num[e];
        list.appendChild(elementLista);
    }

    //Agregamos element <ul></ul> al elemento HTML especifico.
    element.appendChild(list);
    
}

/**
 * 
 * @param {*} number 
 * @param {() => void} callback 
 */
const getListNumber = (number, callback) => {
    callback(`The number is: ${number}`);
}