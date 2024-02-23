axios.get('http://localhost:3000/Books').then((res)=> {
    let data = res.data;
    let container = document.querySelector('.container');
    data.forEach(element => {
        let btn = document.createElement('button');
        btn.textContent = element.name;
        btn.classList.add("btn btn-primary");
        container.appendChild(btn);
    });
})