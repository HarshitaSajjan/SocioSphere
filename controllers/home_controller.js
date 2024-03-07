const Post = require('../models/post');


//module.exports.home = function(req, res){
    //return res.end('<h1> Express is up for SocioSphere! </h1>');
   //console.log(req.cookies);
   // res.cookie('user_id' , 25);


  /* Post.find({}, function(err, posts){
    return res.render('home',{
        title: " SocioSphere|Home",
        posts: posts
   });
});*/
// populate the user of each post
  /*  Post.find({}).populate('user').exec(function(err, posts){
        return res.render('home',{
            title: " SocioSphere|Home",
            posts: posts
       });
    })
}
*/


//module.export.actionName = function(req,res){}



module.exports.home = function(req, res){
    Post.find({}).populate('user').exec()
        .then(posts => {
            return res.render('home', {
                title: "SocioSphere | Home",
                posts: posts
            });
        })
        .catch(err => {
            // Handle error
            console.error('Error fetching posts:', err);
            return res.status(500).send('Internal Server Error');
        });
};
