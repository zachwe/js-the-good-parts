var Trigger = function() {

};
var triggers = [new Trigger(), new Trigger(), new Trigger()];

//This is wrong and bad!!!
var add_triggers = function(triggers) {
    var i;
    var sounds = ["bang", "pow", "boom"];
    for(i = 0; i < triggers.length; i++) {
        triggers[i].pull = function() {
            console.log(sounds[i - 1]);        
        };
    }
};

add_triggers(triggers);

for(var i = 0; i < triggers.length; i++) {
    triggers[i].pull();
}


// Here's a better way
triggers = [new Trigger(), new Trigger(), new Trigger()];
var add_triggers_good = function(triggers) {
    var i;
    var sounds = ["bang", "pow", "boom"];
    for(i = 0; i < triggers.length; i++) {
        triggers[i].pull = function(e) {
            return function() {
                console.log(sounds[e]);        
            };
        }(i);
    }
};
add_triggers_good(triggers);

for(var i = 0; i < triggers.length; i++) {
    triggers[i].pull();
}
