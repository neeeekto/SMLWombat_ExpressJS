const winston = require('winston');

require('winston-daily-rotate-file');

const defaultConfig = {
  level: 'debug',
  colorize: true,
  timestamp: true
};

const logger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      colorize: true,
      timestamp: true
    }),

    new winston.transports.DailyRotateFile(
      Object.assign(
        {
          name: 'error-file',
          filename: 'log_',
          dirname: './logs',
          datePattern: 'yyyy-MM-dd.txt'
        },
        defaultConfig
      )
    )
  ]
});

logger.stream = {
  write: function(message, encoding) {
    logger.info(message);
  }
};

module.exports = logger;
