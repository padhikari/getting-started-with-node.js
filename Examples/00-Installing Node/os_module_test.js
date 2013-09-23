var os =require('os');
/* os modules */ 
var msg =
"\nThe operating system's default directory for temp files: "+os.tmpdir()+'\n\n'+
"The endianness of the CPU: " +os.endianness()+'\n\n'+
"The hostname of the operating system: "+os.hostname()+'\n\n'+
"The operating system name: "+os.type()+'\n\n'+
"Operating system platform: "+os.platform()+'\n\n'+
"Operating system CPU architecture: "+os.arch()+'\n\n'+
"Operating system release: "+os.release()+'\n\n'+
"The system uptime in seconds: "+os.uptime()+'\n\n'+
"An array containing the 1, 5, and 15 minute load averages: "+os.loadavg()+'\n\n'+
"The total amount of system memory in bytes: "+os.totalmem()+'\n\n'+
"The amount of free system memory in bytes: "+os.freemem()+'\n\n'+
"An array of objects containing information about each CPU/core installed: "+os.cpus()+'\n\n'+
"A list of network interfaces: "+os.networkInterfaces()+'\n\n'+
"A constant defining the appropriate End-of-line marker for the operating system: "+os.EOL+'\n\n';

console.log(msg);