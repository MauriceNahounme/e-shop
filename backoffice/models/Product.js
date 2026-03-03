const pool = require("../config/db");

class Product {
  static async findAll() {
    const result = await pool.query("SELECT * FROM products ORDER BY created_at DESC");
    return result.rows;
  }

  static async findById(id) {
    const result = await pool.query("SELECT * FROM products WHERE id = $1", [id]);
    return result.rows[0];
  }

  static async create(data) {
    const { name, description, price, stock, category, image_url } = data;
    const result = await pool.query(
      "INSERT INTO products (name, description, price, stock, category, image_url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [name, description, price, stock, category, image_url]
    );
    return result.rows[0];
  }

  static async update(id, data) {
    const { name, description, price, stock, category, image_url } = data;
    const result = await pool.query(
      "UPDATE products SET name = $1, description = $2, price = $3, stock = $4, category = $5, image_url = $6, updated_at = NOW() WHERE id = $7 RETURNING *",
      [name, description, price, stock, category, image_url, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    await pool.query("DELETE FROM products WHERE id = $1", [id]);
  }
}

module.exports = Product;
