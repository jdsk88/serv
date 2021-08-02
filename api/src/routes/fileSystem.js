import express from 'express'
import { readFile, writeFile, unlink, appendFile, readdir, copyFile } from 'fs';

const routes = express.Router({});

routes.post('/directory', async (req, res, next) => {
  let directory = req.body.directory;
  readdir(directory, (err, data) => {
    if (err) { console.log("error - cannot read directory") }
    else {
      console.log(`files list ${directory}: `, data)
    }
    res.send(data);
  });
});

routes.post('/copyFile', async (req, res, next) => {
  let directory = req.body.directory;
  let copiedDirectory = req.body.copiedDirectory;
  copyFile(directory, copiedDirectory, (err) => {
    if (err) { console.log("error - cannot copy file") }
    else {
      console.log(`file copied in ${copiedDirectory}: `)
    }
    res.send(copiedDirectory);
  });
});

routes.post('/copyFiles', (req, res, next) => {
  let files = req.body.files;
  let copiedFile = req.body.copiedFile;
  files.forEach(file => {
    copyFile(file, copiedFile+"copy_"+file, (err) => {
      if (err) { console.log("error - cannot copy file") }
      else {
        console.log(`file copied in ${copiedFile}: `)
      }
    });
    res.send("done");
  });
});
export default routes
