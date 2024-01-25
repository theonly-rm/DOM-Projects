let btn = document.querySelector("button")

flag=0;

btn.addEventListener("click",function(){
    if(flag==0) {
        btn.style.backgroundColor= "Green";
        btn.innerHTML="Remove Friend";
        flag=1;
        alert("Friend Request sent");
    }
    else{
        btn.style.backgroundColor= "blue";
        btn.innerHTML="Add Friend";
        flag=0;
        alert("Friend Removed");
    }
})