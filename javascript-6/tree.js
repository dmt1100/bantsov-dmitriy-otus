//lesson6
const dir = require('node-dir');

const result = {'files': [], 'dirs': []};
const dirname = process.argv[2]; //'foo';
dir.paths(dirname, function(err, paths) {
    if (err) throw err;
    result.files = paths.files;
    for (let i=0; i<result.files.length; i++){
        result.files[i]=result.files[i].split('\\').join('/');
    }
    result.dirs = paths.dirs;
    result.dirs.unshift(dirname);
    for (let y=0; y<result.dirs.length; y++){
        result.dirs[y]=result.dirs[y].replace(/\\/g,'/');
    }
    console.log(JSON.stringify(result));
});
