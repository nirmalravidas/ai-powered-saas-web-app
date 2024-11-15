export {};

declare global {
  interface Window {
    Razorpay: new (options) => RazorpayInstance;
  }

  interface RazorpayInstance {
    open: () => void;
  }

  interface PaymentResponse {
    // Define properties as per Razorpay's response schema
    razorpay_payment_id: string;
    razorpay_order_id: string;
    razorpay_signature: string;
  }
}
