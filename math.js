'use strict';

exports.isStar = true;
function typeChecking(c, d) {
    var ans = 0;
    if ((typeof d) === 'string') {
        var d1 = Number(d);
        ans = c + d1;
    } else {
        ans = c + d;
    }

    return ans;
}
exports.sum = function (a, b) {
    // Реализуйте сложение в этой функции
    var answer = 0;
    if ((typeof a) === 'string') {
        var a1 = Number(a);
        answer = typeChecking(a1, b);
    } else {
        answer = typeChecking(a, b);
    }
    if (arguments.length > 2) {
        answer = typeChecking(answer, arguments[2]);
    }

    return answer;
};
