// Objetos
const LinksSocialMedia = {
  github: 'rafaelfaroli',
  youtube: 'rafaelfaroli',
  facebook: 'rafaelfaroli',
  twitter: 'rafaelfaroli',
  instagram: 'rafaelfaroli'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    // alert(li.children[0].href)
    // const social = li.className
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/` + LinksSocialMedia[social]
  }
}

function getGithubUserData() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      fullName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userLogin.textContent = data.login
      userImg.src = data.avatar_url
    })
    .catch(err => {
      console.log(err)
    })
}

changeSocialMediaLinks()
getGithubUserData()

// Variáveis
// let permite multiplas atribuições mas somente uma definição
// const permite somente uma atribuição/definição

// Laço de repetição
// function changeSocialMediaLinks() {
//   for (let i = 0; i <= 10; i++) {
//     alert(i)
//   }
// }

// Selecionar elementos na página

// function changeSocialMediaLinks() {
//   document.getElementsByClassName('linkitem')
//   document.getElementById('userName').textContent = 'Rafael'
//   userName.textContent = 'Marcelo' // O JS identifica que se trata de um ID
// }
