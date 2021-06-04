// importando a winston
import winston, {format} from 'winston';
import appRoot from 'app-root-path';
// componentes para crear formato personalizado
const { combine, timestamp, printf, uncolorize, json, colorize } = format;
// creando perfil de colores para el log
const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'greem',
    http: 'magenta',
    debug 'greem',
};
// agregando perfil a winston
winston.addColors(colors);

// formato parqa consola
const myFormat = combine(
    colorize({all: true}),
    timestamp(),
    printf((info)=> `${info.timestamp} ${info.level}: ${info.message}`)
);

// formato para la salida  de los archivos log
const myFileFormat = combine(
    uncolorize({all: true}),
    timestamp(),
    json()
);

// creando objetos de configuracion 
const options = {
    infoFile: {
        level: 'info',
        filename: `${appRoot}/server/logs/infos.log`, 
        maxsize: 5242880,
        maxFiles: 5,
        format: myFileFormat  
    }, 
    warnFile: {
        level: 'warn',
        filename: `${appRoot}/server/logs/warns.log`, 
        maxsize: 5242880,
        maxFiles: 5,
        format: myFileFormat  
    }, 
    errorFile: {
        level: 'error',
        filename: `${appRoot}/server/logs/errors.log`, 
        maxsize: 5242880,
        maxFiles: 5,
        format: myFileFormat  
    }, 
    console: {
        level: 'debug',
        handleExceptions: true,
        format: myFormat,
    }
};  


const logger = winston.createLogger({
    transports: [
        new winston.transports.File(options.infoFile),
        new winston.transports.File(options.warnFile),
        new winston.transports.File(options.errorFile),
        new winston.transports.console(options.console),
    ],
    exitOnError: false, 
});

logger.stream = {
    write(message){
        logger.info(message);
    },
};

export default logger;

