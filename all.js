const inputValue = document.querySelector(".inputValue");
const addBtn = document.querySelector(".btn_add");
let data = [];
addBtn.addEventListener("click",(e) => {
    e.preventDefault();
    if(inputValue.value !== ""){
       let obj ={
        input: inputValue.value,
        id: new Date().getTime(),
        check: ""
        }
        data.unshift(obj);
        inputValue.value = "";
        render();
    }else{
        alert("請輸入內容!")
    }
});

// 新增代辦事項
const list = document.querySelector(".list");
const render = () =>{
    let str = "";
    data.forEach((item) =>{
        str += `<li data-id="${item.id}">
                  <label class="checkbox" for="">
                    <input type="checkbox" ${item.check}/>
                    <span>${item.input}</span>
                  </label>
                  <a href="#" class="delete material-symbols-outlined">close</a>
                </li>`;
    })
    list.innerHTML = str;
};

// 刪除單筆/切換打勾
list.addEventListener("click",(e) =>{
    let id = e.target.closest("li").getAttribute("data-id")
    if(e.target.classList.contains("delete")){
        e.preventDefault();
        let index = data.findIndex((item) => item.id == id);
        data.splice(index,1);
    }else{
        data.forEach((item) =>{
            if(item.id == id){
                if(item.check !== "checked"){
                    item.check = "checked";
                }else{
                    item.check = "";
                }
            }
        });
    }
    render();
});