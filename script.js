var array = ["Bob", "Jim", "Matt", "Mary", "Suzy", "Sarah"]

array.forEach(function(items) {
    var li = document.createElement("li");
    var text = document.createTextNode(item);
    li.appendChild(text);
    document.getElementById("myUl").appendChild(li);
});
<ul id="myUl"></ul>
