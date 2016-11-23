import omit from 'lodash/fp/omit';
import pipe from 'lodash/fp/pipe';

const events = [
  'error',
  'lookupUser',
  'receive',
  'incoming',
  'routing',
  'send',
  'getStorageData',
  'saveStorageData',
  'conversationUpdate',
  'contactRelationUpdate',
  'typing',
];

const clean = pipe(
  obj => Object.assign({}, obj),
  omit([
    '_locale',
    'domain',
    'library',
    'localizer',
    'options.actions',
    'options.library',
    'options.localizer',
    'options.onSave',
    'options.onSend',
  ]),
);

export default bot => {
  events.forEach(event =>
    bot.on(event, data =>
      // console.log(`\n%%% Event \`${event}\` triggered, passed:\n`, clean(data), '\n'),
      console.log(`\n%%% Event \`${event}\` triggered`),
    ),
  );
};
