
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Plus, 
  Edit3, 
  Trash2, 
  Search, 
  Filter,
  School,
  Users,
  MapPin,
  Settings
} from "lucide-react";
import { Link } from "react-router-dom";
import { schools, School } from "@/data/questions";

const Admin = () => {
  const [schoolList, setSchoolList] = useState<School[]>(schools);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<string>("all");
  const [isAddingSchool, setIsAddingSchool] = useState(false);

  const filteredSchools = schoolList.filter(school => {
    const matchesSearch = school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         school.county.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "all" || school.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const [newSchool, setNewSchool] = useState<Partial<School>>({
    name: "",
    type: "county",
    category: "mixed",
    boarding: "both",
    region: "",
    county: "",
    subjects: [],
    facilities: [],
    cutoffPoints: 250,
    fees: { tuition: 22000 },
    personalityMatch: []
  });

  const handleAddSchool = () => {
    if (newSchool.name && newSchool.region && newSchool.county) {
      const school: School = {
        id: Date.now().toString(),
        ...newSchool as School
      };
      setSchoolList([...schoolList, school]);
      setNewSchool({
        name: "",
        type: "county",
        category: "mixed",
        boarding: "both",
        region: "",
        county: "",
        subjects: [],
        facilities: [],
        cutoffPoints: 250,
        fees: { tuition: 22000 },
        personalityMatch: []
      });
      setIsAddingSchool(false);
    }
  };

  const handleDeleteSchool = (id: string) => {
    setSchoolList(schoolList.filter(school => school.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/dashboard" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">School Compass</h1>
                <p className="text-sm text-gray-600">Admin Panel</p>
              </div>
            </Link>
            <Badge className="bg-blue-100 text-blue-800">
              Administrator
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Dashboard Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Schools</p>
                  <p className="text-3xl font-bold">{schoolList.length}</p>
                </div>
                <School className="h-10 w-10 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">National Schools</p>
                  <p className="text-3xl font-bold">
                    {schoolList.filter(s => s.type === 'national').length}
                  </p>
                </div>
                <Users className="h-10 w-10 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Counties Covered</p>
                  <p className="text-3xl font-bold">
                    {new Set(schoolList.map(s => s.county)).size}
                  </p>
                </div>
                <MapPin className="h-10 w-10 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Average Fees</p>
                  <p className="text-3xl font-bold">
                    {Math.round(schoolList.reduce((acc, s) => acc + s.fees.tuition, 0) / schoolList.length / 1000)}K
                  </p>
                </div>
                <Settings className="h-10 w-10 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Controls */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>School Management</CardTitle>
                <CardDescription>Manage secondary schools database</CardDescription>
              </div>
              <Button 
                onClick={() => setIsAddingSchool(true)}
                className="flex items-center space-x-2"
              >
                <Plus className="h-4 w-4" />
                <span>Add School</span>
              </Button>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search schools by name or county..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <select 
                  value={filterType} 
                  onChange={(e) => setFilterType(e.target.value)}
                  className="border rounded px-3 py-2"
                >
                  <option value="all">All Types</option>
                  <option value="national">National</option>
                  <option value="county">County</option>
                  <option value="sub-county">Sub-County</option>
                </select>
              </div>
            </div>

            {/* Schools List */}
            <div className="space-y-4">
              {filteredSchools.map((school) => (
                <div key={school.id} className="border rounded-lg p-4 bg-white">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold">{school.name}</h3>
                        <Badge 
                          className={`${
                            school.type === 'national' ? 'bg-blue-100 text-blue-800' :
                            school.type === 'county' ? 'bg-green-100 text-green-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {school.type.charAt(0).toUpperCase() + school.type.slice(1)}
                        </Badge>
                        <Badge variant="outline">
                          {school.category.charAt(0).toUpperCase() + school.category.slice(1)}
                        </Badge>
                      </div>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                        <div>
                          <p><strong>Location:</strong> {school.county}, {school.region}</p>
                          <p><strong>Boarding:</strong> {school.boarding.charAt(0).toUpperCase() + school.boarding.slice(1)}</p>
                        </div>
                        <div>
                          <p><strong>Cut-off:</strong> {school.cutoffPoints} marks</p>
                          <p><strong>Tuition:</strong> KSh {school.fees.tuition.toLocaleString()}</p>
                        </div>
                        <div>
                          <p><strong>Subjects:</strong> {school.subjects.length}</p>
                          <p><strong>Facilities:</strong> {school.facilities.length}</p>
                        </div>
                        <div>
                          <p><strong>Personality Match:</strong></p>
                          <div className="flex space-x-1 mt-1">
                            {school.personalityMatch.map((trait, index) => (
                              <span key={index} className="px-1 py-0.5 bg-blue-100 text-blue-800 rounded text-xs">
                                {trait}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Edit3 className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleDeleteSchool(school.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Add School Modal/Form */}
        {isAddingSchool && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Add New School</CardTitle>
              <CardDescription>Enter details for the new school</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">School Name</Label>
                  <Input
                    id="name"
                    value={newSchool.name}
                    onChange={(e) => setNewSchool({...newSchool, name: e.target.value})}
                    placeholder="Enter school name"
                  />
                </div>
                <div>
                  <Label htmlFor="type">School Type</Label>
                  <select 
                    id="type"
                    value={newSchool.type}
                    onChange={(e) => setNewSchool({...newSchool, type: e.target.value as any})}
                    className="w-full border rounded px-3 py-2"
                  >
                    <option value="national">National</option>
                    <option value="county">County</option>
                    <option value="sub-county">Sub-County</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="region">Region</Label>
                  <Input
                    id="region"
                    value={newSchool.region}
                    onChange={(e) => setNewSchool({...newSchool, region: e.target.value})}
                    placeholder="e.g., Central"
                  />
                </div>
                <div>
                  <Label htmlFor="county">County</Label>
                  <Input
                    id="county"
                    value={newSchool.county}
                    onChange={(e) => setNewSchool({...newSchool, county: e.target.value})}
                    placeholder="e.g., Kiambu"
                  />
                </div>
                <div>
                  <Label htmlFor="cutoff">Cut-off Points</Label>
                  <Input
                    id="cutoff"
                    type="number"
                    value={newSchool.cutoffPoints}
                    onChange={(e) => setNewSchool({...newSchool, cutoffPoints: parseInt(e.target.value)})}
                    placeholder="250"
                  />
                </div>
                <div>
                  <Label htmlFor="tuition">Tuition Fees (KSh)</Label>
                  <Input
                    id="tuition"
                    type="number"
                    value={newSchool.fees?.tuition}
                    onChange={(e) => setNewSchool({
                      ...newSchool, 
                      fees: {...newSchool.fees, tuition: parseInt(e.target.value)}
                    })}
                    placeholder="22000"
                  />
                </div>
              </div>
              
              <div className="flex space-x-4 mt-6">
                <Button onClick={handleAddSchool}>Add School</Button>
                <Button variant="outline" onClick={() => setIsAddingSchool(false)}>
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Admin;
