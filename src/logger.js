/* eslint no-console: "off" */

const defaultLogger = {
  hit: () => {
    console.log(`Hit scroll threshold`);
  },
  binded: () => {
    console.log(`Binded event handlers`);
  },
  unbinded: () => {
    console.log(`Unbinded event handlers`);
  },
  // scrolled: () => {
  //   console.log('Scrolled');
  // },
  // resized: () => {
  //   console.log('Resized');
  // },
  next: (event) => {
    console.log(`Next page triggered [pageIndex=${event.pageIndex}]`);
  },
  load: (event) => {
    console.log(`Start loading ${event.url}`);
  },
  loaded: () => {
    console.log(`Finished loading`);
  },
  append: () => {
    console.log(`Start appending new items`);
  },
  appended: (event) => {
    console.log(`Finished appending new ${event.items.length} item(s)`);
  },
  last: () => {
    console.log(`No more pages left to load`);
  }
};

function expand(options) {
  if (options === true) {
    options = defaultLogger
  }

  return options;
}

export default class Logger {
  constructor(ias, options) {
    // no logger wanted
    if (options === false) {
      return;
    }

    let logger = expand(options);

    Object.keys(logger).forEach((key) => {
      ias.on(key, logger[key]);
    });
  }
}
