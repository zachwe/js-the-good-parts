var quo = function(status) {
    return {
        get_status: function() {
            return status;
        }
    };
};
var myQuo = quo("happy");
console.log(myQuo.get_status());
console.log(myQuo.status);
