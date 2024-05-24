const { exec } = require('child_process');
const folder = process.argv[2];

if (!folder) {
  console.error('Please specify a folder to run.');
  process.exit(1);
}

const command = `ts-node ${folder}/index.ts`;
exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    return;
  }
  console.log(`Output:\n${stdout}`);
});
