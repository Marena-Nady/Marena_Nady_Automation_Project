module.exports = {
    url: 'http://automationpractice.multiformis.com/index.php?controller=contact',
    elements: { // . represents class, # represents ID, ' '  represents the element itself 
        emailInput: '#email',
        subjectHeadingDList: '#id_contact',
        webMasterOption: '#id_contact option[value="1"]',
        customerServiceOption: '#id_contact option[value="2"]', //select from idcontact where the option value = 2
        noSelect: '#id_contact option[value="0"]',
        orderReference: '#id_order',
        chooseFileButton: 'input#fileUpload',
        fileName: '.filename',
        message: '#message',
        sendButton: '#submitMessage',
        errorSection: '.alert-danger>ol>li',
        successSection:'.alert-success',
        homeIcon:'.icon-home'
    },
    commands: [{
        'enterEmail': function (inputEmailValue) {
            return this.setValue('@emailInput', inputEmailValue);
        }
        ,
        'chooseFromSubjectHeadingList': function (subjectValue) {
            this.click('@subjectHeadingDList');

            if (subjectValue == 'WebMaster') {
                return this.click('@webMasterOption');
            }
            else if (subjectValue == 'Customer') {
                return this.click('@customerServiceOption');
            }
            else {
                return this.click('@noSelect');
            }
        }
        ,
        'enterOrderReference': function (inputOrderRef) {
            return this.setValue('@orderReference', inputOrderRef); //return to make a chain call (to use the same code line to set another field from the same class ex:contactUsPage.enterEmail("hhhhhhhhhhhhhhhhhhhh@gmail.com").chooseFromSubjectHeadingList('Customer');)
        }
        ,
        'enterMsg': function (inputMsg) {
            return this.setValue('@message', inputMsg);
        }
        ,
        'clickSubmit': function () {
            return this.click('@sendButton');
            
        }
        ,
        'chooseFile' : function (fileName)
        {
            //this.click('@chooseFileButton');
            return this.setValue('@chooseFileButton', require('path').resolve(__dirname + '/../files/' + fileName)) // Works
        },
        'goToHome':function(){
            return this.click('@homeIcon');
        }



//ASSERTIONS
        ,
        'verifyOnErrorMessage' : function(errorMsg){
            this.verify.textContains('@errorSection', errorMsg);
        },
        'verifyOnSuccessMessage': function(successMsg){
            this.verify.textContains('@successSection', successMsg);
        },
        'verifyNagivatingToHomePage': function(){
            this.verify.urlEquals("http://automationpractice.multiformis.com/index.php");
        },
        'verifyNagivatingToContactUsPage': function(){
            this.verify.urlEquals("http://automationpractice.multiformis.com/index.php?controller=contact");
        }

    }]
}