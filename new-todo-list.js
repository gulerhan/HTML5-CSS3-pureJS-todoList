document.getElementById("inputId").addEventListener('click', addItemFn)


function  addItemFn(){
    if(showMessage()){
        var itemListElm = document.getElementById("itemList");
        var item = document.createElement("div");
        var input = document.getElementById("todoInput");
        item.classList.add("todo-item");
        item.innerHTML = `
                    <p class="todo-text">${input.value}</p>
                    <div class="action-box">
                        <input type="checkbox" onclick="edited(this)" name="edit" id="edit">
                        <button onclick="deleteItemFn(this)" class="icon"><i class="fas fa-trash fa-1x"></i></button>
                    </div>
        `
        itemListElm.appendChild(item);
        input.value = "";

    }
}

function deleteItemFn(el){
    var parentElement = el.closest(".todo-item");
    parentElement.remove();
}

function showMessage() {
    var value = document.getElementById('todoInput').value;
    if (value == '' || value == null) {
       alert("Lütfen boş geçmeyiniz");
       return false;
    }else{
        return true;
    }
}

function edited(el){
    var parentElement = el.closest(".todo-item");
    var childElement = parentElement.querySelector('.todo-text');
    
    if(el.checked){
        childElement.classList.add('with-through');
    }else{
        childElement.classList.remove('with-through');
    }
}

function selectAll(el){
    let throughElements =  document.getElementsByClassName("todo-text with-through");
    if(el.checked){
        for (const child of throughElements) {
            child.closest('.todo-item').classList.add('displayNone');
          }
    }else{
        for (const child of throughElements) {
            child.closest('.todo-item').classList.remove('displayNone');
          }
    }
    console.log("throughElements",throughElements)
}