export default {
  receive(event, next) {
    console.log('Incoming event:', event);
    next();
  },
};
