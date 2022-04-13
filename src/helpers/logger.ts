import logger from 'pino';
import dayjs from 'dayjs';

const Logger = logger({
    transport: {
      target: 'pino-pretty'
    },
    base:{
        pid: false
    },
    timestamp: () => 
        `,"time":"${dayjs().format()}"`
    ,
});

export default Logger;