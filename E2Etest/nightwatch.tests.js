module.exports = {
    
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
      'Fairy game Homepage' : function( browser) {
        browser
        .url('http://localhost:3000/')
        .pause(1000)
        .assert.containsText('#root', 'Fairly')
        .assert.containsText('#root', 'Hello')
        .end()
      }

  };

  //Using Ecpect assertions
//   module.exports = {
//     'Demo test Google' : function (browser) {
//       browser
//         .url('https://google.no')
//         .pause(1000);
  
//       // expect element <body> to be present in 1000ms
//       browser.expect.element('body').to.be.present.before(1000);
  
//       // expect element <#lst-ib> to have css property 'display'
//     //   browser.expect.element('#lst-ib').to.have.css('display');
  
//       // expect element <body> to have attribute 'class' which contains text 'vasq'
//       browser.expect.element('body').to.have.attribute('class').which.contains('vasq');
  
//       // expect element <#lst-ib> to be an input tag
//     //   browser.expect.element('#lst-ib').to.be.an('input');
  
//       // expect element <#lst-ib> to be visible
//     //   browser.expect.element('#lst-ib').to.be.visible;
  
//       browser.end();
//     }
//   };

// Using Xpath
// To always use xpath by default set the property "use_xpath": true in your test settings.
// this.demoTestGoogle = function (browser) {
//     browser
//     //   .useXpath() // every selector now must be xpath
//     //   .click("//tr[@data-recordid]/span[text()='Search Text']")
//       .useCss() // we're back to CSS now
//       .setValue('input[type=text]', 'nightwatch')
//   };

//Using async await in ES6

// module.exports = {
//     'demo test async': async function (browser) {
//       // get the available window handles
//       const result = await browser.windowHandles();
//       console.log('result', result);
  
//       // switch to the second window
//       // await is not necessary here since we're not interested in the result
//       browser.switchWindow(result.value[1]);
//     }
//   };