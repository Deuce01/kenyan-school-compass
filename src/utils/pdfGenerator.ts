
export interface ReportData {
  studentName: string;
  personalityType: string;
  personalityName: string;
  personalityDescription: string;
  strengths: string[];
  learningStyle: string;
  careerSuggestions: string[];
  schools: any[];
  completedDate: string;
}

export const generatePDFReport = (data: ReportData): void => {
  // Create a new window for the PDF content
  const printWindow = window.open('', '_blank');
  
  if (!printWindow) {
    alert('Please allow popups to download your report');
    return;
  }
  
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Psychometric Assessment Report - ${data.studentName}</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          margin: 0;
          padding: 20px;
          color: #333;
        }
        .header {
          text-align: center;
          border-bottom: 3px solid #2563eb;
          padding-bottom: 20px;
          margin-bottom: 30px;
        }
        .header h1 {
          color: #2563eb;
          margin: 0;
          font-size: 28px;
        }
        .header h2 {
          color: #64748b;
          margin: 10px 0 0 0;
          font-weight: normal;
        }
        .personality-type {
          background: linear-gradient(135deg, #2563eb, #3b82f6);
          color: white;
          text-align: center;
          padding: 30px;
          border-radius: 10px;
          margin: 20px 0;
        }
        .personality-type h3 {
          font-size: 36px;
          margin: 0;
          letter-spacing: 4px;
        }
        .personality-type h4 {
          font-size: 24px;
          margin: 10px 0 0 0;
          font-weight: normal;
        }
        .section {
          margin: 30px 0;
          padding: 20px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
        }
        .section h3 {
          color: #2563eb;
          border-bottom: 2px solid #e2e8f0;
          padding-bottom: 10px;
          margin-top: 0;
        }
        .schools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }
        .school-card {
          border: 1px solid #e2e8f0;
          padding: 15px;
          border-radius: 8px;
          background: #f8fafc;
        }
        .school-card h4 {
          color: #2563eb;
          margin: 0 0 10px 0;
        }
        .school-details {
          font-size: 14px;
          color: #64748b;
        }
        .match-score {
          background: #10b981;
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: bold;
        }
        .footer {
          text-align: center;
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid #e2e8f0;
          color: #64748b;
          font-size: 14px;
        }
        ul {
          padding-left: 20px;
        }
        li {
          margin: 8px 0;
        }
        @media print {
          .school-card {
            break-inside: avoid;
          }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>School Compass</h1>
        <h2>Psychometric Assessment Report</h2>
        <p><strong>Student:</strong> ${data.studentName}</p>
        <p><strong>Assessment Date:</strong> ${data.completedDate}</p>
      </div>

      <div class="personality-type">
        <h3>${data.personalityType}</h3>
        <h4>${data.personalityName}</h4>
        <p>${data.personalityDescription}</p>
      </div>

      <div class="section">
        <h3>Key Strengths</h3>
        <ul>
          ${data.strengths.map(strength => `<li>${strength}</li>`).join('')}
        </ul>
      </div>

      <div class="section">
        <h3>Learning Style</h3>
        <p>${data.learningStyle}</p>
      </div>

      <div class="section">
        <h3>Career Suggestions</h3>
        <ul>
          ${data.careerSuggestions.map(career => `<li>${career}</li>`).join('')}
        </ul>
      </div>

      <div class="section">
        <h3>Recommended Schools</h3>
        <p>Based on your personality type and preferences, here are the top schools matched for you:</p>
        <div class="schools-grid">
          ${data.schools.map(school => `
            <div class="school-card">
              <h4>${school.name}</h4>
              <div class="school-details">
                <p><strong>Type:</strong> ${school.type.charAt(0).toUpperCase() + school.type.slice(1)} School</p>
                <p><strong>Category:</strong> ${school.category.charAt(0).toUpperCase() + school.category.slice(1)}</p>
                <p><strong>Location:</strong> ${school.county}, ${school.region}</p>
                <p><strong>Boarding:</strong> ${school.boarding.charAt(0).toUpperCase() + school.boarding.slice(1)}</p>
                <p><span class="match-score">${school.matchScore}% Match</span></p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="footer">
        <p>This report was generated by School Compass - Your Guide to Educational Excellence</p>
        <p>For support, contact us at support@schoolcompass.co.ke</p>
      </div>
    </body>
    </html>
  `;
  
  printWindow.document.write(htmlContent);
  printWindow.document.close();
  
  // Wait for content to load, then print
  printWindow.onload = () => {
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 500);
  };
};
