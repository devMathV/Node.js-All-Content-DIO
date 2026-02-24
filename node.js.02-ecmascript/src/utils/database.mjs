const databaseType = {
    userType: "Admin",
    typeData: "datalocal",
}

async function connectToDatabase(dataName) {
    console.log("Conectado ao banco: " + dataName);
}

async function disconnectDatabase(dataName) {
    console.log("Desconectado do banco: " + dataName);
}

export { 
    connectToDatabase, 
    disconnectDatabase,
    databaseType,
};