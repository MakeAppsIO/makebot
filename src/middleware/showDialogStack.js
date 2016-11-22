import add from 'lodash/fp/add';
import get from 'lodash/fp/get';
import join from 'lodash/fp/join';
import pipe from 'lodash/fp/pipe';
import pluck from 'lodash/fp/pluck';

const showDialogStack = pipe(
  get('sessionState.callstack'),
  pluck('id'),
  join(', '),
  add('*** Dialog stack: '),
  console.log,
);

export default {
  botbuilder(session, next) {
    showDialogStack(session);
    next();
  },
};
