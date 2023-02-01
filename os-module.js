// built in module
    // this module allows to access the things about operating system
    const os = require("os")

    const currentOS = {
        osType:os.version(),
        name:os.type(),
        release:os.release(),
        totalMem:os.totalmem(),
        freeMem:os.freemem(),
    }

    console.log(currentOS)
