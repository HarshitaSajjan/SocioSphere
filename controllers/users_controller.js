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
/*module.exports.create = async function(req, res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    const existingUser = await User.findOne({email:req.body.email}, function(err,user){
        if(err){console.log('Error in finding user in singing up'); return}
        if(!existingUser){
           const newUSer = User.create(req.body, function(err,user){
                if(err){console.log('Error in creating user while singing up'); return}
                return res.redirect('/users/sign-in');
            })
        }
        else{
                return res.redirect('back');
            }
            
    });

}*/
//const User = require('../models/user');

module.exports.create = async function (req, res) {
    try {
        if (req.body.password !== req.body.confirm_password) {
            return res.redirect('back');
        }

        const existingUser = await User.findOne({ email: req.body.email });

        if (!existingUser) {
            const newUser = await User.create(req.body);
            return res.redirect('/users/sign-in');
        } else {
            return res.redirect('back');
        }
    } catch (error) {
        console.error('Error in user creation:', error);
        return res.status(500).send('Internal Server Error');
    }
};


//sign in and create a session for the user
module.exports.createSession = function(req, res){
    //Todo Later
}