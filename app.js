// var list = document.getElementById("list");

// function todo(){
// 	var todoitem= document.getElementById("todo-item");
// 	var li= document.createElement('li')
// 	var litext=document.createTextNode(todoitem.value)
// 	li.appendChild(litext)
// 	//list.appendChild(li)
// 	todoitem.value=""



// 	//delete button:
//     delbtn=document.createElement("button")
//     deltext=document.createTextNode("Delete")
//     //delbtn=appendChild(deltext)
//      //li.appendChild(delbtn)
//      delbtn=setAttribute("class","btn")
//      delbtn=setAttribute("onclick","deleteitem()")


// 	console.log(li)
// }


var list = document.getElementById("list");
function addTodo(){
	var todo_item = document.getElementById("todo-item") 
	if (todo_item.value === "") {
		alert("please enter something u want to do!!");
	}
	else{ 
		var li = document.createElement('li')
		var liText = document.createTextNode(todo_item.value)
		li.appendChild(liText)
	}
	
	("todo-item").value="";

	if (todo_item.value === "") {
		alert("please enter something u want to do!!");
	}
	else{ 
		document.getElementById('list').appendChild(li);
	}
	document.getElementById('todo-item').value="";


	var delbtn = document.createElement("button")
	var dltText =document.createTextNode("DELETE")
	delbtn.appendChild(dltText)
	li.appendChild(delbtn)

	delbtn.setAttribute("class","but1")
	delbtn.setAttribute("onclick","deleteItem(this)")

	var editbtn = document.createElement("button")
	var editText = document.createTextNode("EDIT")
	editbtn.appendChild(editText)
	li.appendChild(editbtn)

	editbtn.setAttribute("onclick","editItem(this)")

	list.appendChild(li)
	todo_item.value = ""
	console.log(li)
}   
function deleteItem(e){
    e.parentNode.remove()
}
function deleteAll(){
    list.innerHTML =""
}
function editItem(e){
    var val =prompt("enter Updated value",e.parentNode.firstChild.nodeValue )
    e.parentNode.firstChild.nodeValue = val;
}