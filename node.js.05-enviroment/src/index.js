import connectToDatabase from "./database/data.js";

async function main() {
    await connectToDatabase("user", "senha");

    console.log(process.env.USERDATABASE);
}

main()