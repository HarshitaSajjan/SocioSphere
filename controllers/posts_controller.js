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

module.exports.create = async function(req, res) {
    try {
        const { content } = req.body;
        const user = req.user._id; // Assuming req.user contains the current user information
        // Create a new post
        const newPost = await Post.create({ content, user });

        // Redirect to a suitable route after successfully creating the post
        return res.redirect('/'); // Redirect to home page for example
    } catch (error) {
        console.error('Error in creating post:', error);
        return res.redirect('back'); // Redirect back to the previous page in case of an error
    }
};
