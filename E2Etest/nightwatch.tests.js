module.exports = {
    '@tags': ['login'],
    // 'Demo test Google' : function (browser) {
    //     browser
    //       .url('https://www.google.com')
    //       .waitForElementVisible('body')
    //       .setValue('input[type=text]', 'nightwatch')
    //       .waitForElementVisible('input[name=btnK]')
    //       .click('input[name=btnK]')
    //       .pause(1000)
    //       .assert.containsText('#main', 'Night Watch')
    //       .end();
    //   },
      'In Dev Fairy-game Homepage' : function( browser) {
        browser
        .url('http://localhost:3000/')
        .pause(1000)
        .assert.containsText('#root', 'Fairly')
        .assert.containsText('#root', 'Hello')
        .expect.element('body').to.be.present.before(1000);
        browser.end()
      },
     
  };

  //Using Ecpect assertions
  // module.exports = {
  //   'Demo test Google' : function (browser) {
  //     browser
  //       .url('https://google.no')
  //       .pause(1000);
  
  //     // expect element <body> to be present in 1000ms
  //     browser.expect.element('body').to.be.present.before(1000);
  
  //     // expect element <#lst-ib> to have css property 'display'
  //   //   browser.expect.element('#lst-ib').to.have.css('display');
  
  //     // expect element <body> to have attribute 'class' which contains text 'vasq'
  //     browser.expect.element('body').to.have.attribute('class').which.contains('vasq');
  
  //     // expect element <#lst-ib> to be an input tag
  //   //   browser.expect.element('#lst-ib').to.be.an('input');
  
  //     // expect element <#lst-ib> to be visible
  //   //   browser.expect.element('#lst-ib').to.be.visible;
  
  //     browser.end();
  //   }
  // };


