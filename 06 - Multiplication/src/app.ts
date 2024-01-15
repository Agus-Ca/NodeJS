import { yarg } from "./config/plugins/args.plugin";
import { ServerApp } from "./presentation/server-app";



(async () => {
    await main();
    console.log('Execution finished!')
})()

async function main() {
    const { b:base, l:limit, s:displayTable, d:fileDestinationPath, n:fileName } = yarg;
    ServerApp.run({ base, limit, displayTable, fileDestinationPath, fileName });
}