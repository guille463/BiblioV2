import * as authService from "../services/auth.service.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config.js";

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

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email y contraseña obligatorios" });
  }

  try {
    const user = await authService.loginUser({ email, password });

    const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      secure: false,
      maxAge: 60 * 60 * 1000,
    });

    res.status(200).json(user);
  } catch (err) {
    if (err.code === "INVALID_CREDENTIALS") {
      return res.status(401).json({ error: "Credenciales incorrectas" });
    }
    console.error(err);
    res.status(500).json({ error: "Error interno" });
  }
};

export const me = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: "No autenticado" });
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    res.status(200).json({ userId: payload.userId, role: payload.role });
  } catch (err) {
    res.status(401).json({ error: "Sesión no válida" });
  }
};

export const logout = async (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "strict",
    secure: false,
  });
  res.status(200).json({ message: "Sesión cerrada" });
};
