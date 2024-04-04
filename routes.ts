/**
 * Массив путей, используемых для аутентификации
 * Эти пути перенаправят пользователя на главную страницу "/"
 * @type {string}
 */
export const authRoute = "/login";

/**
 * Префикс для API
 * Используются только для API целей
 * @type {string}
 */
export const apiAuthPrefix = "/auth/steam";

/**
 * Дефолтный путь после успешной авторизации
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/";
