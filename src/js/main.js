
/**
 * Test JSON ES6 function
 */

require('file?name=[name].[ext]!../index.html');
require('../css/style.css');

import Bob from './content.js';

	console.log("Testing");
	document.write("It Works<br>");
	var myBob = new Bob();
	document.write("Bob's name is: \""+myBob.name+"\"<br>");
