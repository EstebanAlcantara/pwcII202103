const path = require('path');
module.exports = {
    //Establecer modo
    mode: 'development',
    //1.- Especificando el archivo de entrada
    entry: './client/index.js',
    //2. Especificando la salida
    output: {
        //3. Ruta absoluta de la salida 
        path: path.join(__dirname, 'public'),
        //4. Nombre del archio de salida
        filename: 'js/bundle.js',
        //5. Ruta del path publico para fines de del servidor de desarrollo
        publicPath: '/'
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),    
        port: 8085,
        host: 'localhost'
    }
}