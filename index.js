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