let addBtn = document.getElementById('button');
let tableData = document.getElementById('employee');
let removeData = document.querySelectorAll('.remove_item');

let id = []
let previousId = 0;

addBtn.addEventListener("click", (e) => {

    id = document.getElementById('id').value;
    let nameval = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let gender = document.getElementById('gender').value;


    console.log(id);

    let values = `<tr id="${id}">
	<td>${id} </td>
	<td>${nameval}</td>
	<td>${age}</td>
	<td>${gender}</td>	
    <td><input type="button" onclick="removeEmployee(${id})" value="Delete"></td>	
</tr>`;

    var myEle = document.getElementById(id);
    // check if values are empty
    if (id == "" || nameval == "" || age == "") {
        alert("Please fill the data properly!");
        throw new Error("Please fill the data properly!");
    }
    // check if id  are same
    else if (myEle) {
        var myEleValue = myEle.value;
        alert("Please add different id");
        throw new Error("Please add different id!");
    }
    // check age is between 19 to 60
    else if (age <= 18 || age > 60) {
        alert("Please enter the age between 18 to 60.");
        throw new Error("Please enter the age between 18 to 6o.");
    }
    // check if same id is added after deletion
    else if (id == previousId) {
        alert("Please dont use previous id");
        throw new Error("Please dont use previous id!");
    }
    else {

        tableData.innerHTML += values;
    }
});

function removeEmployee(id) {
    var element = document.getElementById(id);
    element.remove();
    previousId = id;
}

// function editEmployee(id){
//     var element = document.getElementById(id);
//     element.pa
// }