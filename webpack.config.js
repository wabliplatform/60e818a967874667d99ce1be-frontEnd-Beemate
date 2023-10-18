const path = require('path');

module.exports = {
  entry: {
	'LoginPage' : './javascript/LoginPage.js',
	'SignupPage' : './javascript/SignupPage.js',
	'HomePage' : './javascript/HomePage.js',
	'SubmitFile' : './javascript/SubmitFile.js',
	'ResultPage' : './javascript/ResultPage.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};