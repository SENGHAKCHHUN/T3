let tbody = document.querySelector('tbody');
for (let tr of tbody.children){
    for (let td of tr.children){
        console.log(td.textContent)
    }
}


