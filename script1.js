function submitQuiz() {
    const answers = {
        question1: document.querySelector('input[name="question1"]:checked').value,
        question2: document.querySelector('input[name="question2"]:checked').value,
        question3: document.querySelector('input[name="question3"]:checked').value,
        question4: document.querySelector('input[name="question4"]:checked').value,
        question5: document.querySelector('input[name="question5"]:checked').value,
        question6: document.querySelector('input[name="question6"]:checked').value,
        question7: document.querySelector('input[name="question7"]:checked').value,
        question8: document.querySelector('input[name="question8"]:checked').value,
    };

    const correctAnswers = {
        question1: 'd',
        question2: 'a',
        question3: 'c',
        question4: 'b',
        question5: 'c',
        question6: 'c',
        question7: 'a',
        question8: 'c',
    };

    let score = 0;

    const resultContainer = document.getElementById('result-container');

   
    const table = document.createElement('table');
    table.border = '1';

    
    const headerRow = table.insertRow();
    const headerCell1 = headerRow.insertCell(0);
    headerCell1.textContent = 'Question';
    const headerCell2 = headerRow.insertCell(1);
    headerCell2.textContent = 'Your Answer';
    const headerCell3 = headerRow.insertCell(2);
    headerCell3.textContent = 'Correct Answer';

    for (const question in answers) {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        cell1.textContent = question;
        const cell2 = row.insertCell(1);
        cell2.textContent = answers[question];
        const cell3 = row.insertCell(2);
        cell3.textContent = correctAnswers[question];

        
        if (answers.hasOwnProperty(question) && answers[question] === correctAnswers[question]) {
            score++;
       
            row.style.backgroundColor = 'lightgreen';
        } else {
           
            row.style.backgroundColor = 'red';
        }
    }


    resultContainer.innerHTML = `Your score: ${score} out of ${Object.keys(correctAnswers).length}`;
    resultContainer.appendChild(table);

  
    if (score === Object.keys(correctAnswers).length) {
        resultContainer.innerHTML += "<br>Congratulations! You got all the questions right!";
    } else {
        resultContainer.innerHTML += "<br>Keep practicing. You can do better!";
    }
}

