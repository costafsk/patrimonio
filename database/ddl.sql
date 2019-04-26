-- [DROPS]
-- drop table user;
-- drop table attendment;
-- drop table place; 

-- Enabling Foreign keys Use;
PRAGMA foreign_keys = ON;

CREATE TABLE "user"(
    "name" VARCHAR(40) PRIMARY KEY,
    "password" VARCHAR(200) NOT NULL,
    "type" VARCHAR(6)  NOT NULL,
    CONSTRAINT "UserType" CHECK("type"="adm" or "type"="common")
);

CREATE TABLE "place"(
    "name" VARCHAR(100) PRIMARY KEY,
);

-- User Table + Place Table,  {Relationship}
CREATE TABLE "attendment"(
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "username" VARCHAR(40) NOT NULL,
    "place" VARCHAR(100) NOT NULL,
    "description" VARCHAR(300),
    "timestamp" DATATIME DEFAULT CURRENT_TIMESTAMP,
    "resolution" VARCHAR(300),
    "status" VARCHAR(1) NOT NULL,
    CONSTRAINT "attendmentState" CHECK("status"="r" or "status"="e"),
    CONSTRAINT "attendmentUserPK" FOREIGN KEY("username") 
        REFERENCES "user"("name"),
    CONSTRAINT "attendmentPlacePK" FOREIGN KEY("place") 
        REFERENCES "place"("name")
);


CREATE TRIGGER check_patrimony BEFORE INSERT ON "machine"
BEGIN
SELECT CASE
WHEN NEW.patrimony == printer.patrimony
or NEW.patrimony == monitor.patrimony
or NEW.patrimony == networkPeripherics.patrimony 
THEN RAISE(ABORT, 'Patrimony exists');

-- TESTING TRIGGER >>

CREATE TRIGGER cobaia BEFORE INSERT ON "testeOne"
BEGIN
SELECT CASE 
WHEN EXISTS(SELECT  * FROM testeTwo where pat = new.pat)
THEN RAISE(ABORT, 'NAOROLA')
END;
END;


CREATE TABLE "machine"(
    "patrimony" VARCHAR(6) PRIMARY KEY,
    "name"
);