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
    //TOdo later
}

//sign in and create a session for the user
module.exports.createSession = function(req, res){
    //Todo Later
}