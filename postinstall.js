// require repo1
const repo = require('@rahul1115/repo1')
const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function main() { 
    let packages = ``;
    Object.entries(repo).forEach(([key, value]) => { 
        packages = `${packages} ${key}@${value}`
    });
    let command = `npm install --no-save ${packages}`;
    console.log(command);
    const stdData = await exec(command)
    console.log(`stdout : ${stdData.stdout}`)
    console.log(`stderr : ${stdData.stderr}`)
}

main();