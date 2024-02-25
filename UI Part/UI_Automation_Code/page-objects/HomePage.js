module.exports = {
    url: 'http://automationpractice.multiformis.com/index.php',
    elements: { // . represents class, # represents ID, ' '  represents the element itself 
        searchElement: '#search_query_top',
        searchButton: '.button-search',
        itemsSection: '.right-block>h5>a'
    },
    commands: [{

    'enterInSearchField':function(inputSearchValue){
        this.setValue('@searchElement',inputSearchValue);    
        return this.click('@searchButton');

    }

}]
}