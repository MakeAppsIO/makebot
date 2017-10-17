module.exports = {
  botbuilder(session, next) {
    console.log('@@@ showSession middleware');
    console.log('*** Session:', session, '\n');
    next();
  },
};
