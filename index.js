

import axios from 'axios'

const initiatePayment = async (amount, orderId) => {
  try {
    // Make API request to EasyPaisa to initialize payment
    const response = await axios.post('EASYPAISA_PAYMENT_API_URL', {
      amount,
      orderId,
      // Add additional parameters as required
    });

    console.log('Payment initiation successful:', response.data);
  } catch (error) {
    console.error('Error initializing payment:', error);
  }
};

module.exports = { initiatePayment };
