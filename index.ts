// Import les modules os et chalk
import os from 'os';
import chalk from 'chalk';

// Obtention des informations sur le CPU
const cpuInfo = os.cpus();

// Conversion en chaîne de caractères avec JSON.stringify
const cpuInfoString = JSON.stringify(cpuInfo);

// Affichage en rouge avec Chalk
const redCPUInfo = chalk.red(cpuInfoString);

// Affichage du résultat
console.log(redCPUInfo);