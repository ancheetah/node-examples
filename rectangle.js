module.exports = (x, y, callback) => {
    if (x <= 0 || y <= 0) {
        callback(new Error(`Rectangle dimensions must be greater than zero. Received: ${x}, ${y}`));
    } else {
        setTimeout(() =>
            callback(null, { // using null in first parameter means there's no error
                perimeter: () => 2 * (x + y),
                area: () => x * y
            }),
            2000
        );
    }
};
