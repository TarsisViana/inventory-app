#! /usr/bin/env node
import "dotenv/config";
import pg from "pg";
const { Client } = pg;
import itemString from "./inventory.js";

const SQL = `
CREATE TABLE IF NOT EXISTS categories (
  categoryId  INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  category VARCHAR (500)
);

INSERT INTO categories (category)
VALUES ('men''s clothing'),
       ('jewelery'),
       ('electronics'),
       ('women''s clothing');

CREATE TABLE IF NOT EXISTS inventory (
  itemID INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title VARCHAR ( 500 ),
  price FLOAT,
  description TEXT,
  image VARCHAR(500),
  category INTEGER,
  rating_rate FLOAT,
  rating_count INTEGER,
  FOREIGN KEY (category) REFERENCES categories (categoryId)
);

INSERT INTO inventory (name, price, description, img, category, rating_rate, rating_count)
VALUES 
  ${itemString}
;
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.USER}:${process.env.USER_PASSWORD}@${process.env.HOST}:${process.env.DEFAULT_PORT}/${process.env.DATABASE}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
