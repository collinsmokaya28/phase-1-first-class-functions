//function receivesAFunction (callback) {
 //   callback();
//}

//function returnsANamedFunction () {
    //returnsANamedFunction();

//}

const spy = chai.spy()
function receivesAFunction (spy) {
    spy();
}

function returnsANamedFunction () {
    const game = (a, b) => a + b;
    return game;
}

function returnsAnAnonymousFunction () {
    return () => "I";
}