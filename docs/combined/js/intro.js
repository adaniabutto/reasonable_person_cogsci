// Combined intro for the within-subject version: merges the three original intros
// (Experiment 1; same/different; endorse), keeping their wording.
const intro = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
        <div style="margin-top: -10%;">
        <h1><b>Welcome!</b></h1>
        <p style="text-align:center; text-wrap: balance; max-width: 700px; margin: auto;">
        In this experiment, you will read several stories about different characters.
        After each story, you will answer several kinds of questions about what happened.
        </p>
        <p style="text-align:center; text-wrap: balance; max-width: 700px; margin: 1em auto;">
        Some questions ask you to think about a "reasonable person" in that
        character's situation. A reasonable person is someone who exercises the
        degree of care, skill, and judgment that would be expected of an ordinarily
        prudent and careful person under similar circumstances. In some stories,
        you might find a reasonable person to be very similar to that character,
        and in other stories, a reasonable person might be very different.
        </p>
        <p style="text-align:center; text-wrap: balance; max-width: 700px; margin: 1em auto;">
        For other questions, you will imagine the story as a legal case: a lawyer
        makes a statement to the jury, and you will see what different jury members
        think about the lawyer's statement.
        </p>
        <p>Thank you for your participation!</p>
        </div>
       `,
    choices: ['Start'],
    margin_vertical: '10px'
};
