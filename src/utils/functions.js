// Delay the execution of a function by a specified amount of time
export function throttle(func, delay = 300) {
    if (typeof func !== 'function') {
        console.error('The first argument of throttle() must be a function');
        return;
    }

    let timeoutFlag;

    return function (...args) {
        clearTimeout(timeoutFlag);
        timeoutFlag = setTimeout(function () {
            func(...args);
        }, delay);
    };
}
