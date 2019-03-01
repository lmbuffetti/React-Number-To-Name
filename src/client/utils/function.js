export function convertNumber(num) {
    let number = parseFloat(num);
    let res = '';
    if (number > 2000000000000000) {
        return 'NUMBER OUT OF RANGE!';
    }
    if (number < 0) {
        res = 'negative ';
        number = num * -1;
    }
    if (Number.isNaN(number) && num) {
        return 'INSERT A VALID NUMBER!';
    }

    let decimal = 0;

    if (number.toString().indexOf('.') !== -1) {
        if (number.toString().split('.').length > 2) {
            return 'INSERT A VALID NUMBER!';
        }
        if (decimal > 100000) {
            return 'NUMBER OUT OF RANGE!';
        }
        decimal = parseInt(number.toString().split('.')[1], 10);
        number = parseInt(number.toString().split('.')[0], 10);
    }

    const quadrillion = Math.floor(number / (10 ** 15)); /* Quadrillion */
    number -= quadrillion * (10 ** 15);
    const trillion = Math.floor(number / (10 ** 12)); /* trillion */
    number -= trillion * (10 ** 12);
    const billion = Math.floor(number / (10 ** 9)); /* billion */
    number -= billion * (10 ** 9);
    const milion = Math.floor(number / (10 ** 6)); /* milion */
    number -= milion * (10 ** 6);
    const thousand = Math.floor(number / (10 ** 3)); /* thousand */
    number -= thousand * (10 ** 3);
    const hundred = Math.floor(number / 100); /* hundred */
    const numSmall = number % 100;
    const ten = Math.floor(numSmall / 10); /* Ten  */
    const one = Math.floor(numSmall % 10); /* Ones */

    if (quadrillion > 0) {
        res += `${convertNumber(quadrillion)} Quadrillion`;
    }
    if (trillion > 0) {
        res += `${((res === '') ? '' : ' ')} ${convertNumber(trillion)} Trillion`;
    }
    if (billion > 0) {
        res += `${((res === '') ? '' : ' ')} ${convertNumber(billion)} Billion`;
    }
    if (milion > 0) {
        res += `${((res === '') ? '' : ' ')} ${convertNumber(milion)} milion`;
    }
    if (thousand > 0) {
        res += `${((res === '') ? '' : ' ')} ${convertNumber(thousand)} thousand`;
    }
    if (hundred) {
        res += `${((res === '') ? '' : ' ')} ${convertNumber(hundred)} hundred`;
    }


    const ones = [
        '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',
    ];
    const tens = ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if ((ten > 0 || one > 0)) {
        if (!(res === '') && res !== 'negative ') {
            res += ' and ';
        }
        if (ten < 2) {
            res += ones[ten * 10 + one];
        } else {
            res += tens[ten];
            if (one > 0) {
                res += (`-${ones[one]}`);
            }
        }
    }

    if (res === '' && num) {
        res = 'zero';
    }
    if (decimal > 0) {
        return `${res} point ${convertDecimalNumber(decimal)}`;
    }
    return res;
}

function convertDecimalNumber(num) {
    let number = num;
    let res = '';
    const milion = Math.floor(number / 1000000); /* milion */
    number -= milion * 1000000;
    const thousand = Math.floor(number / 1000); /* thousand */
    number -= thousand * 1000;
    const hundred = Math.floor(number / 100); /* Tens */
    const numSmall = number % 100; /* Ones */
    const ten = Math.floor(numSmall / 10);
    const one = Math.floor(numSmall % 10);

    if (milion > 0) {
        res += `${convertDecimalNumber(milion)} Hundred Thousand`;
    }
    if (thousand > 0) {
        res += `${((res === '') ? '' : ' ')} ${convertDecimalNumber(thousand)} Thousand`;
    }
    if (hundred) {
        res += `${((res === '') ? '' : ' ')} ${convertDecimalNumber(hundred)} Hundred`;
    }


    const ones = [
        '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',
    ];
    const tens = ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if ((ten > 0 || one > 0)) {
        if (!(res === '')) {
            res += ' and ';
        }
        if (ten < 2) {
            res += ones[ten * 10 + one];
        } else {
            res += tens[ten];
            if (one > 0) {
                res += (`-${ones[one]}`);
            }
        }
    }

    if (res === '' && num) {
        res = 'zero';
    }
    return res;
}
