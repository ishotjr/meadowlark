var fortunes = [
	"Fortune #1",
	"Fortune #2",
	"Fortune #3"	
];

exports.getFortune = function() {
	var idx = Math.floor(Math.random() * fortunes.length);
    return fortunes[idx];
};
