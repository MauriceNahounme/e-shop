const pool = require("../config/db");

class User {
  static async findAll() {
    const result = await pool.query("SELECT id, email, role, created_at FROM users ORDER BY created_at DESC");
    return result.rows;
  }

  static async findById(id) {
    const result = await pool.query("SELECT id, email, role, created_at FROM users WHERE id = $1", [id]);
    return result.rows[0];
  }

  static async findByEmail(email) {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    return result.rows[0];
  }

  static async create(data) {
    const { email, password, role } = data;
    const result = await pool.query(
      "INSERT INTO users (email, password, role) VALUES ($1, $2, $3) RETURNING id, email, role, created_at",
      [email, password, role || "user"]
    );
    return result.rows[0];
  }

  static async updateRole(id, role) {
    const result = await pool.query(
      "UPDATE users SET role = $1 WHERE id = $2 RETURNING id, email, role, created_at",
      [role, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    await pool.query("DELETE FROM users WHERE id = $1", [id]);
  }
}

module.exports = User;
