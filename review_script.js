let re = document.querySelector("#review_button");
let text = document.querySelector("#review_text");
let table = document.querySelector(".review_table");
let m = document.querySelector(".review_message");
re.addEventListener('click',()=>{
    let val = Math.floor(Math.random() * 10)%5;
    table.innerHTML += `<tr>
    <th><img src="A${val}.png" id="img"></th>
    <td>${text.value}</td>
</tr>`;
m.innerHTML = "Thanks for Contributing.. your review has been added at the bottom temporarely and will be checked for authenticit before adding permanently";
setTimeout(() => {
    m.innerHTML = "Contribute a Review";
}, 8000);
});