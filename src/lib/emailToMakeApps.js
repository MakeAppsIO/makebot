const SparkPost = require('sparkpost');

const spark = new SparkPost(process.env.SPARKPOST_API_KEY);

module.exports = data =>
  spark.transmissions.send({
    content: {
      from: 'makebot@makeapps.io',
      subject: 'New Client Inquiry from MakeBot',
      text: JSON.stringify(data, null, 2),
    },
    recipients: [
      { address: 'inquiries@makeapps.io' },
    ],
  })
  .then(res => console.log('Successfully sent with response:', res))
  .catch(console.error);
