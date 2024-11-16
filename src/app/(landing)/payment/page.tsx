"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Script from "next/script"
import toast from "react-hot-toast";

const  PaymentPage = () => {

  const { user } = useUser();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    selectedPlan: "",
    contact: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    if (user) {
      setFormData({
        name: user.fullName || "", // Fallback to full name if first name is not available
        email: user.emailAddresses[0]?.emailAddress, // Fetch the first email address from Clerk
        selectedPlan: "", // Reset selected plan
        contact: "", // Fetch the contact number from Clerk
      });
    }
  }, [user]);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePlanSelection = (plan: string) => {
    setFormData((prevData) => ({ ...prevData, selectedPlan: plan }));
  };

   const createOrder = async () => {
    try {
      if (!formData.name || !formData.email || !formData.selectedPlan || !formData.contact) {
        setError("Please fill out all fields and select a plan.");
        return;
      }
  
      // Prepare request data to send to API
      const requestData = {
        plan: formData.selectedPlan,
        name: formData.name,
        email: formData.email,
      };
  
      console.log(requestData);
  
      // Send POST request to backend to create Razorpay order
      const response = await axios.post("/api/payments/razorpay/payment", requestData);
  
      // Check if the response contains the Razorpay order details
      const orderResponse = response.data;
  
      if (!orderResponse || !orderResponse.id) {
        throw new Error("Failed to create Razorpay order.");
      }

      return orderResponse;

    } catch (error) {
      console.error("Error creating Razorpay order:", error);
      throw new Error("Failed to create Razorpay order.");
    }
  }
      
  const processPayment = async ( e: React.FormEvent) => {
    e.preventDefault();

    try{

      setLoading(true);
      setError(null);

      const orderData = await createOrder();
      const orderId = orderData.id;

      // Initialize Razorpay checkout with the returned order details
      const options = {
        key: process.env.RAZORPAY_KEY_ID, // Razorpay key
        amount: orderData.amount, // The amount you received from backend (in the smallest currency unit, e.g., paise)
        currency: orderData.currency,
        name: "Rexhorizon",
        description: `Payment for ${formData.selectedPlan} plan`,
        image: "/icons/logo.png",
        // callback_url: '/paymentsuccess',
        cancel_url: '/dashboard',
        order_id: orderId,
        razorpay_payment_id: orderData.razorpay_payment_id,
        razorpay_signature: orderData.razorpay_signature,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        handler: async function (response: any) {
          const requestVerifyData = {
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            orderCreationId: response.razorpay_order_id,
            orderId: orderId,
          };

          const verifyResponse = await axios.post("/api/payments/razorpay/paymentverify", requestVerifyData);
          const verifyData = verifyResponse.data;

          if (verifyData.message === "success") {

            console.log("Payment successful");

            router.push('/paymentsuccess?orderid=' + orderData.id);

          } else {
            toast.error("Payment failed");
          } 
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.contact,
        },
        notes: {
          plan: formData.selectedPlan,
        },
      };
  
      const razorpay = new window.Razorpay(options);
      razorpay.open(); // Open the Razorpay checkout modal

      setLoading(false);
    } catch (error) {
      console.error("Payment Error:", error);
      setError("An error occurred while processing the payment.");
    }
  };

  return (
    <>
      <Script
          id="razorpay-checkout-js"
          src="https://checkout.razorpay.com/v1/checkout.js"
      />

      <div className="flex flex-col items-start max-w-sm mx-auto h-dvh overflow-hidden pt-4 md:pt-20">
        <div className="flex flex-col items-start gap-y-6 py-8 w-full px-0.5">
                <h2 className="text-2xl font-semibold">
                    Continue to Checkout
                </h2>

                <form onSubmit={processPayment} className="w-full">
                    <div className="space-y-2 w-full">
                        <Label htmlFor="email">
                            Full Name
                        </Label>
                        <Input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your full name"
                            autoComplete="off"
                            disabled
                            className="w-full focus-visible:border-foreground"
                        />
                    </div>

                      <div className="space-y-2 w-full">
                        <Label htmlFor="email">
                            Email
                        </Label>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your email"
                            autoComplete="off"
                            disabled
                            className="w-full focus-visible:border-foreground"
                          />
                      </div>

                      <div className="space-y-2 w-full">
                        <Label htmlFor="email">
                            Contact Number
                        </Label>
                        <Input
                            type="tel"
                            id="contact"
                            name="contact"
                            value={formData.contact}
                            onChange={handleInputChange}
                            required
                            placeholder="+91 1234567890"
                            autoComplete="off"
                            className="w-full focus-visible:border-foreground"
                          />
                      </div>

                    <div className="mt-4 w-full">
                        <label htmlFor="plan">Select Plan</label>
                          <Select onValueChange={handlePlanSelection}>
                            <SelectTrigger>
                              <SelectValue placeholder="Choose a plan" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pro">Pro Plan</SelectItem>
                              <SelectItem value="premier">Premier Plan</SelectItem>
                            </SelectContent>
                          </Select>
                          {error && formData.selectedPlan === "" && (
                            <div className="text-red-500 mt-1 text-sm">Please select a plan.</div>
                          )}
                    </div>

                      {error && <div className="error">{error}</div>} {/* Display error if present */}
                    
                    <div className="mt-4 w-full">
                        <Button
                            type="submit"
                            disabled={loading}
                            className="w-full"
                        >
                            {loading ? "Processing Payment..." : "Proceed to Payment"}
                        </Button>
                    </div>
                </form>
                <div className="w-full">
                  <Button variant="outline" className="w-full" onClick={() => router.push("/dashboard")}>
                          Cancel and Go Back
                  </Button>
                </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage