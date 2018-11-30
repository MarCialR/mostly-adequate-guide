mt = require('mrtools.js')

.load exercises/support.js
.load require.js

// replace :: RegExp -> String -> String -> String
const replace = curry((re, rpl, str) => str.replace(re, rpl));


.load /exercises/support.js


.load /require.js




.load support.js

class Container {
  constructor(x) {
    this.$value = x;
  }

  static of(x) {
    return new Container(x);
  }
}

// (a -> b) -> Container a -> Container b
Container.prototype.map = function (f) {
  return Container.of(f(this.$value));
};


const shady_address = { street: 'Shady Ln.', number: 4201 };



const streetName = compose(map(prop('street')), safeHead, prop('addresses'));
const streetNameNoMap = compose(prop('street'), safeHead, prop('addresses'));

streetName({ addresses: [shady_address] });
streetNameNoMap({ addresses: [shady_address] });



const street = compose(map(prop('street')));
const streetNoMap = compose(prop('street'));

street({ addresses: [shady_address] });
streetNoMap({ addresses: [shady_address] });



undefined
> streetName({ addresses: [] });
undefined
> 
undefined

undefined
> streetName2({ addresses: [{ street: 'Shady Ln.', number: 4201 }] });
Just('Shady Ln.')
> streetName2({ addresses: [] });
Nothing
> a={ street: 'Shady Ln.', number: 4201 }
