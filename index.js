const questions = [
  'O que aprendi hoje?',
  'O que me deixou aborrecido? O que poderia fazer para melhorar?',
  'O que me deixou feliz hoje?',
  'Quantas pessoas você ajudou hoje?',
];

const ask = (index = 0) => {
  process.stdout.write("\n" + questions[index] + ": ");
}

ask();

const answers = [];

process.stdin.on('data', data => {
  answers.push(data.toString().trim());

  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

process.on('exit', () => {
  console.log(`
    Parabéns Calebe

    Hoje você aprendeu:
    ${answers[0]}

    O que te deixou aborrecido, e o que fazer a respeito:
    ${answers[1]}

    Hoje você ficou feliz por:
    ${answers[2]}

    Hoje você ajudou ${answers[3]} pessoa(s).

    Muito bom, volte amanhã para mais reflexões.
  `);
});