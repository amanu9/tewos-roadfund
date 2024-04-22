

Page({
  data: {
   
    
    
  },
  
  onLoad(options) {},
  onReady() {},
  onShow() {},
  onHide() {},
  onUnload() {},
  onShareAppMessage() {
    return {
      title: 'tewos'
    };
  },

  navigateToform:function(){
    ma.navigateTo({
      url:'/pages/form/form'
    })
  },
  validateInput: function(event) {
    // Get the input value
    const inputValue = event.detail.value.input;

    // Check  input is empty 
    if (!inputValue) {
      // Prevent the form from being submitted
      ma.showModal({
        title: 'Please insert a Payment Reference No.',
        content: '', 
        showCancel: true, 
        confirmButtonText: 'Cancel', 
        cancelButtonText: 'OK', 
       });
    
      return false;
    }
    // add more
    return true;
 },

 // form submission handle
formSubmit: function(event) {

  if (!this.validateInput(event)) {
    return; 
  }

  //or success 
  this.navigateToform();
 }, 

});







