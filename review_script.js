let re = document.querySelector("#review_button");
let text = document.querySelector("#review_text");
let table = document.querySelector(".review_table");
re.addEventListener('click',()=>{
    table.innerHTML = table.innerHTML + `<tr>
    <th><img src="A0.png" id="img"></th>
    <td>${text.value}</td>
</tr>`;
text.value = "Review added at the bottom";
});