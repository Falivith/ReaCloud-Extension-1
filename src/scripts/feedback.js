const link = document.getElementById('link-input')

function save(){
    window.location.href = "./popup.html"
}

document.addEventListener('DOMContentLoaded', ()=>{
    button.addEventListener('click', save)
})

document.getElementById("buttonFechar").addEventListener("click", function() {
    window.close();
});
