module.exports = function toReadable (number) {
    if (number >= 0 && number <=9) {
        return digits(number);
    } else if ((number >=10 && number <=20) || number === 30 || number === 40 || number === 50 || number === 60 || number === 70 || number === 80 || number === 90) {
        return tens(number);
    } else if (number > 20 && number < 100) {
        return tens(number) + ' ' + digits(number % 10); 
    } else {
        return hundreds(number);
    }
    
    function digits(n) {
        switch (n) {
            case 0: return 'zero';
            break;  
            case 1: return 'one';
            break;
            case 2: return 'two';
            break;
            case 3: return 'three';
            break;
            case 4: return 'four';
            break;
            case 5: return 'five';
            break;
            case 6: return 'six';
            break;
            case 7: return 'seven';
            break;
            case 8: return 'eight';
            break;
            case 9: return 'nine';
            break;
        }
    }
    
    function tens(number) {
            if (number === 10) {
                return 'ten';
            } else if (number === 11) {
                return 'eleven';
            } else if (number === 12) {
                return 'twelve';
            } else if (number === 13) {
                return 'thirteen';
            } else if (number === 14) {
                return 'fourteen';
            } else if (number === 15) {
                return 'fifteen';
            } else if (number === 16) {
                return 'sixteen';
            } else if (number === 17) {
                return 'seventeen';
            } else if (number === 18) {
                return 'eighteen';
            } else if (number === 19) {
                return 'nineteen';
            } else if (number >= 20 && number < 30) {
                return 'twenty';
            } else if (number >= 30 && number < 40) {
                return 'thirty';
            } else if (number >= 40 && number < 50) {
                return 'forty';
            } else if (number >= 50 && number < 60) {
                return 'fifty';
            } else if (number >= 60 && number < 70) {
                return 'sixty';
            } else if (number >= 70 && number < 80) {
                return 'seventy';
            } else if (number >= 80 && number < 90) {
                return 'eighty';
            } else if (number >= 90 && number < 100) {
                return 'ninety';
            }
        }
        
    function hundreds(number) {
        if (number % 100 === 0) {
            return digits(Math.floor(number / 100)) + ' hundred';
        } else if (number % 10 === 0 || ((number % 100) >=10 && (number % 100) <=19)){
            return digits(Math.floor(number / 100)) + ' hundred ' + tens(number % 100);
        } else if ((number - Math.floor(number / 100) * 100 - number % 10) === 0 ) {
            return digits(Math.floor(number / 100)) + ' hundred ' + digits(number % 10);
        } else {
            return digits(Math.floor(number / 100)) + ' hundred ' + tens(number % 100) + ' ' + digits(number % 10);
        }
    }   
}