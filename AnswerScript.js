//DeltaMath Answer Script

if (problem.ansType == 2 || problem.ansType == 1) 
{
document.getElementsByClassName('submit-answer-form')[0].click();
problem.ansType = 1;
document.getElementsByClassName('btn btn-default cancel-button-float')[0].click();
answer = problem.answers.valueOf();
answerLength = answer.length;
for (var i = 0; i < answerLength; i++) 
{
    document.getElementsByClassName('mq-editable-field')[0].innerText = answer[0];
    document.querySelector("#innerAnswerForm > answer-form-one > div > div > b.glyphicon.glyphicon-plus-sign.no-select").click();
    document.getElementsByClassName('mq-editable-field')[i].innerText = answer[i];
}
    document.getElementsByClassName('submit-answer-form')[0].click();
}
if (problem.ansType == 'custom')
{
alert('Module Not Supported')
}
