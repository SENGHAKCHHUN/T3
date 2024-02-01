let post = {
    id: 1,
    title: "Natural in the world",
    image: "https://www.pure-leisure.co.uk/wp-content/uploads/2019/03/3-Reasons-Why-Conservation-Is-So-Important.jpg",
    description: "Lorem ipsum dolor sitore aliquam ab sequi saepe facilis, ipsam illo modi cupiditate illum iure? Maiores suscipit dicta mollitia velit. Eveniet reprehenderit rem odio provident quibusdam consequatur aspernatur porro aliquam similique illo ut cum reiciendis amet placeat dolor possimus laboriosam, aliquid,",
    date: "14 / April / 2021",
    author: "Rady Cody"
};
let page = document.querySelector('body');

//1. create div with class name "container" and append it to "body"
let container = document.createElement('div');
container.className = 'container';
//2. create div with class name "card" and append it to "container" div
let card = document.createElement('div');
card.className = 'card';
container.appendChild(card)

//3. create div with class name "card-img" and append it to "card" div
let card_img = document.createElement('div');
card_img.className = 'card-img';
card.appendChild(card_img)
//4. create img tags with class name "img", use "src" attribute to display image and append it to "card-img" div
// example: sample.src = post.image;
let img = document.createElement('img');
img.className = 'img';
img.src = post.image;
card_img.appendChild(img);

//5. create div with class name "card-body" and append it to "card" div
let card_body = document.createElement('div');
card_body.className = 'card-body';
card.appendChild(card_body)
//6. create h2 tags with class name "card-title", textContent = post.title and append it to "card-body" div
let h2 = document.createElement('h2');
h2.setAttribute('class', 'card-title');
h2.textContent = post.title;
card_body.appendChild(h2)
//7. create p tags with class name "description",
// textContent = post.description
let p = document.createElement('p');
p.className = 'description';
p.textContent = post.description;
// and then apppend it to "card-body" div
card_body.appendChild(p)
//8. create div with class name "card-footer" and append it to "card" div
let card_footer = document.createElement('div');
card_footer.className = 'card-footer';
card.appendChild(card_footer) 
//9. create span tags with id name "date", textContent = post.date and append it to "card-footer" div 
let span = document.createElement('span');
span.setAttribute('id','date');
span.textContent = post.date;
card_footer.appendChild(span)
//10. create span tags with id name "author", textContent = post.author  and append it to "card-footer" 
let spanTag = document.createElement('span');
spanTag.setAttribute('id','author');
spanTag.textContent = post.author;
card_footer.appendChild(spanTag)



console.log(container)
console.log(page)
page.appendChild(container)