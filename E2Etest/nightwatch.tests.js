module.exports = {
    '@tags': ['login'],
    
      'In Dev Fairy-game Homepage' : function( browser) {
        browser
        .url('http://localhost:3000')
        .pause(1000)
        // .assert.containsText('#root', 'Awesome')
        // .assert.containsText('#root', 'Login')
        .expect.element('body').to.be.present.before(1000);
        browser.end()
      },

      'In Dev Fairy-game login page' : function( browser) {
        browser
        .url('http://localhost:3000/login')
        .pause(1000)
        // .assert.containsText('#root', 'Fairly')
        // .assert.containsText('#root', 'Login')
        .expect.element('body').to.be.present.before(1000);
        browser.end()
      },
     
  };

  

