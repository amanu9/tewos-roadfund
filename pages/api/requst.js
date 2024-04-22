Page({
   
    makePayment: function() {
       ma.request({
         url: 'YOUR_PAYMENT_API_URL', 
         method: 'POST', 
         header: {
           'Content-Type': 'application/json',
           'Authorization': 'Bearer YOUR_TOKEN' 
         },
         data: {
           // Your payment request data 
         },
         success: function(res) {
           // Handle success
           console.log('Payment request successful:', res);
           
           ma.navigateTo({
            url: '/pages/successPage/successPage', 
         });
         },
         fail: function(error) {
          
            console.error('Payment request failed:', error);
            // Show an error 
            ma.showToast({
               title: 'Payment failed', 
               icon: 'none', // 'none' means no icon, 'success' or 'loading' can be used for different icons
               duration: 2000 
            });
           }
           
       });
    },
   
    
   });
   