class ErrHandle extends Error {
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode || 500;
        this.message = message || 'An error occurred';
    }
}

module.exports = ErrHandle;