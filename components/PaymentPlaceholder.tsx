import React, { useEffect, useRef } from 'react';

export const PaymentPlaceholder: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const currentForm = formRef.current;
    if (currentForm) {
      // Clear previous content to prevent duplicates
      currentForm.innerHTML = '';
      
      const script = document.createElement('script');
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.dataset.payment_button_id = "pl_S8UpQbbaQZg9rU";
      script.async = true;
      
      currentForm.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full flex justify-center py-2">
      <form ref={formRef} className="flex justify-center"></form>
    </div>
  );
};