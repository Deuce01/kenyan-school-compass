
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Brain, Smartphone, CheckCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Payment = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<"pending" | "processing" | "success" | "failed">("pending");

  const handleMpesaPayment = async () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      toast.error("Please enter a valid phone number");
      return;
    }

    setIsProcessing(true);
    setPaymentStatus("processing");
    
    // Simulate M-PESA STK Push process
    toast.info("STK Push sent to your phone. Please enter your M-PESA PIN.");
    
    // Simulate payment processing delay
    setTimeout(() => {
      // Mock successful payment
      setPaymentStatus("success");
      setIsProcessing(false);
      toast.success("Payment successful! Your results have been unlocked.");
      
      // Redirect to results after successful payment
      setTimeout(() => {
        navigate("/results?paid=true");
      }, 2000);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/dashboard" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">School Compass</h1>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          {paymentStatus === "success" ? (
            /* Success State */
            <Card>
              <CardHeader className="text-center">
                <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-2xl text-green-600">Payment Successful!</CardTitle>
                <CardDescription>
                  Your complete results have been unlocked
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-6">You can now access your detailed personality analysis and school recommendations.</p>
                <Link to="/results?paid=true">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    View Complete Results
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            /* Payment Form */
            <Card>
              <CardHeader className="text-center">
                <Smartphone className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Complete Payment</CardTitle>
                <CardDescription>
                  Pay KSh 500 via M-PESA to unlock your complete results
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-6">
                  {/* Payment Summary */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Order Summary</h3>
                    <div className="flex justify-between items-center">
                      <span>Complete Psychometric Results</span>
                      <span className="font-bold">KSh 500</span>
                    </div>
                    <div className="text-sm text-gray-600 mt-2">
                      <p>Includes:</p>
                      <ul className="list-disc list-inside">
                        <li>Detailed personality analysis</li>
                        <li>14 recommended schools</li>
                        <li>PDF report download</li>
                      </ul>
                    </div>
                  </div>

                  {/* M-PESA Form */}
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="phone">M-PESA Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="0712345678"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="mt-1"
                      />
                      <p className="text-sm text-gray-600 mt-1">
                        Enter the phone number registered with M-PESA
                      </p>
                    </div>

                    <Button 
                      onClick={handleMpesaPayment}
                      disabled={isProcessing}
                      className="w-full bg-green-600 hover:bg-green-700"
                    >
                      {isProcessing ? "Processing..." : "Pay with M-PESA"}
                    </Button>
                  </div>

                  {paymentStatus === "processing" && (
                    <div className="text-center p-4 bg-yellow-50 rounded-lg">
                      <div className="animate-spin h-8 w-8 border-4 border-yellow-500 border-t-transparent rounded-full mx-auto mb-2"></div>
                      <p className="text-yellow-700 font-medium">Processing payment...</p>
                      <p className="text-sm text-yellow-600">Please complete the payment on your phone</p>
                    </div>
                  )}

                  {/* Alternative Payment Methods */}
                  <div className="border-t pt-6">
                    <h3 className="font-semibold mb-4 text-center">Other Payment Options</h3>
                    
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full">
                        Pay with Voucher Code
                      </Button>
                      
                      <div className="text-center">
                        <p className="text-sm text-gray-600">
                          Need help? <Link to="/contact" className="text-blue-600 hover:underline">Contact Support</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Payment;
