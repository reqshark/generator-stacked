// API
// ===

module.exports.api = function(server<% if(mongo){ %>, schema<% } %>) {

	// Sample Rest Call

	server.get('/hello', function(req, res){
		res.send('<h1>Hello World!</h1>');
	});

}
