let re = document.querySelector("#review_button");
let text = document.querySelector("#review_text");
let table = document.querySelector(".review_table");
let m = document.querySelector(".review_message");
re.addEventListener('click',()=>{
    table.innerHTML += `<tr>
    <th><img src="A0.png" id="img"></th>
    <td>${text.value}</td>
</tr>`;
m.innerHTML = "Thanks for Contributing your review has been added in the bottom";
setTimeout(() => {
    m.innerHTML = "Contribute a Review";
}, 4000);
});