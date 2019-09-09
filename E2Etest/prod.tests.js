module.exports = {
    '@tags': ['login'],
    'Deployed Fairy-game homepage' : function( browser) {
        browser
        .url('https://fairy-game.herokuapp.com/')
        .pause(1000)
        .assert.containsText('#root', 'Fairly')
        .assert.containsText('#root', 'Hello')
        .expect.element('.Login').to.be.an('div');
        // .end()
        browser.end()
      }
}