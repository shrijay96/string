// Immediately Invoked Function Expression (IIEFE)

(function coffe(){
    // namedIIFE

console.log('DB cannected');
})();

(  (name) => {
    console.log(`DB cannected Two ${name}`);

} ) ('shrikuar')
// how to write two iife together

