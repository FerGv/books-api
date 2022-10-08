/* eslint-disable no-console */
// Libraries
import chalk from 'chalk';

export const log = (text: string, { separator = '-', color = chalk.blue } = {}) => {
  const divider = Array(text.length).fill(separator).join('');
  console.log(color(divider));
  console.log(color(text));
  console.log(color(divider));
};
