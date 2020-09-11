function getJSON(file,callback){
    var xhr=new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
       xhr.open("GET",file,true);
       xhr.onreadystatechange = function(){
        if (xhr.readyState =="4" && xhr.status ===200) {
             callback(xhr.responseText);
        }
       }
      xhr.send(); 
   }
   
   // calling the function
   getJSON("./data.json",function(text) {
    var d = JSON.parse(text);
    console.log(d);
    basic_details(d.persons);
   })
   var main=document.querySelector(".parent-div");
   var card0=document.querySelector(".card0");
   var card1=document.querySelector(".card1");
    
   
   function basic_details(SDC){
   
       var img0=document.createElement("img");
       img0.setAttribute("style","border-radius:100%;");
       var img1=document.createElement("img");
       img1.setAttribute("style","border-radius:100%;");
       img0.src=SDC[0].photo;
       img1.src=SDC[1].photo;
       card0.appendChild(img0);
       card1.appendChild(img1);
       var n0=document.createElement("h1");
       var n1=document.createElement("h1");
       n0.textContent=SDC[0].name;
       n1.textContent=SDC[1].name;
       card0.appendChild(n0);
       card1.appendChild(n1);
       var n2=document.createElement("h1");
       var n3=document.createElement("h1");
       n2.textContent=SDC[0].email;
       n3.textContent=SDC[1].email;
       card0.appendChild(n2);
       card1.appendChild(n3);
    const btn1 = document.createElement("button");
    const btn2 = document.createElement("button");
    btn1.innerText = "View Resume";
    btn1.setAttribute("class","btn-primary");
    btn2.innerText = "View Resume";
    btn2.setAttribute("class","btn-primary");
    btn1.addEventListener('click', function () {
        openInNewTab('./resume/ruchitaresume.html')
    });
    btn2.addEventListener('click', function () {
        openInNewTab('resume/vyshuresume.html')
    });
     
    card0.appendChild(btn1);
    card1.appendChild(btn2);
    }

   function openInNewTab(url) {
    const win = window.open(url, '_blank');
    win.focus();
  }
   
 