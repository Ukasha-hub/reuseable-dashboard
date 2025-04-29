import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';


export const downloadCSV = (userList) => {
  const headers = ['Name', 'Job Title', 'Phone', 'Email', 'Address'];
  const rows = userList.map(user => [user.name, user.jobTitle, user.phone, user.email, user.address]);
  
  let csvContent = 'data:text/csv;charset=utf-8,';
  csvContent += headers.join(',') + '\n';
  rows.forEach(rowArray => {
    csvContent += rowArray.join(',') + '\n';
  });
  
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', 'user_list.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const downloadPDF = (userList) => {
    const doc = new jsPDF();
  
    doc.text('User List', 14, 10); // title text at top
  
    autoTable(doc, {
      startY: 20, // This must be inside the options object
      head: [['Name', 'Job Title', 'Phone', 'Email', 'Address']],
      body: userList.map(user => [
        user.name,
        user.jobTitle,
        user.phone,
        user.email,
        user.address,
      ]),
    });
  
    doc.save('user_list.pdf');
  };
