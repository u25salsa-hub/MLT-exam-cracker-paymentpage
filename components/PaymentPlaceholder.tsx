import React, { useEffect, useRef } from 'react';

export const PaymentPlaceholder: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const currentForm = formRef.current;
    if (!currentForm) return;

    // Prevent duplicates: if script already exists, do not append again
    if (currentForm.querySelector('script')) return;

    const script = document.createElement('script');
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.async = true;
    
    // CRITICAL: Use setAttribute to ensure the underscore in the attribute name is preserved exactly
    script.setAttribute('data-payment_button_id', 'pl_S8UpQbbaQZg9rU');
    
    currentForm.appendChild(script);
  }, []);

  return (
    <div className="w-full flex justify-center py-4">
      <form ref={formRef} className="flex justify-center"></form>
    </div>
  );
};