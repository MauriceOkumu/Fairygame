module.exports = {
    '@tags': ['login'],
    'Deployed Fairy-game homepage' : function( browser) {
        browser
        .url('https://fairy-game.herokuapp.com/')
        .pause(1000)
        .expect.element('#root').to.be.an('div');
        // .end()
        browser.end()
      },
      'Deployed Fairy-game login page' : function( browser) {
        browser
        .url('https://fairy-game.herokuapp.com/')
        .pause(1000)
        .assert.containsText('#root', 'Awesome')
        .expect.element('body').to.be.present.before(1000);
        browser.end()
      },
}