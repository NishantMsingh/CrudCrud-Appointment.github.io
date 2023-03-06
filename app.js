  
  let idedit=undefined;
  window.addEventListener('load', () => {
    // const message = new SpeechSynthesisUtterance("Nishant Kumarwebsite");
    // window.speechSynthesis.speak(message);
    
    axios.get("https://crudcrud.com/api/6fca7c9853ba4cf5a97c7217c1b2528c/appoint")
    .then((res)=>{
      for(let i=0;i<res.data.length;i++)
      {
        // console.log(res.data);
        showdata(res.data[i]);
      }
    }).catch((error)=>{
      console.log(error);
    })

    
  });

  function showdata(data)
  {
    console.log(data);
    var tbl=document.getElementById('items');
var tr=document.createElement("tr");
var nid=document.createElement("td");
var name1=document.createElement("td");
var email1=document.createElement("td");
var phone1=document.createElement("td");
var btn=document.createElement("button");
var edit=document.createElement("button");
btn.classList="delete";
edit.classList="edit";
tr.appendChild(nid);
tr.appendChild(name1);
tr.appendChild(email1);
tr.appendChild(phone1);
tr.appendChild(document.createElement("td").appendChild(btn));
tr.appendChild(document.createElement("td").appendChild(edit));

nid.appendChild(document.createTextNode(data._id));
name1.appendChild(document.createTextNode(data.name));
email1.appendChild(document.createTextNode(data.email));
phone1.appendChild(document.createTextNode(data.phone));
btn.appendChild(document.createTextNode("Remove"));
edit.appendChild(document.createTextNode("Edit"));
tbl.appendChild(tr);
  }
  // window.addEventListener('load', () => {
  //   const message = new SpeechSynthesisUtterance('Hello, welcome to my website');
  //   const voices = window.speechSynthesis.getVoices();
  //   const femaleVoice = voices.find(voice => voice.name === 'Google UK English Female');
  //   message.voice = femaleVoice;
  //   window.speechSynthesis.speak(message);
  // });
const app=document.getElementById("Appoint");

        app.addEventListener('submit',additm);

function additm(e)
{ 
  e.preventDefault();
  if(idedit===undefined)
  {
    var name=document.getElementById("name").value;
    var phone=document.getElementById("phone").value;
    var email=document.getElementById("email").value;
    document.getElementById("name").value="";
    document.getElementById("phone").value="";
    document.getElementById("email").value="";
    var obj={
          name:name,
          phone:phone,
          email:email,
    };

    axios.post("https://crudcrud.com/api/6fca7c9853ba4cf5a97c7217c1b2528c/appoint",obj)
    .then((res)=>{
      console.log(res.data);
    }).catch((error)=>{console.log(error)});
  //  Add route 





localStorage.setItem(`${email}`,JSON.stringify(obj));
//creating a component to add in Table

var tbl=document.getElementById('items');
var nid=document.createElement("td");
var tr=document.createElement("tr");
var name1=document.createElement("td");
var email1=document.createElement("td");
var phone1=document.createElement("td");
var btn=document.createElement("button");
var edit=document.createElement("button");
btn.classList="delete";
edit.classList="edit";
tr.appendChild(nid);
tr.appendChild(name1);
tr.appendChild(name1);
tr.appendChild(email1);
tr.appendChild(phone1);
tr.appendChild(document.createElement("td").appendChild(btn));
tr.appendChild(document.createElement("td").appendChild(edit));
nid.appendChild(document.createTextNode("#00XXXX"));
name1.appendChild(document.createTextNode(name));
email1.appendChild(document.createTextNode(email));
phone1.appendChild(document.createTextNode(phone));
btn.appendChild(document.createTextNode("Remove"));
edit.appendChild(document.createTextNode("Edit"));
tbl.appendChild(tr);

  }
  else{
   
    var name=document.getElementById("name").value;
    var phone=document.getElementById("phone").value;
    var email=document.getElementById("email").value;
    document.getElementById("name").value="";
    document.getElementById("phone").value="";
    document.getElementById("email").value="";
    var obj={
          name:name,
          phone:phone,
          email:email,
    };

    axios.put(`https://crudcrud.com/api/6fca7c9853ba4cf5a97c7217c1b2528c/appoint/${idedit}`,obj)
    .then((res)=>{
      console.log(res.data);
      idedit=undefined;
    }).catch((error)=>{console.log(error)});
  //  Add route 





localStorage.setItem(`${email}`,JSON.stringify(obj));
//creating a component to add in Table

var tbl=document.getElementById('items');
var nid=document.createElement("td");
var tr=document.createElement("tr");
var name1=document.createElement("td");
var email1=document.createElement("td");
var phone1=document.createElement("td");
var btn=document.createElement("button");
var edit=document.createElement("button");
btn.classList="delete";
edit.classList="edit";
tr.appendChild(nid);
tr.appendChild(name1);
tr.appendChild(name1);
tr.appendChild(email1);
tr.appendChild(phone1);
tr.appendChild(document.createElement("td").appendChild(btn));
tr.appendChild(document.createElement("td").appendChild(edit));
nid.appendChild(document.createTextNode(idedit));
name1.appendChild(document.createTextNode(name));
email1.appendChild(document.createTextNode(email));
phone1.appendChild(document.createTextNode(phone));
btn.appendChild(document.createTextNode("Remove"));
edit.appendChild(document.createTextNode("Edit"));
tbl.appendChild(tr);

  }

   
}









const itemList=document.getElementById("items");
// Delete Event 
itemList.addEventListener('click',deleList);
function deleList(e)
{
  if(e.target.classList.contains('delete'))
  {
   if(confirm("Are you sure?"))
   {
 
    var tr=e.target.parentElement;
    var temp=tr.children[1].textContent;

    itemList.removeChild(tr);
    axios.delete(`https://crudcrud.com/api/6fca7c9853ba4cf5a97c7217c1b2528c/appoint/${tr.children[0].textContent}`)
    .catch((e)=>{
      alert("Something is wrong cant delete from the server");
    })
   }
  }
  else if(e.target.classList.contains('edit'))
  {
   
    let tr=e.target.parentElement;
    let id1=tr.children[0].textContent;
    let name1=tr.children[1].textContent;
    let email1=tr.children[2].textContent;
    let phone1=tr.children[3].textContent;
    // axios.put(`https://crudcrud.com/api/6fca7c9853ba4cf5a97c7217c1b2528c/appoint/${tr.children[0].textContent}`)
    // .then((res)=>{})
    // .catch((e)=>{
    //   alert(e);
    // })
    idedit=id1;
    document.getElementById("__id").value=id1;
    document.getElementById("name").value=name1;
    document.getElementById("email").value=email1;
    document.getElementById("phone").value=phone1;
    itemList.removeChild(tr);
  }
}

