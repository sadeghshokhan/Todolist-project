const inputbox = document.getElementById('input-box');
const listcontainer = document.getElementById('list-container');

function addTask(){
    if( inputbox.value == "" ){
        alert ("please write something");
    }else{
        let liTag = document.createElement('li');
        liTag.innerHTML = inputbox.value;
        listcontainer.appendChild(liTag);
        let spanTag = document.createElement('span')
        spanTag.innerHTML = "&times"
        liTag.appendChild(spanTag)
    }
    inputbox.value = ""
    saveData()
}
/////////////////////////////////////////////////////////

listcontainer.addEventListener( 'click' , function(e){
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle('checked');
        saveData()
    }else if(e.target.tagName == 'SPAN'){
        e.target.parentElement.remove()
        saveData()
    }
});

function saveData(){
    localStorage.setItem('data' , listcontainer.innerHTML)
}

function showData(){
    listcontainer.innerHTML = localStorage.getItem('data')
}

showData()