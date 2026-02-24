import * as database from "./utils/database.mjs";
import { disconnectDatabase, databaseType } from "./utils/database.mjs";
import { getDataFromApi } from "./utils/api.js";

// database.connectToDatabase("MyDatabase");
// database.disconnectDatabase("MyDatabase");
// disconnectDatabase("MyDatabase");
// console.log(databaseType.userType);
getDataFromApi();