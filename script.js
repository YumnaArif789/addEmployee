
const url = "http://localhost:3000/Inputs"
let tbody = document.querySelector('tbody')

function gettingData() {
    fetch(url).then(data => {
        return data.json()
    }).then(users => {
        console.log(users);
        tableData(users)
    })
}

function tableData(data) {
    let str = "";
    data.forEach(function (item) {

        str = str +
            `
    <tr>
        <td>${item.fullname}</td>
        <td>${item.Email}</td>
        <td>${item.Address}</td>
        <td>${item.Number}</td>
        <td>
        <span onClick="goToFormPage(${item.id})" class="material-symbols-outlined edit">edit</span>
        
        <span onClick="deleteData(${item.id})" class="material-symbols-outlined delete">delete</span>
        </td>
        </tr>
        `
    })
    tbody.innerHTML = str
}
gettingData()

function deleteData(id) {
    const deleteId = id
    console.log(deleteId);

    fetch (url + '/' +deleteId,{
        method: 'DELETE',
    })
}

function goToFormPage(id) {
    window.location.href = `form.html?id=${id}`;
    
    
}



