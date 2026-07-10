// 页面加载完成提示
window.onload = function(){
    console.log("濮阳小吃网站加载完成！");
}
// 美食卡片点击弹窗（简易）
let cards = document.querySelectorAll(".food-card");
cards.forEach(item=>{
    item.addEventListener("click",()=>{
        let name = item.querySelector("h3").innerText;
        alert(`你选中了濮阳特色：${name}\n前往美食页面查看详细介绍`);
    })
})
