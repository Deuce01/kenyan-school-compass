
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Lock, CreditCard, Download } from "lucide-react";
import { Link } from "react-router-dom";

const Results = () => {
  // Mock personality result - in real app this would be calculated from test answers
  const personalityType = "ENFP";
  const personalityName = "The Campaigner";
  
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
        <div className="max-w-4xl mx-auto">
          {/* Results Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Your Test Results</h2>
            <p className="text-gray-600">Congratulations on completing the psychometric assessment!</p>
          </div>

          {/* Basic Results - Free */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">Your Personality Type</CardTitle>
                  <CardDescription>Basic assessment results</CardDescription>
                </div>
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  Free Preview
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-100 rounded-full mb-4">
                  <span className="text-3xl font-bold text-blue-600">{personalityType}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{personalityName}</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  You are an enthusiastic, creative, and sociable person who values inspiration and meaningful connections. 
                  You thrive in environments that encourage innovation and collaboration.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Locked Premium Content */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Detailed Analysis - Locked */}
            <Card className="relative">
              <div className="absolute inset-0 bg-gray-50/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Lock className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="font-semibold text-gray-600">Unlock Full Analysis</p>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>Detailed Personality Analysis</span>
                </CardTitle>
                <CardDescription>
                  Comprehensive breakdown of your traits, strengths, and preferences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 opacity-30">
                  <div>
                    <h4 className="font-semibold mb-2">Key Strengths</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Creative problem-solving</li>
                      <li>• Strong interpersonal skills</li>
                      <li>• Adaptability and flexibility</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Learning Style</h4>
                    <p className="text-sm">Visual and collaborative learning with hands-on experiences...</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* School Recommendations - Locked */}
            <Card className="relative">
              <div className="absolute inset-0 bg-gray-50/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Lock className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="font-semibold text-gray-600">Unlock School Matches</p>
                </div>
              </div>
              <CardHeader>
                <CardTitle>Recommended Schools</CardTitle>
                <CardDescription>
                  Top 14 secondary schools matched to your personality and preferences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 opacity-30">
                  <div className="p-3 border rounded">
                    <h4 className="font-semibold">Alliance High School</h4>
                    <p className="text-sm text-gray-600">National School • Mixed Day • Nairobi</p>
                    <div className="flex items-center mt-1">
                      <span className="text-sm font-medium text-green-600">98% Match</span>
                    </div>
                  </div>
                  <div className="p-3 border rounded">
                    <h4 className="font-semibold">Kenya High School</h4>
                    <p className="text-sm text-gray-600">National School • Girls Boarding • Nairobi</p>
                    <div className="flex items-center mt-1">
                      <span className="text-sm font-medium text-green-600">95% Match</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Unlock Options */}
          <Card>
            <CardHeader className="text-center">
              <CardTitle>Unlock Your Complete Results</CardTitle>
              <CardDescription>
                Get detailed analysis, school recommendations, and downloadable PDF report
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {/* M-PESA Payment */}
                <div className="text-center p-6 border rounded-lg">
                  <CreditCard className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Pay with M-PESA</h3>
                  <p className="text-3xl font-bold text-green-600 mb-4">KSh 500</p>
                  <Link to="/payment">
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Pay Now via M-PESA
                    </Button>
                  </Link>
                </div>

                {/* Voucher Code */}
                <div className="text-center p-6 border rounded-lg">
                  <Download className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Have a Voucher?</h3>
                  <p className="text-gray-600 mb-4">Enter your voucher code to unlock results</p>
                  <Button variant="outline" className="w-full">
                    Enter Voucher Code
                  </Button>
                </div>
              </div>

              <div className="mt-8 text-center text-sm text-gray-600">
                <p>Your results include:</p>
                <ul className="mt-2 space-y-1">
                  <li>• Complete personality analysis and career guidance</li>
                  <li>• Top 14 recommended secondary schools in Kenya</li>
                  <li>• Detailed school profiles and admission requirements</li>
                  <li>• Downloadable PDF report for your records</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Results;
