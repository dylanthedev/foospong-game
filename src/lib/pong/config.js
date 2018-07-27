
module.exports = {
    BG_COLOR: 0x222222,
    BARS_WIDTH: 20,
    LINES_DISTANCE: 20,
    PLAYER_MARGIN: 10,
    PLAYER_COLOR: 0xEEEEEE,
    TEAM_A_COLOR: 0x2ba9ff,
    TEAM_B_COLOR: 0xff3838,
    SCORES_MARGIN: { x: 40, y: 30 },
    TEXT_STYLE: {
        font: '60px Helvetica, Arial, sans-serif',
        fill: '#eee',
        align: 'center'
    },
    TEXT_STYLE_TEAM_A: {
        font: '60px Helvetica, Arial, sans-serif',
        fill: '#2ba9ff',
        align: 'center'
    },
    TEXT_STYLE_TEAM_B: {
        font: '60px Helvetica, Arial, sans-serif',
        fill: '#ff3838',
        align: 'center'
    },
    LINES_COLOR: 0xEEEEEE,
    BALL_COLOR: 0xEEEEEE,
    BALL_SIZE: 10,
    BALL_SPEED: 18,
    BALL_PADDLE_VELOCITY_ADD: 4,
    players: {
        a: {
            team: "a",
            hasScoreDisplay: true,
            numPaddles: 2,
            spaceHeight: 250,
            speed: 700
        },
        b: {
            team: "b",
            hasScoreDisplay: true,
            numPaddles: 3,
            spaceHeight: 180,
            speed: 700
        },
        c: {
            team: "a",
            numPaddles: 3,
            spaceHeight: 180,
            speed: 700
        },
        d: {
            team: "b",
            numPaddles: 2,
            spaceHeight: 250,
            speed: 700
        },
    }
};