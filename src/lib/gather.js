const { bot } = require('../initialize');
const builder = require('botbuilder');
const get = require('lodash/fp/get');
const shortid = require('shortid');
const without = require('lodash/fp/without');

module.exports = (prompt, choices) => {
  const randomId = shortid();

  let choicesLeft = choices;
  let chosenSoFar = [];

  bot.dialog(randomId, new builder.SimpleDialog((session, results) => {
    const choiceIndex = get('response.index', results);
    const userSaidDone = choiceIndex === choicesLeft.length;

    console.log(chosenSoFar, choicesLeft, choiceIndex);

    if (userSaidDone) {
      return session.endDialogWithResult(chosenSoFar);
    }

    if (choiceIndex !== undefined) {
      const choice = choicesLeft[choiceIndex];
      /* eslint-disable fp/no-mutation */
      chosenSoFar = [...chosenSoFar, choice];
      choicesLeft = without([choice], choicesLeft);
      /* eslint-enable fp/no-mutation */
    }

    console.log(chosenSoFar, choicesLeft);

    if (!choicesLeft.length) {
      return session.endDialogWithResult(chosenSoFar);
    }

    return chosenSoFar.length ?
      builder.Prompts.choice(session, 'Anything else?', [...choicesLeft, 'Nope']) :
      builder.Prompts.choice(session, prompt, [...choicesLeft, 'None']);
  }));

  return randomId;
};
