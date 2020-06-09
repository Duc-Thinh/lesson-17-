var db = require('./db.js')
module.exports.requireAuth = (req,res,next)=>{
  console.log(req.signedCookies)
  if(!req.signedCookies.userId){
    res.redirect('/auth/login');
    return;
  }
  var user = db.get('userList').find({id:req.signedCookies.userId}).value()
  if(!user){
    res.redirect('/auth/login')
    return
  }
  res.locals.user = user.user
  next()
}
