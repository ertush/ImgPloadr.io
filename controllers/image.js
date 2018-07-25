'use-strict'

var fs = require('fs'),
 formidable = require('formidable'),
 path = require('path');
module.exports = {

 index: function(req, res) {

 /*res.send('The image:index controller ' + req.params.image_id);
 res.render('image');*/

var viewModel = {
 
image: {
 uniqueId: 1,
 title: 'Sample Image 1',
 description: 'This is a sample.',
 filename: 'sample1.jpg',
 views: 0,
 likes: 0,
 timestamp: Date.now()
 },
 
comments: [
 {
 image_id: 1,
 email: 'test@testing.com',
 name: 'Test Tester',
 gravatar: 'http://lorempixel.com/75/75/animals/1',
 comment: 'This is a test comment...',
 timestamp: Date.now()
 },

{
 image_id: 1,
 email: 'test@testing.com',
 name: 'Test Tester',
 gravatar: 'http://lorempixel.com/75/75/animals/2',
 comment: 'Another followup comment!',
 timestamp: Date.now()
 }
 ]
};

res.render('image', viewModel);

},
 create:function (req, res) {
    //res.send('The image:create POST controller');
    var saveImage = function () {
        var possible = 'abcdefghijklmnopqrstuvwxyz0123456789', imgUrl = '';
        for (var i = 0; i < 6; i += 1) {
            imgUrl += possible.charAt(Math.floor(Math.random() * possible.length));
        }
       
      var form = new formidable.IncomingForm();
      
    form.parse(req, function (err, fields, files) {
      var ext = path.extname(req.files).toLowerCase();
      console.log(ext);
      var oldpath = files.filetoupload.path;
      var newpath = './public/upload/'+ files.filetoupload.name;
              if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif') {
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
              }
      else {
            fs.unlink(oldpath, function () {
                if (err)
                    throw err;
                res.json(500, { error: 'Only image files are allowed.' });
            });
        }
 });
     
       
}
 
/*function(req, res) {
 //res.send('The image:create POST controller');
 var saveImage = function() {
 
 var possible = 'abcdefghijklmnopqrstuvwxyz0123456789',
 imgUrl = '';

 for(var i=0; i < 6; i+=1) {
 imgUrl += possible.charAt(Math.floor(Math.random() * possible.length));
 }

console.log(req.path+"\n\n"+req.url);
 var tempPath = req.files.file.path,
 ext = path.extname(req.files.file.name).toLowerCase(),
 targetPath = path.resolve('./public/upload/' + imgUrl + ext);

if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif') {
 
 fs.rename(tempPath, targetPath, function(err) {
 if (err) throw err;
 res.redirect('/images/' + imgUrl);
 });
} else {
 fs.unlink(tempPath, function () {
 if (err) throw err;
 res.json(500, {error: 'Only image files are allowed.'});
 });
}

};*/
 saveImage(); 
},
 like: function(req, res) {
 res.send('The image:like POST controller');
 },
 comment: function(req, res) {
 res.send('The image:comment POST controller');
 }

};
