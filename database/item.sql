BEGIN;

SET client_encoding = 'LATIN1';

CREATE SEQUENCE item_seq START 1;
ALTER SEQUENCE item_seq INCREMENT BY 50;
CREATE TABLE item (
                      id integer DEFAULT nextval('item_seq') PRIMARY KEY,
                      title text NOT NULL,
                      body text NOT NULL
);

INSERT INTO item (title, body) VALUES ('ITEM 1', 'DESCRIPTION1');
INSERT INTO item (title, body) VALUES ('ITEM 2', 'DESCRIPTION2');

COMMIT;