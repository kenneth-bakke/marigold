CREATE TABLE recipe(
  id integer NOT NULL,
  title varchar(255),
  subtitle varchar(255),
  yield_amount integer,
  yield_type varchar(128),
  ingredients text[],
  method text,
  PRIMARY KEY(id)
);

CREATE INDEX recipe_ix_1 ON recipe(id);

CREATE TABLE ingredients(
  id integer NOT NULL,
  ingredient_name varchar(255),
  quantity float8,
  uom varchar(32),
  PRIMARY KEY(id)
);

CREATE INDEX ingredients_ix_1 ON ingredients(id);

CREATE TABLE tags(id integer NOT NULL, tag_text varchar(64), PRIMARY KEY(id));

CREATE INDEX tags_ix_1 ON tags(id);

CREATE TABLE recipe_tags(
  id integer NOT NULL,
  recipe_id integer NOT NULL,
  tags_id integer NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE recipe_ingredients(
  id integer NOT NULL,
  recipe_id integer NOT NULL,
  ingredients_id integer NOT NULL,
  PRIMARY KEY(id)
);
