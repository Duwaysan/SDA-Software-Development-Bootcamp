# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Relational Database Modeling

# RESTful Routing Lab

### **What is RESTful Routing?**
RESTful routing is a set of principles used in web development to create clean, organized, and predictable URLs for an API.  

REST stands for **Representational State Transfer**, which is a way of designing APIs that follow standardized rules.

## INSTRUCTIONS:
Convert the ERD Diagram into RESTful routes for the four entities. Your four entities should have **FULL CRUD**.

Resources:
- Student
- Address
- Instructor
- Course


![](./images/erd_cardinality.png)
![](./images/erd.png)

------

Use the table below as an example / starting point to generate your routing tables. 

<table border="1" width="100%">
    <thead>
        <tr>
            <th width="15%">Entity</th>
            <th width="25%">HTTP Method</th>
            <th width="50%">Endpoint</th>
            <th width="10%">Payload Required?</th>
        </tr>
    </thead>
    <tbody>
        <tr><td>Users</td><td>GET</td><td>/users</td><td>No</td></tr>
        <tr><td>Users</td><td>GET</td><td>/users/{id}</td><td>No</td></tr>
        <tr><td>Users</td><td>POST</td><td>/users</td><td>Yes</td></tr>
        <tr><td>Users</td><td>PUT</td><td>/users/{id}</td><td>Yes</td></tr>
        <tr><td>Users</td><td>DELETE</td><td>/users/{id}</td><td>No</td></tr>
    </tbody>
</table>

## RESTful-API routes
### Students
<table border="1" width="100%">
    <thead>
        <tr>
            <th width="15%">Entity</th>
            <th width="25%">HTTP Method</th>
            <th width="50%">Endpoint</th>
            <th width="10%">Payload Required?</th>
        </tr>
    </thead>
    <tbody>
        <tr><td>Students</td><td>GET</td><td>/Students</td><td>No</td></tr>
        <tr><td>Students</td><td>GET</td><td>/Students/Student_id</td><td>No</td></tr>
        <tr><td>Students</td><td>POST</td><td>/Students</td><td>Yes</td></tr>
        <tr><td>Students</td><td>PUT</td><td>/Students/student_id</td><td>Yes</td></tr>
        <tr><td>Students</td><td>DELETE</td><td>/Students/student_id</td><td>No</td></tr>
    </tbody>
</table>

### Addresses
<table border="1" width="100%">
    <thead>
        <tr>
            <th width="15%">Entity</th>
            <th width="25%">HTTP Method</th>
            <th width="50%">Endpoint</th>
            <th width="10%">Payload Required?</th>
        </tr>
    </thead>
    <tbody>
        <tr><td>Address</td><td>GET</td><td>/Addresses</td><td>No</td></tr>
        <tr><td>Address</td><td>GET</td><td>/Addresses/Addresses_id</td><td>No</td></tr>
        <tr><td>Address</td><td>POST</td><td>/Students/Student_id/Addresses</td><td>Yes</td></tr>
        <tr><td>Address</td><td>PUT</td><td>/Addresses/Address_id</td><td>Yes</td></tr>
        <tr><td>Address</td><td>DELETE</td><td>/Address/Address_id</td><td>No</td></tr>
    </tbody>
</table>

### Instructors
<table border="1" width="100%">
    <thead>
        <tr>
            <th width="15%">Entity</th>
            <th width="25%">HTTP Method</th>
            <th width="50%">Endpoint</th>
            <th width="10%">Payload Required?</th>
        </tr>
    </thead>
    <tbody>
        <tr><td>Instructors</td><td>GET</td><td>/Instructors</td><td>No</td></tr>
        <tr><td>Instructors</td><td>GET</td><td>/Instructors/Instructor_id</td><td>No</td></tr>
        <tr><td>Instructors</td><td>POST</td><td>/Instructors</td><td>Yes</td></tr>
        <tr><td>Instructors</td><td>PUT</td><td>/Instructors/Instructor_id</td><td>Yes</td></tr>
        <tr><td>Instructors</td><td>DELETE</td><td>/Instructors/Instructor_id</td><td>No</td></tr>
    </tbody>
</table>

### Courses
<table border="1" width="100%">
    <thead>
        <tr>
            <th width="15%">Entity</th>
            <th width="25%">HTTP Method</th>
            <th width="50%">Endpoint</th>
            <th width="10%">Payload Required?</th>
        </tr>
    </thead>
    <tbody>
        <tr><td>Courses</td><td>GET</td><td>/Courses</td><td>No</td></tr>
        <tr><td>Courses</td><td>GET</td><td>/Courses/Courses_id</td><td>No</td></tr>
        <tr><td>Courses</td><td>POST</td><td>/Courses</td><td>Yes</td></tr>
        <tr><td>Courses</td><td>PUT</td><td>/Courses/Course_id</td><td>Yes</td></tr>
        <tr><td>Courses</td><td>DELETE</td><td>/Courses/Course_id</td><td>No</td></tr>
    </tbody>
</table>


### Student-Course/Instructor-Course
<table border="1" width="100%">
    <thead>
        <tr>
            <th width="15%">Entity</th>
            <th width="25%">HTTP Method</th>
            <th width="50%">Endpoint</th>
            <th width="10%">Payload Required?</th>
        </tr>
    </thead>
    <tbody>
        <tr><td>Courses, Students</td><td>POST</td><td>/Student/Student_id/Courses/Course_id</td><td>Yes</td></tr>
        <tr><td>Courses, Instructors</td><td>POST</td><td>Instructors/Instructor_id/Courses/Courses_id</td><td>Yes</td></tr>
        <tr><td>Courses, Students</td><td>DELETE</td><td>/Student/Student_id/Courses/Course_id</td><td>Yes</td></tr>
        <tr><td>Courses, Instructors</td><td>DELETE</td><td>Instructors/Instructor_id/Courses/Courses_id</td><td>Yes</td></tr>
    </tbody>
</table>


