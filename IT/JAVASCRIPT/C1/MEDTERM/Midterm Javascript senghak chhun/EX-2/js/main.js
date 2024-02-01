let movieList = [
    {
        id: 1,
        title: "កង្រីជាតិថ្មី",
        image: "images/poster-1.jpg",
        text: "រឿងព្រេងខ្មែរ​ ជារឿងនិទានប្រកបដោយគតិអប់រំទាក់ទិននឹងសីលធម៌សង្គម"
    },
    {
        id: 2,
        title: "ទាវសម័យថ្មី",
        image: "images/poster-2.jpg",
        text: "រឿងព្រេងខ្មែរ​ ជារឿងនិទានប្រកបដោយគតិអប់រំទាក់ទិននឹងសីលធម៌សង្គម"
    },
    {
        id: 3,
        title: "វិធាវី ២០២៤",
        image: "images/poster-3.jpg",
        text: "រឿងព្រេងខ្មែរ​ ជារឿងនិទានប្រកបដោយគតិអប់រំទាក់ទិននឹងសីលធម៌សង្គម"
    },
    {
        id: 4,
        title: "កាកី កែខ្លួន",
        image: "images/poster-4.jpg",
        text: "រឿងព្រេងខ្មែរ​ ជារឿងនិទានប្រកបដោយគតិអប់រំទាក់ទិននឹងសីលធម៌សង្គម"
    },
    {
        id: 5,
        title: "កុលាបប៉ៃលិន ថ្មី",
        image: "images/poster-5.jpg",
        text: "រឿងព្រេងខ្មែរ​ ជារឿងនិទានប្រកបដោយគតិអប់រំទាក់ទិននឹងសីលធម៌សង្គម"
    },
    {
        id: 6,
        title: "ស្មេហ៍ក្រោមពន្លឺច៍ន្ទ្រា",
        image: "images/poster-6.jpg",
        text: "រឿងព្រេងខ្មែរ​ ជារឿងនិទានប្រកបដោយគតិអប់រំទាក់ទិននឹងសីលធម៌សង្គម"
    },
];


const createPoster = (title, image, content) => {
    // TODO: create poster with different content here
    let poster = document.createElement('div');
    let poster_img = document.createElement('div');
    let img = document.createElement('img');
    let poster_text = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    poster.className = 'poster';
    poster_img.className = 'poster-img';
    img.src = image;
    poster_text.className = 'poster-text';
    h1.textContent = title;
    p.textContent = content;

    poster_img.appendChild(img);
    poster_text.appendChild(h1);
    poster_text.appendChild(p);
    poster.appendChild(poster_img);
    poster.appendChild(poster_text)
    container.appendChild(poster)
}


// Main code 
const container = document.querySelector('.container');

// TODO: Call function to create poster with data here
for (let movie of movieList) {
    createPoster(movie.title, movie.image, movie.text)
}