// Libraries
import chalk from 'chalk';

export const log = (text, { separator = '-', color = chalk.blue } = {}) => {
  const divider = Array(text.length).fill(separator).join('');
  console.log(color(divider));
  console.log(color(text));
  console.log(color(divider));
};
