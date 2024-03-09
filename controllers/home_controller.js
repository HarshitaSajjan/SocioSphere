const Post = require('../models/post');
const User = require('../models/user');



module.exports.home = async function(req, res){

    try{
        let posts = await Post.find({})
    .populate('user')
    .populate({
        path: 'comments',
        populate: {
            path: 'user'
        }
    })
    /*.exec(function(err, posts){     
    })
    */
    let users = await User.find({});
    /* function(err, users){*/
        return res.render('home', {
            title: "SocioSphere | Home",
            posts:  posts,
            all_users: users
        });
  //  });      

    }catch(err){
        console.log('Error', err);
        return;
    }
    // console.log(req.cookies);
    // res.cookie('user_id', 25);

    // Post.find({}, function(err, posts){
    //     return res.render('home', {
    //         title: "Codeial | Home",
    //         posts:  posts
    //     });
    // });

    // populate the user of each post
   

}

// module.exports.actionName = function(req, res){}
