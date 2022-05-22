const searchBox = document.querySelector(".search_info")
const searchInput = document.querySelector(".search_input")
const wrapper = document.querySelector(".wrapper")

let url = 'https://api.github.com/users/'


searchBox.addEventListener("submit", (e) => {
    e.preventDefault()
    userdata(searchInput.value)
})


async function userdata(name) {
    try {
        const response = await fetch(url + name)
        const data = await response.json()
        wrapper.innerHTML = `     
    <div class="info">
             <img src="${data.avatar_url}" alt="babu">
              <h2>${data.name}</h2>
              <p>${data.bio}</p>
    <div class="repos">
     <ul>
         <li>${data.followers} Followers</li>
         <li>${data.following} Following</li>
         <li>${data.public_repos} Repos</li>
     </ul>
 </div>
 <div class="reposdata">
    <ul></ul>
 </div>
</div> `
        repodata(data)
    } catch (eror) {
        console.error("api is not correct")
    }
}
function repodata(data) {
    let repodatas = document.querySelector(".reposdata ul")   
    const babu = async()=>{
           const response = await fetch(data.repos_url)
           const  datas = await response.json()
           datas.map(e=>{
            repodatas.innerHTML += `  
            <li><a href="${e.html_url}">${e.name}</a></li>  `
           })
    }
    babu() 
}