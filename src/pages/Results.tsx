
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Lock, CreditCard, Download, MapPin, Users, GraduationCap } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { calculatePersonalityType, getPersonalityDescription, recommendSchools } from "@/utils/schoolRecommendations";
import { generatePDFReport } from "@/utils/pdfGenerator";

const Results = () => {
  const [searchParams] = useSearchParams();
  const isPaid = searchParams.get('paid') === 'true';
  
  // Mock answers for demo - in real app this would come from localStorage or state
  const mockAnswers = {
    1: 'E', 2: 'N', 3: 'F', 4: 'P', 5: 'E', 6: 'N', 7: 'F', 8: 'P',
    9: 'E', 10: 'N', 11: 'F', 12: 'P', 13: 'E', 14: 'N', 15: 'F', 16: 'P'
  };
  
  const personalityType = calculatePersonalityType(mockAnswers);
  const { name: personalityName, description } = getPersonalityDescription(personalityType);
  
  const userProfile = {
    region: 'Central',
    county: 'Kiambu',
    preferredType: 'boarding' as const,
    preferredCategory: 'mixed' as const
  };
  
  const recommendedSchools = recommendSchools(personalityType, userProfile);
  
  const handleDownloadReport = () => {
    const reportData = {
      studentName: 'John Doe', // In real app, get from user data
      personalityType,
      personalityName,
      personalityDescription: description,
      strengths: [
        'Creative problem-solving',
        'Strong interpersonal skills',
        'Adaptability and flexibility',
        'Enthusiasm and optimism'
      ],
      learningStyle: 'Visual and collaborative learning with hands-on experiences. You thrive in interactive environments.',
      careerSuggestions: [
        'Education and Teaching',
        'Psychology and Counseling',
        'Marketing and Communications',
        'Arts and Creative Fields',
        'Social Work'
      ],
      schools: recommendedSchools.slice(0, 10),
      completedDate: new Date().toLocaleDateString()
    };
    
    generatePDFReport(reportData);
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
          {isPaid && (
            <Button onClick={handleDownloadReport} className="flex items-center space-x-2">
              <Download className="h-4 w-4" />
              <span>Download Report</span>
            </Button>
          )}
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
                  {description}
                </p>
              </div>
            </CardContent>
          </Card>

          {isPaid ? (
            /* Premium Content - Unlocked */
            <>
              {/* Detailed Analysis */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Brain className="h-5 w-5" />
                      <span>Detailed Analysis</span>
                    </CardTitle>
                    <CardDescription>
                      Comprehensive breakdown of your traits and preferences
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Key Strengths</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Creative problem-solving</li>
                          <li>• Strong interpersonal skills</li>
                          <li>• Adaptability and flexibility</li>
                          <li>• Enthusiasm and optimism</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Learning Style</h4>
                        <p className="text-sm">Visual and collaborative learning with hands-on experiences. You thrive in interactive environments that encourage discussion and creativity.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <GraduationCap className="h-5 w-5" />
                      <span>Career Guidance</span>
                    </CardTitle>
                    <CardDescription>
                      Suggested career paths based on your personality
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="p-2 bg-blue-50 rounded text-sm">Education and Teaching</div>
                      <div className="p-2 bg-green-50 rounded text-sm">Psychology and Counseling</div>
                      <div className="p-2 bg-purple-50 rounded text-sm">Marketing and Communications</div>
                      <div className="p-2 bg-yellow-50 rounded text-sm">Arts and Creative Fields</div>
                      <div className="p-2 bg-pink-50 rounded text-sm">Social Work</div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* School Recommendations */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5" />
                    <span>Recommended Schools</span>
                  </CardTitle>
                  <CardDescription>
                    Top {recommendedSchools.length} secondary schools matched to your personality and preferences
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {recommendedSchools.slice(0, 10).map((school, index) => (
                      <div key={school.id} className="p-4 border rounded-lg bg-white">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-semibold text-lg">{school.name}</h4>
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <span className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                {school.county}, {school.region}
                              </span>
                              <span className="flex items-center">
                                <Users className="h-4 w-4 mr-1" />
                                {school.category.charAt(0).toUpperCase() + school.category.slice(1)}
                              </span>
                            </div>
                          </div>
                          <Badge className="bg-green-100 text-green-800">
                            {school.matchScore}% Match
                          </Badge>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p><strong>Type:</strong> {school.type.charAt(0).toUpperCase() + school.type.slice(1)} School</p>
                            <p><strong>Boarding:</strong> {school.boarding.charAt(0).toUpperCase() + school.boarding.slice(1)}</p>
                          </div>
                          <div>
                            <p><strong>Tuition:</strong> KSh {school.fees.tuition.toLocaleString()}</p>
                            {school.fees.boarding && (
                              <p><strong>Boarding:</strong> KSh {school.fees.boarding.toLocaleString()}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </>
          ) : (
            /* Locked Premium Content */
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Detailed Analysis - Locked */}
              <Card className="relative">
                <div className="absolute inset-0 bg-gray-50/80 backdrop-blur-sm rounded-lg flex items-center justify-center z-10">
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
                <div className="absolute inset-0 bg-gray-50/80 backdrop-blur-sm rounded-lg flex items-center justify-center z-10">
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
                      <p className="text-sm text-gray-600">National School • Boys Boarding • Kiambu</p>
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
          )}

          {/* Unlock Options */}
          {!isPaid && (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Results;
