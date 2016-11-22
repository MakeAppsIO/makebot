import builder from 'botbuilder';

export default type => [
  session => builder.Prompts.confirm(session,
    `Do you know what tech stack your ${type} uses?`,
  ),
  (session, results) => console.log(results),
];
