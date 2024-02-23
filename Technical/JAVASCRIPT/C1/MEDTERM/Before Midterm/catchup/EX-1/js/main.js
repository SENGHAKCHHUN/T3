// let container = document.querySelector('.container');
// console.log(container)
// let btn = document.querySelector('button');
// console.log(btn)
// let p = document.createElement('p');
// p.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi perspiciatis, perferendis enim ex sequi accusantium voluptatum minus reiciendis exercitationem incidunt id aut voluptatibus dolor sed quos totam minima labore eos!';
// let run = true;
// btn.addEventListener('click', function(){
//     if (run){
//         container.appendChild(p)
//         btn.textContent = 'See less'
//         run = false;
//     }else{
//         p.remove();
//         btn.textContent = 'Show all information below'
//         run = true;
//     }  
// })


let container = document.querySelector('.container');
let btn = document.querySelector('button');
let run = true;
let babyShark = document.createElement('p');
let h1 = document.createElement('h1');
babyShark.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti nam assumenda facere optio vitae nostrum sapiente dolorem. Eveniet, perspiciatis molestias dolorem porro numquam assumenda autem neque vel beatae ipsam dignissimos!';
btn.addEventListener('click', function(){
    if (run){
        container.appendChild(babyShark)
        btn.textContent = 'see less information below'
        run = false
    }else{
        babyShark.remove();
        btn.textContent = 'Show all information below';
        run = true;
    }
})
