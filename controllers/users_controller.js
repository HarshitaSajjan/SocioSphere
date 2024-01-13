const User = require('../models/user');

module.exports.profile = function(req,res){
    //res.end('<h1>User Profile</h1>');
    return res.render('users', {
        title: "Users"
    });
}

//render the sign up page
module.exports.signUp = function(req, res){
    return res.render('user_sign_up', {
        title: "SocioSphere | Sign Up"
    })
}

// render the sign in page
module.exports.signIn = function(req, res){
    return res.render('user_sign_in',{
        title: "SocioSphere | Sign  In"
    })
}

//get the sign up data
module.exports.create = function(req, res){
    if(req.body.password != req.body.confrim_password){
        return res.redirect('back');
    }
    User.findOne({email:req.body.email}, function(err,user){
        if(err){console.log('Error in finding user in singing up'); return}
        if(!user){
            User.create(req.body, function(err,user){
                if(err){console.log('Error in creating user while singing up'); return}

            })
        }

    
    })

}

//sign in and create a session for the user
module.exports.createSession = function(req, res){
    //Todo Later
}