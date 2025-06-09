
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Brain, Download, CreditCard, CheckCircle, Clock, Play } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [userProfile, setUserProfile] = useState<any>(null);
  const [testStatus, setTestStatus] = useState("not_started"); // not_started, in_progress, completed
  const [paymentStatus, setPaymentStatus] = useState("pending"); // pending, paid

  useEffect(() => {
    // Load user profile from localStorage (mock data)
    const profile = localStorage.getItem("userProfile");
    if (profile) {
      setUserProfile(JSON.parse(profile));
    }

    // Check test status
    const status = localStorage.getItem("testStatus");
    if (status) {
      setTestStatus(status);
    }

    // Check payment status
    const payment = localStorage.getItem("paymentStatus");
    if (payment) {
      setPaymentStatus(payment);
    }
  }, []);

  const getStatusBadge = () => {
    if (testStatus === "not_started") {
      return <Badge variant="secondary">Not Started</Badge>;
    } else if (testStatus === "in_progress") {
      return <Badge className="bg-yellow-500">In Progress</Badge>;
    } else if (testStatus === "completed" && paymentStatus === "pending") {
      return <Badge className="bg-orange-500">Awaiting Payment</Badge>;
    } else if (testStatus === "completed" && paymentStatus === "paid") {
      return <Badge className="bg-green-500">Complete</Badge>;
    }
  };

  const getProgressValue = () => {
    if (testStatus === "not_started") return 0;
    if (testStatus === "in_progress") return 50;
    if (testStatus === "completed" && paymentStatus === "pending") return 75;
    if (testStatus === "completed" && paymentStatus === "paid") return 100;
    return 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">School Compass Kenya</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">
              Welcome, {userProfile?.firstName || "Student"}
            </span>
            <Button variant="outline" size="sm">Logout</Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Progress Overview */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Your Assessment Journey</CardTitle>
                <CardDescription>Complete your psychometric test and unlock school recommendations</CardDescription>
              </div>
              {getStatusBadge()}
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Overall Progress</span>
                  <span>{getProgressValue()}%</span>
                </div>
                <Progress value={getProgressValue()} className="h-3" />
              </div>
              
              <div className="grid md:grid-cols-4 gap-4 mt-6">
                <div className="flex items-center space-x-3">
                  <div className={`rounded-full p-2 ${testStatus !== "not_started" ? "bg-green-100" : "bg-gray-100"}`}>
                    {testStatus !== "not_started" ? 
                      <CheckCircle className="h-5 w-5 text-green-600" /> : 
                      <Clock className="h-5 w-5 text-gray-400" />
                    }
                  </div>
                  <div>
                    <p className="font-medium">Start Test</p>
                    <p className="text-xs text-gray-500">70 Questions</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className={`rounded-full p-2 ${testStatus === "completed" ? "bg-green-100" : "bg-gray-100"}`}>
                    {testStatus === "completed" ? 
                      <CheckCircle className="h-5 w-5 text-green-600" /> : 
                      <Clock className="h-5 w-5 text-gray-400" />
                    }
                  </div>
                  <div>
                    <p className="font-medium">Complete Test</p>
                    <p className="text-xs text-gray-500">Get basic results</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className={`rounded-full p-2 ${paymentStatus === "paid" ? "bg-green-100" : "bg-gray-100"}`}>
                    {paymentStatus === "paid" ? 
                      <CheckCircle className="h-5 w-5 text-green-600" /> : 
                      <CreditCard className="h-5 w-5 text-gray-400" />
                    }
                  </div>
                  <div>
                    <p className="font-medium">Make Payment</p>
                    <p className="text-xs text-gray-500">KSh 500 via M-PESA</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className={`rounded-full p-2 ${paymentStatus === "paid" ? "bg-green-100" : "bg-gray-100"}`}>
                    {paymentStatus === "paid" ? 
                      <CheckCircle className="h-5 w-5 text-green-600" /> : 
                      <Download className="h-5 w-5 text-gray-400" />
                    }
                  </div>
                  <div>
                    <p className="font-medium">Get Report</p>
                    <p className="text-xs text-gray-500">Download PDF</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {testStatus === "not_started" && (
                <Link to="/test" className="block">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Play className="h-4 w-4 mr-2" />
                    Start Psychometric Test
                  </Button>
                </Link>
              )}
              
              {testStatus === "in_progress" && (
                <Link to="/test" className="block">
                  <Button className="w-full bg-yellow-600 hover:bg-yellow-700">
                    Continue Test (Question 35/70)
                  </Button>
                </Link>
              )}
              
              {testStatus === "completed" && paymentStatus === "pending" && (
                <div className="space-y-3">
                  <Link to="/results" className="block">
                    <Button variant="outline" className="w-full">
                      View Basic Results (Free)
                    </Button>
                  </Link>
                  <Link to="/payment" className="block">
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Unlock Full Report (KSh 500)
                    </Button>
                  </Link>
                </div>
              )}
              
              {testStatus === "completed" && paymentStatus === "paid" && (
                <div className="space-y-3">
                  <Link to="/results" className="block">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      View Full Results & Schools
                    </Button>
                  </Link>
                  <Link to="/download-report" className="block">
                    <Button variant="outline" className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF Report
                    </Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Profile Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Your Profile</CardTitle>
            </CardHeader>
            <CardContent>
              {userProfile ? (
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Name:</span>
                    <span className="font-medium">{userProfile.firstName} {userProfile.lastName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">County:</span>
                    <span className="font-medium">{userProfile.county}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Grade:</span>
                    <span className="font-medium">{userProfile.grade}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Current School:</span>
                    <span className="font-medium">{userProfile.currentSchool || "Not specified"}</span>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Edit Profile
                  </Button>
                </div>
              ) : (
                <p className="text-gray-500">Loading profile...</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
