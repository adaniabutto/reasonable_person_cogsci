// Intro for Experiment 1 (original wording).
const intro = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
        <div style="margin-top: -10%;">
        <h1><b>Welcome!</b></h1>
        <p style="text-align:center; text-wrap: balance; max-width: 700px; margin: auto;">
        In this experiment, you will read several stories about different characters. After each story, you will answer some questions about what happened.
        </p>
        <p>Thank you for your participation!</p>
        </div>
       `,
    choices: ['Start'],
    margin_vertical: '10px'
};

// index.html asks for the intro that fits the participant's measures
function getIntro(measures) {
    return intro;
}
