class ApiError extends Error {
  constructor(statusCode, message, stack) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.success = false;

    if (this.stack) {
      this.stack = Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;
