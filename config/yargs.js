const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}


const argv = require('yargs')
    .command('listar', 'Imprime en consola a tabla de multiplicar', opts)
    .command('crear', 'Guarda en txt la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}