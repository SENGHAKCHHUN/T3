
const clearInput = () => {
   //TODO: Clear data from input field
   firstName.value = '';
   lastName.value = '';
   province.value = '';
   sex.value = '';
   skills.value = '';
   comment.value = '';
}
const createRow = (event) => {
   // TODO: Create new row with data from input field
   event.preventDefault()
   let gender = '';
   for (let sex of genders) {
      if (sex.checked) {
         gender = sex.value
      }
   }
   let major = [];
   for (let skill of skills) {
      if (skill.checked) {
         major.push(skill.value)
      }
   }
   let tr = document.createElement('tr');
   let tdFirstName = document.createElement('td');
   let tdLastName = document.createElement('td');
   let tdProvince = document.createElement('td');
   let tdGender = document.createElement('td');
   let tdSkill = document.createElement('td');
   let tdComment = document.createElement('td')
   tdFirstName.textContent = firstName.value;
   tdLastName.textContent = lastName.value;
   tdProvince.textContent = province.value;
   tdGender.textContent = gender;
   tdSkill.textContent = major;
   tdComment.textContent = comment.value
   clearInput()
   tr.appendChild(tdFirstName)
   tr.appendChild(tdLastName)
   tr.appendChild(tdProvince)
   tr.appendChild(tdGender)
   tr.appendChild(tdSkill)
   tr.appendChild(tdComment)
   tbody.appendChild(tr)
   
}
// Main
const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const province = document.querySelector('#province');
const genders = document.querySelectorAll('input[type="radio"]');
const skills = document.querySelectorAll('.skill');
const comment = document.querySelector('#comment');
const tbody = document.querySelector('tbody');
const btnSubmit = document.querySelector('button');
// TODO: add event listeners to submit button
btnSubmit.addEventListener('click', createRow)