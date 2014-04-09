 module.exports = function(notifier) { 

    return {
        
        add: function(name, cb) {
            
            notifier.send(name + ' has been added!');
            cb();
        }
        
    };
    
 };