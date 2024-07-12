export function throttle(func, delay = 1000) {
    if (typeof func !== 'function') {
        console.error('The first argument of throttle() must be a function');
        return;
    }

    let timeoutFlag;

    return function (...args) {
        if (!timeoutFlag) {
            func(...args);
            timeoutFlag = setTimeout(function () {
                timeoutFlag = false;
            }, delay);
        }
    }
}
