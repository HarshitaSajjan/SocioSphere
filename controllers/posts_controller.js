/*const Post= require('../models/post')
module.exports.create = function(req, res){
    Post.create({
        content: req.body.content,
        user: req.user._id
    },function(err,post){
        if(err){
        console.log('error in creating the post');return;
    }
    return res.redirect('back');
});
}
*/

const Post = require('../models/post');
const Comment = require('../models/comment');

module.exports.create = async function(req, res) {
    try {
        const { content } = req.body;
        const user = req.user._id; // Assuming req.user contains the current user information
        // Create a new post
        const newPost = await Post.create({ content, user });

        // Redirect to a suitable route after successfully creating the post
        req.flash('success', 'Post published!');
        return res.redirect('/'); // Redirect to home page for example
    } catch (error) {
        req.flash('Error in creating post', error);
        return res.redirect('back'); // Redirect back to the previous page in case of an error
    }
};

module.exports.destroy = async function(req,res){
    try{
        let post = await Post.findById(req.params.id);
        /*function(err,post){
            //.id means converting the object id into string
    } */
    if(post.user==req.user.id){
        post.remove();
    
        await Comment.deleteMany({
            post: req.params.id}); 
            req.flash('success', 'Post and associated comments deleted');
            return res.redirect('back');
    
            /*function(err){
                return res.redirect('back');
            });*/
        }else{
            req.flash('error', 'You cannot delete this Post');
            return res.redirect('back');
        }
    }catch{
        req.flash('Error in deleting comment', error);
        return res.redirect('back');
    }
};
