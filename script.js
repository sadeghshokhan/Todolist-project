const inputbox = document.getElementById('input-box');
const listcontainer = document.getElementById('doing-list');
const doneList = document.getElementById("done-list");

function addTask(){
    if( inputbox.value == "" ){
        alert ("please write something");
    }else{
        let liTag = document.createElement('li');
        liTag.innerHTML = inputbox.value;
        listcontainer.appendChild(liTag);
        let span = document.createElement('span');
        span.innerHTML= '\u00d7';
        liTag.appendChild(span)
    }
    inputbox.value = ""
    saveData()
}
/////////////////////////////////////////////////////////

listcontainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        doneList.appendChild(e.target);
        e.target.classList.add('checked');
        saveData();
    }else if(e.target.tagName = 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
});

doneList.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        listcontainer.appendChild(e.target);
        e.target.classList.remove('checked');
        saveData();
    }else if(e.target.tagName = 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData(){
    localStorage.setItem('doing-data' , listcontainer.innerHTML)
    localStorage.setItem('done-data' , doneList.innerHTML)
}

function showData(){
    listcontainer.innerHTML = localStorage.getItem('doing-data')
    doneList.innerHTML= localStorage.getItem('done-data')
}

showData() 
