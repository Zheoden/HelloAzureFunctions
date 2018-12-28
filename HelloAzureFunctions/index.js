module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.name || (req.body && req.body.name)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello " + (req.query.name || req.body.name) + ", how are you? The number you enter is " + (prime((req.query.number || req.body.numer)) ? 'prime.' : 'not prime.')
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};

function prime(number){
	var prime = true;
	for(var i = 2; i <= Math.sqrt(number);i++){
		if(number % i == 0){
			prime = false;
			break;
		}
	}
	return prime && number >= 1;
}