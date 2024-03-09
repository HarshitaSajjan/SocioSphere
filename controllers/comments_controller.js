const Comment = require('../models/comment');
const Post = require('../models/post');

module.exports.create = function(req, res) {
    console.log('Request Body:', req.body); // Log the request body
    Post.findById(req.body.post)
        .then(post => {
            console.log('Found Post:', post); // Log the found post
            if (post) {
                Comment.create({
                    content: req.body.content,
                    post: req.body.post,
                    user: req.user._id // assuming user information is available in the request object
                })
                .then(comment => {
                    post.comments.push(comment);
                    return post.save();
                })
                .then(() => {
                    res.redirect('/');
                })
                .catch(err => {
                    console.error('Error creating comment:', err);
                    res.status(500).send('Internal Server Error');
                });
            } else {
                res.status(404).send('Post not found');
            }
        })
        .catch(err => {
            console.error('Error finding post:', err);
            res.status(500).send('Internal Server Error');
        });
};

module.exports.destroy = function(req, res) {
    Comment.findById(req.params.id)
        .then(comment => {
            console.log('Found Comment:', comment); // Log the found comment
            if (!comment) {
                return res.status(404).send('Comment not found');
            }

            if (comment.user.toString() !== req.user._id.toString()) {
                return res.status(403).send('Unauthorized');
            }

            let postId = comment.post;

            return Comment.findByIdAndRemove(req.params.id)
                .then(() => {
                    return Post.findByIdAndUpdate(postId, {$pull: {comments: req.params.id}});
                })
                .then(() => {
                    res.redirect('back');
                })
                .catch(err => {
                    console.error('Error deleting comment:', err);
                    res.status(500).send('Internal Server Error');
                });
        })
        .catch(err => {
            console.error('Error finding comment:', err);
            res.status(500).send('Internal Server Error');
        });
};
