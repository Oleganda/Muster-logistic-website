# Below are the detailed requirements:
 
1. Document Upload Functionality:
 
Users should be able to upload documents for a specified order.  
Supported document formats: .pdf and .docx.
Drag and drop functionality possible.
 
Methods: Mainly used npm-reactdropzone + videos on Youtube + ChatGPT for explanations of some moments 
Challenges: To structure everything. In the end it did not have a well structured component, it was hard to read. Had to do everything after

2. Document Categorization:
 
Upon uploading, users must classify the document as one of the following types:
Client Invoice
Supplier Invoice
CMR
 Insurance
 Driver License

3. Additional Information Based on Document Type:
 
For invoices (options 1, 2, and 3), prompt the user to enter the invoice number.
For Insurance (options 4) and driving License (option 5), request the company name associated with the document.

Challenge: When I upload the second file, information from the first is changing to the same name. Created separated Components with different props.description 
 
4. Save Function:
 
A 'Save' button should be visible only when all required data is entered.
Clicking 'Save' stores the file in a designated folder on the user’s hard drive.
 
5. Admin Panel Features:
 
Display a list of all files uploaded by users.
Allow administrators to add a document type, delete files, and rename files.
 
6. User Accessibility:
 
Users do not require a login to access this feature.
Users cannot view the list of uploaded files; this is reserved for admin access only.

