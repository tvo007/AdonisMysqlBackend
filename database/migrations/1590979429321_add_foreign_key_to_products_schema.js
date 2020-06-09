'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use ('Schema');

class AddForeignKeyToProductsSchema extends Schema {
  up () {
    this.raw(
      `ALTER TABLE products
      ADD CONSTRAINT fk_brand_id_products
      FOREIGN KEY (brand_id) REFERENCES brands(id)
      `)

    this.raw(
      `ALTER TABLE products
      ADD CONSTRAINT fk_user_id_products
      FOREIGN KEY (user_id) REFERENCES users(id)
      `)

  }

  down () {
    this.raw(`
      ALTER TABLE products
      DROP FOREIGN KEY fk_brand_id_products
      `)

    this.raw(`
      ALTER TABLE products
      DROP FOREIGN KEY fk_user_id_products
      `)
  }
}

module.exports = AddForeignKeyToProductsSchema;


/**
 * class AddForeignKeyToProductsSchema extends Schema {
  up () {
    this.raw (
      `ALTER TABLE products
      ADD CONSTRAINT brand_id 
      FOREIGN KEY (brand_id) REFERENCES brands(id),
      ADD CONSTRAINT user_id 
      FOREIGN KEY (user_id) REFERENCES users(id),
      `
    );
  }

  down () {
    this.raw (`
      ALTER TABLE products
      DROP FOREIGN KEY brand_id
      `);
    this.raw (`
      ALTER TABLE products
      DROP FOREIGN KEY user_id
      `);
  }
}
 * 
 * 
 * 
 */
