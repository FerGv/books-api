// Libraries
import chalk from 'chalk';
import morgan from 'morgan';

export const createMorganTokens = () => {
  morgan.token('method-color', (req) => {
    switch (req.method) {
      case 'GET':
        return chalk.blue(req.method);

      case 'POST':
        return chalk.green(req.method);

      case 'PUT':
        return chalk.yellow(req.method);

      case 'DELETE':
        return chalk.red(req.method);

      default:
        return req.method;
    }
  });

  morgan.token('status-color', (req, res) => {
    const statusCode = res.statusCode.toString();

    if (/^2/.test(statusCode)) {
      return chalk.green(res.statusCode);
    }

    if (/^(4|5)/.test(statusCode)) {
      return chalk.red(res.statusCode);
    }

    return statusCode;
  });
};
