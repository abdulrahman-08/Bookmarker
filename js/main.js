var siteName = document.getElementById("userName")
var siteLink = document.getElementById("urlName")
var arrList;
if(localStorage.getItem("datashow")==null){
  arrList=[];

}else{
  arrList=JSON.parse(localStorage.getItem("datashow"))
  showdata();
}

function addsite() {
  if(validatelink()==true)
  {
    var Link = {
      name: siteName.value,
      urlLink: siteLink.value,
  
    }
    arrList.push(Link);
    localStorage.setItem("datashow",JSON.stringify(arrList))
    showdata();
    siteName.value=''
    siteLink.value=''
  }
  else {
    alert(`Site Name or Url is not valid, Please follow the rules below :

    1-Site name must contain at least 3 characters
    2-Site URL must be a valid one
    3-Site name must be English`)
  }
  
}
function showdata() {
  var temp = '';
  for (var i = 0; i < arrList.length; i++) {
    temp += `  <tr> <td class="text-center">`+(i+1)+`</td>
                 <td class="text-center">`+arrList[i].name+`</td>
               <td class="text-center"><button onclick="visit(`+i+`)" class="btn visitbtn text-white "><i
              class="fa-solid fa-eye pe-2"></i> Visit</button></td>
              <td class="text-center"><button onclick="deletedata(`+i+`)" class="btn  deletebtn text-white "><i
              class="fa-solid fa-trash-can"></i> Delete</button></td>  </tr>`
  }
  document.getElementById("myData").innerHTML=temp;
}
function deletedata(x) {
  arrList.splice(x,1)
  showdata();
  localStorage.setItem("datashow",JSON.stringify(arrList))
}
function visit(x) {
  var link=arrList[x].urlLink
  window.open("https://"+link)
}
function validatelink() {
  var regex1= /^[a-zA-Z0-9 ]+$/;
  var regex2= /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;
  return regex1.test(siteName.value)&&regex2.test(siteLink.value)&&siteName.value.length>=3


  
}