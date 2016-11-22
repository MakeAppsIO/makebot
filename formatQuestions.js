const fs = require('fs');
const marked = require('marked');

const markdown = String(fs.readFileSync('public/questions.md'));
fs.writeFileSync('public/questions.html', marked(markdown));
