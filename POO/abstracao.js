/**
 * Exercício 1: criar um exemplo de abstração de algo do seu dia a dia dia a dia.
 */

class SoftwareInstaller {
    constructor() {
    }

    checkSystemRequirements() {
        console.log('Checking if your system has the necessary requirements...');
        let hasRequirements = true;
        if (hasRequirements) {
            return true;
        }
        else {
            return false;
        }
    }

    checkPreviousVersion() {
        console.log('Checking if your computer has previous versions of this software installed...');
        return true;
    }

    unzipFiles() {
        console.log('Unziping files...');
    }

    updateFiles() {
        console.log('Updating files...');
    }

    createFiles() {
        console.log('Creating files...');
    }

    createShortcut() {
        console.log('Creating a desktop shortcut...');
    }

    run() {
        console.log('Starting the program...');
    }

    installAndRun() {
        let meetSystemRequiments = this.checkSystemRequirements();
        if (!meetSystemRequiments) {
            console.log('We cannot install the program in your computer. Please download an older version from our website.');
            return(false);
        }
        let hasPreviousVersion = this.checkPreviousVersion();
        if (hasPreviousVersion) {
            this.updateFiles();
        }
        else {
            this.createFiles();
        }
        this.createShortcut();
        this.run();
    }
}

let myInstaller = new SoftwareInstaller();
myInstaller.installAndRun();