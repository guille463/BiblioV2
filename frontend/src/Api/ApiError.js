/**
 * Error normalizado de la capa HTTP. Todas las rechazos de axiosClient
 * son instancias de esta clase, salvo las cancelaciones (CanceledError).
 *
 * @property {string} name - Siempre "ApiError".
 * @property {number|null} status - Código HTTP; null si no hubo respuesta.
 * @property {string|null} code - Código de dominio del backend, si lo hay.
 * @property {boolean} isNetworkError - true si la petición salió pero no hubo respuesta.
 */
export class ApiError extends Error {
  /**
   * @param {string} message
   * @param {Object} [options]
   * @param {number|null} [options.status]
   * @param {string|null} [options.code]
   * @param {boolean} [options.isNetworkError]
   */
  constructor(
    message,
    { status = null, code = null, isNetworkError = false } = {},
  ) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.code = code;
    this.isNetworkError = isNetworkError;
  }

  /** @returns {boolean} */
  get isNotFound() {
    return this.status === 404;
  }

  /** @returns {boolean} */
  get isConflict() {
    return this.status === 409;
  }
}
