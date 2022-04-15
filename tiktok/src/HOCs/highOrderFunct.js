const log = (n) => {
    console.log('logged', n, 'times')
};

const withLogger = (fn) => {
    let n = 1;
    return function() {
        return fn(n++);
    }
}
const runWithLogger = withLogger(log)
runWithLogger()
runWithLogger()
runWithLogger()