-- [DROPS]
-- drop table user;
-- drop table attendment;
-- drop table place;

-- Enabling Foreign keys Use;
PRAGMA foreign_keys = ON;

CREATE TABLE "user"(
    "username" VARCHAR(40) PRIMARY KEY,
    "password" VARCHAR(200) NOT NULL,
    "type" VARCHAR(6)  NOT NULL,
    CONSTRAINT "UserType" CHECK("type"="adm" or "type"="common")
);

CREATE TABLE "place"(
    "name" VARCHAR(100) PRIMARY KEY
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
        REFERENCES "user"("username"),
    CONSTRAINT "attendmentPlacePK" FOREIGN KEY("place") 
        REFERENCES "place"("name")
);

CREATE TABLE "machine"(
    "patrimony" VARCHAR(6) PRIMARY KEY,
    "name" VARCHAR(30) NOT NULL,
    "processor" VARCHAR(40) NOT NULL,
    "os" VARCHAR(30) NOT NULL,
    "winKey" VARCHAR(50) NOT NULL UNIQUE,
    "officeKey" VARCHAR(50) NOT NULL,
    "ram" VARCHAR(3) NOT NULL,
    "status" VARCHAR(1) NOT NULL,
    "obs" VARCHAR(300) NOT NULL,
    "type" VARCHAR(30) NOT NULL,
    "place" VARCHAR(100) NOT NULL,
    CONSTRAINT "machineState" CHECK("status"="a" or "status"="m"),
    CONSTRAINT "machinePlacePK" FOREIGN KEY("place")
        REFERENCES "place"("name")
);

CREATE TABLE "printer"(
    "patrimony" VARCHAR(6) PRIMARY KEY,
    "name" VARCHAR(30) NOT NULL,
    "brand" VARCHAR(20) NOT NULL,
    "model" VARCHAR(15) NOT NULL,
    "obs" VARCHAR(300) NOT NULL,
    "supply" VARCHAR(100) NOT NULL,
    "place" VARCHAR(100) NOT NULL,
    CONSTRAINT "printerPlaceFK" FOREIGN KEY("place")
        REFERENCES "place"("name")
);

CREATE TABLE "monitor"(
    "patrimony" VARCHAR(6) PRIMARY KEY,
    "name" VARCHAR(30) NOT NULL,
    "brand" VARCHAR(20) NOT NULL,
    "model" VARCHAR(15) NOT NULL,
    "obs" VARCHAR(300) NOT NULL,
    "powerSupply" VARCHAR(30) NOT NULL,
    "size" VARCHAR(10) NOT NULL,
    "status" VARCHAR(1) NOT NULL,
    "place" VARCHAR(100) NOT NULL,

    CONSTRAINT "monitorCheck" CHECK("status"="a" or "status"="m"),
    CONSTRAINT "monitorPlaceFK" FOREIGN KEY("place")
        REFERENCES "place"("name")
);

CREATE TABLE "networkPeripheral"(
    "patrimony" VARCHAR(6) PRIMARY KEY,
    "name" VARCHAR(30) NOT NULL,
    "description" VARCHAR(300) NOT NULL,
    "status" VARCHAR(1) NOT NULL,
    "obs" VARCHAR(300),
    "brand" VARCHAR(20) NOT NULL,
    "place" VARCHAR(100) NOT NULL,
    CONSTRAINT "networkPeripheralCheck" CHECK("status"="a" or "status"="m"),
    CONSTRAINT "networkPeripheralPlacePK" FOREIGN KEY("place")
        REFERENCES "place"("name")
);

-- IF EXISTS PATRIMONY EQUALS IN MACHINE, MONITOR OR PRINTER [INSERT ON PRINTER]
CREATE TRIGGER patrimonyPrinter BEFORE INSERT ON "printer"
BEGIN
    SELECT CASE
    WHEN EXISTS(SELECT * FROM "printer","machine","monitor","networkPeripheral"
    WHERE printer."patrimony"=new.patrimony
    OR machine."patrimony"=new.patrimony
    OR monitor."patrimony"=new.patrimony
    OR networkPeripheral."patrimony"=new.patrimony)
    THEN RAISE(ABORT, 'Erro: Este Patrimonio esta cadastrado')
END;
END;

-- IF EXISTS PATRIMONY EQUALS IN MACHINE, MONITOR OR PRINTER [INSERT ON MACHINE]
CREATE TRIGGER patrimonyMachine BEFORE INSERT ON "machine"
BEGIN
    SELECT CASE
    WHEN EXISTS(SELECT * FROM "printer","machine","monitor","networkPeripheral" 
    WHERE printer."patrimony"=new.patrimony
    OR machine."patrimony"=new.patrimony
    OR monitor."patrimony"=new.patrimony
    OR networkPeripheral."patrimony"=new.patrimony))
    THEN RAISE(ABORT, 'Erro: Este Patrimonio esta cadastrado')
END;
END;

-- IF EXISTS PATRIMONY EQUALS IN MACHINE, MONITOR OR PRINTER [INSERT ON]
CREATE TRIGGER patrimonyMonitor BEFORE INSERT ON "monitor"
BEGIN
    SELECT CASE
    WHEN EXISTS(SELECT * FROM "printer","machine","monitor","networkPeripheral"
    WHERE printer."patrimony"=new.patrimony
    OR machine."patrimony"=new.patrimony
    OR monitor."patrimony"=new.patrimony
    OR networkPeripheral."patrimony"=new.patrimony))
    THEN RAISE(ABORT, 'Erro: Este Patrimonio esta cadastrado')
END;
END;

CREATE TRIGGER patrimonyMonitor BEFORE INSERT ON "networkPeripheral"
BEGIN
    SELECT CASE
    WHEN EXISTS(SELECT * FROM "printer","machine","monitor","networkPeripheral" 
    WHERE printer."patrimony"=new.patrimony
    OR machine."patrimony"=new.patrimony
    OR monitor."patrimony"=new.patrimony
    OR networkPeripheral."patrimony"=new.patrimony)
    THEN RAISE(ABORT, 'Erro: Este Patrimonio esta cadastrado')
END;
END;

CREATE TABLE "peripheral"(
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" VARCHAR(20) NOT NULL,
    "type" VARCHAR(20) NOT NULL,
    "description" VARCHAR(200) NOT NULL,
    "quantity" INTEGER DEFAULT 0,
    "place" VARCHAR(100) NOT NULL,
    CONSTRAINT "peripheralPlacePK" FOREIGN KEY("place")
        REFERENCES "place"("name")
);
