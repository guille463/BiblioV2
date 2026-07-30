import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config.js";

/**
 * Verifica que la petición lleva una sesión válida.
 * Lee el token de la cookie, lo verifica e inyecta el usuario en req.user.
 * Corta con 401 si no hay token o es inválido.
 */
export const requireAuth = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: "No autenticado" });
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Sesión no válida" });
  }
};

/**
 * Devuelve un middleware que exige un rol concreto.
 * Se apoya en req.user, que requireAuth debe haber rellenado antes.
 * Corta con 403 si el rol no coincide.
 * @param {string} role - Rol requerido ("admin")
 */
export const requireRole = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).json({ error: "No autorizado" });
    }
    next();
  };
};
