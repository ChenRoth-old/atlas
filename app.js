var app = require('express')();
var deps = require('dependable').container();

deps.register('Users', require('./models/Users'));
deps.register('notifier', require('./services/notifier'));

app.get('/', function(req,res) {
   
   var users = deps.get('Users');
   var name = req.query['name'];
    users.add(name, function() {    
       res.end(name);
       
   });
});
        
    
app.listen(3000);
console.log('app is running on port 3000');