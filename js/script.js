window.onload = function(){
  var inp = document.getElementById("addButton");
  var task = document.getElementById("addInput");
  var list = document.getElementById("list");
  
  
  inp.onclick = function(){
    var entry = document.createElement("li");
    var cButton = document.createElement("button");
    var dButton = document.createElement("button");
    
    cButton.className += "btn btn-default pull-right completeButton";
    cButton.type = "submit";
    cButton.appendChild(document.createTextNode("Complete"));
    dButton.className += "btn btn-default pull-right deleteButton";
    dButton.type = "submit";
    dButton.appendChild(document.createTextNode("Delete"));
    
    entry.className += "list-group-item";
    entry.appendChild(document.createTextNode(task.value));
    entry.appendChild(dButton);
    entry.appendChild(cButton);
    list.appendChild(entry);
    
    dButton.onclick = function() {
      entry.parentNode.removeChild(entry);
    }
    
    cButton.onclick = function() {
      var cStatus = document.createElement("span");
      cStatus.className += "glyphicon glyphicon-ok pull-right completed";
      entry.appendChild(cStatus);
      cButton.parentNode.removeChild(cButton);
    }
  }
  
}




