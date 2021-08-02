import { readFile, writeFile, unlink, appendFile, readdir, copyFile } from 'fs';

//deleting file
export const deleteFile = (fileToDelete) => {
    unlink(fileToDelete, (err) => {
        if (err) { console.log("error - file dont exist") }
        else { console.log("success - file deleted") }
    });
}
//create file
export const createFile = (data) => {
    writeFile(data, directory, 'utf8', (err) => {
        if (err) { console.log("error - file dont created") }
        else { console.log("success - file created") }
    });
}
//update file
export const updateFile = (data) => {
    appendFile(directory, data + '\r\n', 'utf8', (err) => {
        if (err) { console.log("error - file dont updated") }
        else { console.log("success - file updated") }
    });
}
//read file
export const ReadFile = (directory) => {
    readFile(directory, 'utf8', (err, data) => {
        if (err) { console.log("error - file dont readed") }
        else { console.log("success - file readed") }
    });
}
//copy file
export const CopyFile = (directory, copiedDirectory) => {
    copyFile(directory, copiedDirectory, 'utf8', (err, data) => {
        if (err) { console.log("error - file dont copied") }
        else { console.log("success - file copied") }
    });
}
//files list in directory
export const DirectoryList = (directory) => {
    readdir(directory, (err, data, result = []) => {
        if (err) { console.log("error - cannot read directory") }
        else {
            for (var item in data) { result.push(item) }
            console.log(result)
            console.log(`files list ${directory}: `, data)
        }
        result
    });

}