const loadPage = function(){
    let content = document.getElementById("content");
    let header = document.createElement("div");
    
    let con = document.createElement("div");
    con.className = "switch";

    let tab1 = document.createElement("button");
    let tab2 = document.createElement("button");
    let tab3 = document.createElement("button");
    tab1.innerHTML = "Home";
    tab2.innerHTML = "Contact";
    tab3.innerHTML = "About";

    tab1.className = "home";
    tab2.className = "contact";
    tab3.className = "about";
    header.append(tab1,tab2,tab3);
    content.append(header,con);

}



// const myName = (name) => 'Hi! My name is ' + name;
// const page = () => console.log("Wtf");

export {
   loadPage
};

