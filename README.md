# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Task :
Step form in 3 steps with email notification after submitting the form. Email msg : Thanks "Name" for submitting your enquiry for "Service". Our team will be in touch with you shortly..

Step 1 : Name
             Email
Step 2 : Phone no
Step 3 : Select your service (in dropdown : Technical services)

Submit Button

After submission : 
Thank you, we have received your enquiry and sent you email. Please check your mailbox

form ==> Name, Email, Phone no, Service(dropDown)  and Submit Button 
step-2 After Submit message popup --> Thank you Message we are showing
Step-3 We send a  Mail to User --> User Name , Service Name  and the message format
Problem --> How to Send A Mail--> NODEMAILER(backend), Emailjs(third-party)

problems: Validation problem