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

createDirectory('Chinmay')



createFile('monty.txt')