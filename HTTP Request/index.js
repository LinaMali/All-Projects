const container=document.querySelector(".container");
const title=document.querySelector(".title");
const btn=document.querySelector("#btn");

const url="https://jsonplaceholder.typicode.com/posts";

const fetchPosts=async()=>{
    const response=await fetch(url);
    const data=await response.json();

    const result = data.map(post =>{
        return `
          <div class="card">
        <div class="card-title">
        <h2>${post.title}</h2>
            <div class="card-body">
                <p>${post.body}</p>
            </div>
        </div>`;
    });
    container.innerHTML=result.join("");
};
btn.addEventListener("click",fetchPosts);
