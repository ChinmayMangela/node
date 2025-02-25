import fs from 'fs/promises'
import path from 'path'

async function checkExistance(name) {
    let fullPath = path.join(process.cwd(), name)
    try {
        // this function checks the accessiblity of the file or folder without opening it
        // if file exists then code proceeds
        await fs.access(fullPath)
        return true
    } catch (error) {
        // ENOENT: ERROR NO ENTITY
        if(error.code == 'ENOENT') {
            return false // file or folder is not exists
        } else {
            console.log(error)
            return false
        }
    }
}

async function createDirectory(name) {
    // check whether directory exists or not
    let directoryExists = await checkExistance(name)
    // if not then create
    if(!directoryExists) {
        const fullPath = path.join(process.cwd(), name)
        try {
            await fs.mkdir(fullPath, {recursive: true})
        } catch (error) {
            console.log(error)
        }
    } else {
        console.log(`${name} directory already exists`)
    }
}

async function createFile(name) {
    // check whether file exists or not
    let fileExists = await checkExistance(name)
    // if not then create
    if(!fileExists) {
        const fullPath = path.join(process.cwd(), name)
        try {
            await fs.writeFile(fullPath, 'HELLO, CHINMAY HERE', 'utf-8')
        } catch (error) {
            console.log(error)
        }
    } else {
        console.log(`${name} already exists`)
    }
}

async function addContentToFile(name, content) {
    let isExists = await checkExistance(name)

    if(isExists) {
        const fullPath = path.join(process.cwd(), name)
        try {
            await fs.writeFile(fullPath, content, 'utf8')
        } catch(e) {
            console.log(e)
        }
    } else {
        console.log('File does not exists')
    }
}


async function updateContentOfFile(name, content) {
    let isExists = await checkExistance(name)

    if(isExists) {
        const fullPath = path.join(process.cwd(), name)
        try {
            await fs.appendFile(fullPath, content, 'utf8')
        } catch(e) {
            console.log(e)
        }
    } else {
        console.log('File does not exists')
    }
}

async function removeFile(name) {
    const isExists = await checkExistance(name)
    if(isExists) {
        const fullPath = path.join(process.cwd(), name)

        try {
            await fs.unlink(fullPath)
        } catch(error) {
            console.log(error)
        }
    } else {
        console.log('File does not exists')
    }
}

async function removeDirectory(name) {
    const isExists = await checkExistance(name)
    if(isExists) {
        const fullPath = path.join(process.cwd(), name)

        try {
            await fs.rmdir(fullPath)
        } catch(error) {
            console.log(error)
        }
    } else {
        console.log('Directory does not exists')
    }
}



// createDirectory('Chinmay')
// createFile('chinmay.txt')
// addContentToFile('chinmay.txt', 'HII, CHINMAY HERE')
// addContentToFile('monty.txt', 'HII, CHINMAY HERE')
// updateContentOfFile('chinmay.txt', '\nI LOVE PROGRAMMING')
// updateContentOfFile('monty.txt', '\nI LOVE PROGRAMMING')
// removeFile('test.txt')
// removeFile('hello.txt')
// removeDirectory('monty')
removeDirectory('monty')