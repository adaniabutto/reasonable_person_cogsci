// Intros for Experiment 2 (original wording): same and different share the
// "reasonable person" intro; endorse has the jury intro.
const intro_reasonable_person = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
        <div style="margin-top: -10%;">
        <h1><b>Welcome!</b></h1>
        <p style="text-align:center; text-wrap: balance; max-width: 700px; margin: auto;">
        In this experiment, you will read several stories about different characters.
        In each story, we want you to think about a "reasonable person" in
        that character's situation. A reasonable person is someone who
        exercises the degree of care, skill, and judgment that would be
        expected of an ordinarily prudent and careful person under similar
        circumstances. We will ask you to imagine how a reasonable person
        would compare to the character in each story. In some stories,
        you might find a reasonable person to be very similar to that
        character, and in other stories, a reasonable person might be
        very different.
        </p>
        <p>Thank you for your participation!</p>
        </div>
       `,
    choices: ['Start'],
    margin_vertical: '10px'
};

const intro_jury = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
        <div style="margin-top: -10%;">
        <h1><b>Welcome!</b></h1>
        <p style="text-align:center; text-wrap: balance; max-width: 700px; margin: auto;">
        In this experiment, you will read several fictional legal cases involving different people.
        After each case, the lawyer will make a statement to the jury about what happened.
        You will see what different jury members think about the lawyer's statement and
        answer some questions about what happened.
        </p>
        <p>Thank you for your participation!</p>
        </div>
       `,
    choices: ['Start'],
    margin_vertical: '10px'
};

// index.html asks for the intro that fits the participant's measure
function getIntro(measures) {
    return measures[0] === 'endorse' ? intro_jury : intro_reasonable_person;
}
