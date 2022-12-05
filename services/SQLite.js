import * as SQLite from "expo-sqlite";
import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";

let db = null;

export default function DataBase() {
  return new Promise(async (resolve) => {
    const database = SQLite.openDatabase("myDatabaseName.db");
    database._db.close();
    if (
      !(await FileSystem.getInfoAsync(FileSystem.documentDirectory + "SQLite"))
        .exists
    ) {
      await FileSystem.makeDirectoryAsync(
        FileSystem.documentDirectory + "SQLite"
      );
    }
    await FileSystem.downloadAsync(
      Asset.fromModule(require("./data.db")).uri,
      FileSystem.documentDirectory + "SQLite/myDatabaseName.db"
    );
    db = SQLite.openDatabase("myDatabaseName.db");
    db.exec([{ sql: "PRAGMA foreign_keys = ON;", args: [] }], false, () =>
      console.log("Foreign keys turned on")
    );
    resolve(db);
  });
}
