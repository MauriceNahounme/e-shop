const pool = require("../config/db");

class Order {
  static async findAll() {
    const result = await pool.query("SELECT * FROM orders ORDER BY created_at DESC");
    return result.rows;
  }

  static async findById(id) {
    const result = await pool.query("SELECT * FROM orders WHERE id = $1", [id]);
    return result.rows[0];
  }

  static async findByUserId(userId) {
    const result = await pool.query("SELECT * FROM orders WHERE user_id = $1 ORDER BY created_at DESC", [userId]);
    return result.rows;
  }

  static async updateStatus(id, status) {
    const result = await pool.query(
      "UPDATE orders SET status = $1, updated_at = NOW() WHERE id = $2 RETURNING *",
      [status, id]
    );
    return result.rows[0];
  }
}

module.exports = Order;
