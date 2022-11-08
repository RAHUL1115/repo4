// require repo1
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const tracker = require('@rahul1115/repo1')
const packageJSON = require('./package.json')


async function main() { 
    let isProd = true;
    let prod = packageJSON?.nexsales?.prod
    let prodLength = Object.keys(prod).length;
    let dev = packageJSON?.nexsales?.dev
    let devLength = Object.keys(dev).length;

    // ? change isProd according to arguments
    if (process.env.DEV) {
        isProd = false;
    }

    // * necessary variables
    let packages = ``;
    let packageObject;

    // ? use the object according to environment
    if(isProd && prod && prodLength > 0){
        packageObject = prod
    } else if(!isProd && dev && devLength > 0) { 
        packageObject = dev
    } else{
        packageObject = tracker
    }

    // ? construct packages string from packageObject
    Object.entries(packageObject).forEach(([packageName, packageVersion]) => {
        if(tracker[packageName]){
            packageVersion = packageVersion === "*" ? tracker[packageName] : packageVersion;
            packages = `${packages} ${packageName}@${packageVersion}`
        }
    })

    // ? run the install command
    let command = `npm install --no-save ${packages}`;
    console.log(command);
    const stdData = await exec(command)
    console.log(`stdout : ${stdData.stdout}`)
    console.log(`stderr : ${stdData.stderr}`)
}

main();