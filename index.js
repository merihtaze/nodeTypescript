const { spawn } = require('child_process');

function runProcess(processName, args) {
    let child = spawn(processName, args);

    child.stdout.on('data', (chunk) => {
        console.log(`${processName}-Out: ${chunk}`);
    });
    
    child.stderr.on('data', (chunk) => {
        console.error(`${processName}-Err: ${chunk}`);
    });
    
    child.on('close', (code) => {
      console.log(`${processName} process exited with code ${code}`);
    });

    return child;
}

// Run tsc and nodemon to watch files
const tsc = runProcess('tsc', ['-w']);
const nodemon = runProcess('nodemon', ['dist/App.js']);