import * as authService from "../services/auth.service.js";

/**
 * @param {import('express').Request} req - req.body: { email, password }
 * @param {import('express').Response} res
 * @returns {Promise<void>} 201 con usuario | 400 datos inválidos | 409 email en uso | 500
 */

const PASSWORD_LENGHT = 8;

export const register = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email y contraseña obligatorios" });
  }
  if (password.length < PASSWORD_LENGHT) {
    return res
      .status(400)
      .json({ error: "La contraseña debe tener al menos 8 caracteres" });
  }

  try {
    const user = await authService.registerUser({ email, password });
    res.status(201).json(user);
  } catch (err) {
    if (err.code === "EMAIL_TAKEN") {
      return res.status(409).json({ error: "El email ya está registrado" });
    }
    console.error(err);
    res.status(500).json({ error: "Error interno" });
  }
};
