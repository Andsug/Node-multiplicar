// requieres
const colors = require('colors');

const fs = require('fs');

let listarTabla = (base, limite = 10) => {

    console.log('================'.green);
    console.log(`Tabla de ${base}`.green);
    console.log('================'.green);
    for (i = 0; i < limite; i++) {
        solu = base * i;
        console.log(`${ base } x ${ i } = ${ solu }`)
    }
}
let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        let data = '';
        for (i = 0; i < limite; i++) {
            solu = base * i;
            data += `${ base } x ${ i } = ${ solu }\n`;
        }

        fs.writeFile(`tabla-${ base }-hasta-${ limite }.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${ base}-hasta-${ limite }.txt`.bgBlue);
        });

    });
};


module.exports = {
    crearArchivo,
    listarTabla
}