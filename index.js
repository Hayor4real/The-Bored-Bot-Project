
document.getElementById("button").addEventListener("click", function(){
    
    fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {document.getElementById("activity").textContent = data.activity
    document.getElementById("title").textContent = "Happy Bot"
    document.body.classList.add("fun")
    document.getElementById("title").classList.add("color")
    document.getElementById("activity").classList.add("color")
})
    
    
})



