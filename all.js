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
        updateList();
    }else{
        alert("請輸入內容!")
    }
});

// 新增代辦事項
const list = document.querySelector(".list");
const render = (data) =>{
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
    updateList();
});

// 切換 tab &修改完成狀態
const tab = document.querySelector(".tab");
const allTabs = document.querySelectorAll(".tab li");
let tabStatus = "";
tab.addEventListener("click",(e) =>{
    tabStatus = e.target.dataset.status;
    allTabs.forEach((item) =>{
        item.classList.remove("active");
    });
    e.target.classList.add("active");
    updateList();
})

const updateList = () =>{
    let showData = [];
    if(tabStatus === "待完成"){
       showData = data.filter((item) => item.check === ""); 
    }else if(tabStatus === "已完成"){
       showData = data.filter((item) => item.check === "checked");
    }else{
       showData = data;
    }
    const todoNum = document.querySelector(".todoNum");
    let todo = data.filter((item) => item.check === "");
    todoNum.textContent = todo.length;
    render(showData);
}