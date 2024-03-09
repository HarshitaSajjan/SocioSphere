const Post = require('../models/post');
const User = require('../models/user');



/*module.exports.home = function(req, res){
    Post.find({})
    .populate('user')
    .populate({
        path: 'comments',
        populate: {
            path: 'comments'
        }
    })
    
    .exec()
        .then(posts => {

            User.find{}, function(err,users){
                return res.render('home', {
                    title: "SocioSphere | Home",
                    posts: posts,
                    user: req.user
            }
            
            );
        })
        .catch(err => {
            // Handle error
            console.error('Error fetching posts:', err);
            return res.status(500).send('Internal Server Error');
        });
};
*/


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
    let users = awaitUser.find({});
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
