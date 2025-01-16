function add(a, b) {
    return a + b;
  }

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
    let stringArray = string.split('');
    stringArray.reverse();
    return stringArray.join('');

}

export const calculator = {
    add: function(a, b){
        return a + b;
    },

    subtract: function(a, b){
        return a - b;
    },

    multiply: function(a, b){
        return a * b;
    },

    divide: function(a, b){
        return a / b;
    },
}

function caesarCipher(string, shifter){
    let caesarArray = string.split('');
    let caesarCipherArray = []
    
    for(let i = 0; i < caesarArray.length; i++){
       let charCode = caesarArray[i].charCodeAt(0)
       
        if (charCode < 65 || (charCode > 90 && charCode < 97) || charCode > 122) {
            caesarCipherArray.push(caesarArray[i])
        }

    if (charCode >= 97 && charCode <= 122) { // handles lowercase
        charCode += shifter 
         
        if(charCode > 122){
                charCode = 97 + (charCode - 123)
        }   else if (charCode < 97) {
                charCode = 122 - (97 - charCode - 1)
        }

        caesarCipherArray.push(String.fromCharCode(charCode));

    } else if (charCode >= 65 && charCode <= 90) { // handles uppercase
        charCode += shifter;

        if (charCode > 90) {
            charCode = 65 + (charCode - 91); 
        } else if (charCode < 65) {
            charCode = 90 - (65 - charCode - 1); 
        }

        caesarCipherArray.push(String.fromCharCode(charCode));
    }
    
    }
       

    return caesarCipherArray.join('')
}

    function analyzeArray(array){
        let sum = 0;

        for(let i = 0; i < array.length; i++) {
            sum += array[i];
        }

        let average = sum / array.length;
        let length = array.length
        const minValue = Math.min(...array)
        const maxValue = Math.max(...array)

       let result = {
            average: average,
            min: minValue,
            max: maxValue,
            length: length,
        }

        return result

    }



  export {add, capitalize, reverseString, caesarCipher, analyzeArray};