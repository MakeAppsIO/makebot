
const SparkPost = require('sparkpost');

const client = new SparkPost('491011361d3c0fecc49126c0d8e70db85b3943a1');


module.exports = data => client.transmissions.send({
  content: {
    from: 'meganpmcgee@gmail.com',
    subject: 'New Client Inquiry from MakeBot',
    text: JSON.stringify(data, null, 2),
  },
  recipients: [{ address: 'meganpmcgee@gmail.com' }],
}).then(res => console.log('Successfully sent with response:', res)).catch(console.error);
// # sourceMappingURL=emailToMakeApps.js.map
