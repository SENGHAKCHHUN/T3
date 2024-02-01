const createPoster = () => {
   // TODO: Create poster here
   let poster = document.createElement('div');
   let poster_img = document.createElement('div');
   let img = document.createElement('img');
   let poster_text = document.createElement('div');
   let h1 = document.createElement('h1');
   let p = document.createElement('p');

   poster.className = 'poster';
   poster_img.className = 'poster-img';
   img.src = 'images/poster.jpg';
   poster_text.className = 'poster-text';
   h1.textContent = 'កង្រីជាតិថ្មី';
   p.textContent = 'រឿងព្រេងខ្មែរ​ ជារឿងនិទានប្រកបដោយគតិអប់រំទាក់ទិននឹងសីលធម៌សង្គម និងសៀវភៅរូបភាពសំរាប់កុមារជាដើម។'

   poster_img.appendChild(img);
   poster_text.appendChild(h1);
   poster_text.appendChild(p);
   poster.appendChild(poster_img);
   poster.appendChild(poster_text)
   container.appendChild(poster)
}

// Main code 
const container = document.querySelector('.container');
// TODO:  Call function to create 10 poster here
for (let i = 0; i<10; i++){
   createPoster()
}
