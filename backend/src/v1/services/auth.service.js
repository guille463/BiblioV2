import * as userDatabase from "../database/user.database.js";
import argon2 from "argon2";

/**
 * Registra un usuario nuevo.
 * @param {{email: string, password: string}} data
 * @returns {Promise<Object>} Usuario creado sin hash
 * @throws {{code: "EMAIL_TAKEN"}} si el email ya existe
 */

export const registerUser = async ({ email, password }) => {
  const passwordHash = await argon2.hash(password);

  try {
    return await userDatabase.insertUser({ email, passwordHash });
  } catch (err) {
    if (err.code === "23505") {
      throw { code: "EMAIL_TAKEN" };
    }
    throw err;
  }
};
