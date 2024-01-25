let img = document.querySelector(".card img");
let heart = document.querySelector(".like");
let btn = document.querySelector(".love");
let save = document.querySelector(".save");
flag = 0;

img.addEventListener("dblclick", function(){
        heart.style.transform = 'translate(-50%,-50%) scale(1)';
        heart.style.opacity = 0.9;
        btn.innerHTML = '<i class="ri-heart-fill"></i>';
        btn.style.color = "red";
        flag = 1;

        setTimeout(function(){
            heart.style.opacity = 0;
            heart.style.transform = 'translate(-50%,-50%) scale(0)';
        }, 1000)
})



btn.addEventListener("click", function(){
  if(flag == 0) {
    heart.style.transform = 'translate(-50%,-50%) scale(1)';
    heart.style.opacity = 0.9;
    btn.innerHTML = '<i class="ri-heart-fill"></i>';
    btn.style.color = "red";
    flag = 1;

    setTimeout(function(){
        heart.style.opacity = 0;
        heart.style.transform = 'translate(-50%,-50%) scale(0)';
    }, 1000)
  }
  else {
    btn.innerHTML = '<i class="ri-heart-line"></i>';
    btn.style.color = "black";
    flag = 0;
  }
})

save.addEventListener("click", function() {
  save.innerHTML = '<i class="ri-bookmark-fill"></i>';
})

flag2 = 0;
save.addEventListener("click", function() {
  if(flag2 == 0){
    save.innerHTML = '<i class="ri-bookmark-fill"></i>';
    flag2 = 1;
  }
  else {
    save.innerHTML = '<i class="ri-bookmark-line"></i>';
    flag2 = 0;
  }
  
})