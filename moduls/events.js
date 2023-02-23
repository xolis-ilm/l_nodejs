const Events = require('events');

class Logger extends Events {
    log(a, b) {
        this.emit('log', a + b);
    }
}

const logger = new Logger();

logger.on('log', (data) => {
    console.log(data);
})
logger.log(8, 11)