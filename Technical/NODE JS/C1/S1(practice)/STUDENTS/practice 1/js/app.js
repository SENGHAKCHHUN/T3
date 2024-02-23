// Start this project 
// and have a look in the 'Console' and the 'Network' tab in chrome
const studentsContainer = document.getElementById("studentsContainer");

function afterStudentRequest(response) {
  // TODO: Display the list of students in the DOM
  console.log("response from server:");
  console.log(response);
  console.log("data of response:");
  console.log(response.data);
  var data = response.data;
  for (let da of data){
    
    let li = document.createElement('li');
    li.textContent = 'name :' + da['name'];
    let nickname = document.createElement('p');
    nickname.textContent = 'nickname : ' + da['nickname'];
    let classStudent = document.createElement('p');
    classStudent.textContent = 'class : ' + da['class']
    studentsContainer.appendChild(li);
    studentsContainer.appendChild(nickname);
    studentsContainer.appendChild(classStudent);
  }
}

// The URL of the data we want to get
const STUDENT_URL = "data/students.json";

// We use Axios library to do a HTTP request to the server
// Request a GET on STUDENT_URL to get the data from the JSON
// Once done the function 'afterStudentRequest' will be called
axios.get(STUDENT_URL).then(afterStudentRequest);

