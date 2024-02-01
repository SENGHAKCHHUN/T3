
const clearInput = () => {
   //TODO: Clear data from input field
   firstName.value = '';
   lastName.value = '';
   province.value = '';
   comment.value = '';
   for (let skill of skills){
      if (skill.checked){
         skill.checked = false
      }
   }
   for (let sex of genders){
      if (sex.checked){
         sex.checked = false
      }
   }
}

const createRow = (event) => {
   // TODO: Create new row with data from input field
   event.preventDefault()
   let row = document.createElement('tr');
   let tdFirstName = document.createElement('td');
   let tdLastName = document.createElement('td');
   let tdProvince = document.createElement('td');
   let tdGender = document.createElement('td');
   let tdSkill = document.createElement('td');
   let tdComment = document.createElement('td');
   tdFirstName.textContent = firstName.value;
   tdLastName.textContent = lastName.value;
   tdProvince.textContent = province.value;
   tdComment.textContent = comment.value;
   for (let sex of genders){
      if (sex.checked){
         tdGender.textContent = sex.value;
      }
   }
   let array = [];
   for (let skill of skills){
      if (skill.checked){
         array.push(skill.value)
      }
   }
   tdSkill.textContent = array
   row.appendChild(tdFirstName)
   row.appendChild(tdLastName)
   row.appendChild(tdProvince)
   row.appendChild(tdGender)
   row.appendChild(tdSkill)
   row.appendChild(tdComment)
   tbody.appendChild(row)
   clearInput()
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