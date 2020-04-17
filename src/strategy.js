var passport = require('passport')
var BearerStrategy = require('passport-http-bearer').Strategy;

const users = [{username: 'user 1',password:'password', token:'123456'},
{username: 'user 2',password:'password', token:'1234523'},
 {username: 'user 3',password:'password', token:'123425'}
]
passport.use(new BearerStrategy(
    function(token, done) {
        let user = null
        users.forEach(current_user =>{
            if(current_user.token == token){
                user =current_user
            }
        })
        if(!user){
            return done(null, false)
        }
        return done(null, user)
    }
  ));
