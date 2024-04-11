--
-- PostgreSQL port of the MySQL "World" database.
--
-- The sample data used in the world database is Copyright Statistics 
-- Finland, http://www.stat.fi/worldinfigures.
--

BEGIN;

SET client_encoding = 'LATIN1';

CREATE TABLE item (
    id integer NOT NULL,
    title text NOT NULL,
    body text NOT NULL
);
 
INSERT INTO item(id,title,body) VALUES(1,'ITEM 1','DESCRIPTION1');
INSERT INTO item(id,title,body) VALUES(2,'ITEM 2','DESCRIPTION2');

ALTER TABLE ONLY item
    ADD CONSTRAINT id_ikey PRIMARY KEY (id);
 

COMMIT;
 

