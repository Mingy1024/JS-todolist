const inputValue = document.querySelector(".inputValue");
const btn = document.querySelector(".btn_add");
const list = document.querySelector(".list");
let data = [];
btn.addEventListener("click",(e) => {
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
const render = () =>{
    let str = "";
    data.forEach((item) =>{
        str += `<li>
                  <label class="checkbox" for="">
                    <input type="checkbox" />
                    <span>${item.input}</span>
                  </label>
                  <a href="#" class="delete material-symbols-outlined">close</a>
                </li>`;
    })
    list.innerHTML = str;
}