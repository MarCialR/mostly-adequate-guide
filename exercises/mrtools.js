const fs = require('fs');

const dir = dir => fs.readdir(dir, (err, files) => {
   files.forEach(file => {
     console.log(file);
   });
})

const dirSync = dir => fs.readdirSync(testFolder).forEach(file => {
  console.log(file);
})


const cat = file => fs.readFile(file, function(err,buf){ process.stdout.write(buf); });

module.exports = {
  dir: dir,
  dirSync: dirSync, // should not be used
  cat: cat
};




// curry :: ((a, b, ...) -> c) -> a -> b -> ... -> c
const curry = (fn) => {
  const arity = fn.length;

  return function $curry(...args) {
    if (args.length < arity) {
      return $curry.bind(null, ...args);
    }

    return fn.call(null, ...args);
  };
};

// compose :: ((a -> b), (b -> c),  ..., (y -> z)) -> a -> z
const compose = (...fns) => (...args) => fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];

// reduce :: (b -> a -> b) -> b -> [a] -> b
const reduce = curry((fn, zero, xs) => xs.reduce(fn, zero));



const toUpperCase = x => x.toUpperCase();
const exclaim = x => `${x} exclaim!`;
const shout = compose(exclaim, toUpperCase);

shout('send in the clowns'); // "SEND IN THE CLOWNS!"

const shout2 = compose(toUpperCase, exclaim);

shout2('send in the clowns'); // "SEND IN THE CLOWNS!"




const head = x => x[0];
const reverse = reduce((acc, x) => [x].concat(acc), []);
const last = compose(head, reverse);

last(['jumpkick', 'roundhouse', 'uppercut']); // 'uppercut'