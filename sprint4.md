
# Sprint 4
4 April 2022 - 20 April 2022

# Description of our application
"Nest Manager" is a web platform that provides rental management services. It provides three different dashboard interfaces (Admin, Maintenance Person, Tenant) depending on the user's authorization. 
The Admin can choose to accept or reject an applicant, assign a maintenance person to a maintenance request. The Tenant can generate maintenance requests, view them and pay rent(simulation). 
Maintenance person can view and manage/clear maintenance requests once they are assigned to him/her. 
To explain how an apartment space can utilize this service, we have partially hosted such dummy apartment's website which can use the services provided by Nest Manager.

**Deployment URL for the Apartment is**: https://strong-eclair-81773a.netlify.app/

### Deployment site screenshots
<img width="500" alt="" src="https://github.com/mahajanhrishikesh/SE-Project/blob/main/Misc%20Resources/cui_ss1.png">
<img width="500" alt="" src="https://github.com/mahajanhrishikesh/SE-Project/blob/main/Misc%20Resources/cui_ss2.png">
<img width="500" alt="" src="https://github.com/mahajanhrishikesh/SE-Project/blob/main/Misc%20Resources/cui_ss3.png">
<img width="500" alt="" src="https://github.com/mahajanhrishikesh/SE-Project/blob/main/Misc%20Resources/cui_ss4.png">
<img width="500" alt="" src="https://github.com/mahajanhrishikesh/SE-Project/blob/main/Misc%20Resources/cui_ss5.png">
<img width="500" alt="" src="https://github.com/mahajanhrishikesh/SE-Project/blob/main/Misc%20Resources/cui_ss6.png">



### Tech Stack:

**Front-End:**
<ul>
  <li>ReactJS</li>
  <li>React-Bootstrap</li>
  <li>Core-Ui React</li>
  <li>Cypress</li>
</ul>

**Back-End:**
<ul>
  <li>Go</li>
  <li>GoFiber Framework</li>
  <li>Gorm Framework</li>
  <li>SQLite</li>
</ul>

### Running the code
<ol>
  <li>Clone this repository</li>
  <li>Install the above mentioned dependencies</li>
  <li>Change the directory to new-backend. Run the command "go run ."</li>
  <li>This will start the server at localhost:8080</li>
  <li>Go to the new-frontend directory: npm start</li>
  <li>This will start the frontend at localhost:3000</li>
</ol>

# Demo video functionality

https://user-images.githubusercontent.com/41487383/164581680-8afa820e-6482-42e1-89c3-01c8afbc26f8.mp4


 Demo Video Link: https://drive.google.com/file/d/1ac-w272xbB-fqh6v2dAYLLU3USVMoISl/view?usp=sharing

# Cypress test video


https://user-images.githubusercontent.com/41487383/164581735-cf5b0b9a-55c5-4a38-947c-e6f49802d7db.mp4


 Cypress Test Video Link: https://drive.google.com/file/d/11shVa0iB-_vDK554tQV6OIGx5pSEZ1jC/view?usp=sharing

# Backend unit test video

https://user-images.githubusercontent.com/41487383/164581886-d01a9f09-cafd-4b39-96db-ce3d0981f0b6.mp4

Backend Test video link: https://drive.google.com/file/d/1ZF6dFUbCn2QR8jj0kH8l_BIRPobcfr9O/view?usp=sharing

# Link to API Documentation
https://github.com/mahajanhrishikesh/SE-Project/wiki/Backend-API-Documentation

# Link to Project board
https://github.com/mahajanhrishikesh/SE-Project/projects

Do look into the closed sprint boards: https://github.com/mahajanhrishikesh/SE-Project/projects?query=is%3Aclosed

# Link to Sprint 4 deliverables
https://github.com/mahajanhrishikesh/SE-Project/projects/4

### Sprint 4 Goals 
<ul>
  <li>Migrating entire backend from Gin-gonic to GoFiber</li>
  <li>Login and conditional rendering of pages depending on user's authorization</li>
  <li>Provision of three dashboard interfaces(Admin, Tenant, Maintenance Person)</li>
  <li>Completion of Applicant flow(Accepting or rejecting the applicant by the admin)</li>
  <li>Completion of Maintenance Request flow for Admin(Assigning maintenance request to a maintenance person)</li>
  <li>Completion of Maintenance Request flow for Maintenance Person(Viewing and Managing maintenance requests)</li>
  <li>Completion of Tenant Dashboard and implemented features of generating, managing maintenance requests. Rent Payment simulation added</li>
  <li>Complete backend documentation</li>
  <li>Backend tests for newly added APIs</li>
  <li>Frontend tests using Cypress</li>
</ul>

# Frontend Team Members
<ul>
  <li>Hrishikesh Mahajan</li>
  <li>Vinayak Bajpeyi</li>
  <li>Yash Shekhadar</li>
</ul>

# Backend Team Members
<ul>
  <li>Hrishikesh Mahajan</li>
  <li>Vinayak Bajpeyi</li>
  <li>Yash Shekhadar</li>
</ul>
