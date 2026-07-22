export class ApiError extends Error {
  constructor(
    message,
    { status = null, code = null, isNetWorkError = false } = {},
  ) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.code = code;
    this.isNetWorkError = isNetWorkError;
  }

  get isNotFound() {
    return this.status === 404;
  }

  get isConflict() {
    return this.status === 409;
  }
}
