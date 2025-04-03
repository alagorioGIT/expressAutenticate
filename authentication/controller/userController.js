const session = require("express-session");
let userController = {
    index: function(req, res, next) {
        res.render('index', { title: 'Express' });
      },
    register: function(req, res, next) {
        res.render('registro', { title: 'Registro' });
      },
    create: function(req, res, next) {
        let user = req.body;
        req.session.user = user;
        console.log(user);
        res.cookie('user', user, { maxAge: 1000*60*5 });
        // Aquí puedes agregar la lógica para crear un nuevo usuario en la base de datos        
      },
    login: function(req, res, next) {

        res.send('LOGIN');
      },
    recover: function(req, res, next) {
        res.send('recupero');
      },
}
module.exports = userController;