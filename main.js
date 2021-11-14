const LinksSocialMedia = { 
    github: 'vanessabeltrami',
    youtube: 'vanessabeltrami',
    facebook: 'vanessa.beltrami.5',
    instagram:'victorbrancaglion',
    twiter: 'maykbrito'  
}

  function changeSocialMediaLinks() {
   for (let li of socialLinks.children) {
   const social = li.getAttribute('class')

   li.children[0].href =`https://${social}.com/${LinksSocialMedia[social]}`
   
   }      
  }
 changeSocialMediaLinks()

  function GitHubProfileInfos() {
  const url =`https://api.github.com/users/${LinksSocialMedia.github}`

  fetch (url)
  .then(response =>response.json())
  .then(data => {
    userName.textcontent = data.name
    userBio.textcontent = data.bio
    userLink.href = data.html_url
    userImage.src = data.avatar_url
  })  
  }
  GitHubProfileInfos() 