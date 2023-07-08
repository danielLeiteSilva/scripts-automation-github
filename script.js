const request = require('request')
const axios = require('axios')

const url = "https://api.github.com/users/danielLeiteSilva/repos"
const urlDelete = " https://api.github.com/repos/danielLeiteSilva/"

const options = {
  headers: {
    "Accept": "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "Authorization": ""
  }
}

async function getAllRepos(){
  const response = await axios.get(url, options) 
  return response.data
}

async function deleteRepo(repo) {
  const url = urlDelete + repo
  console.log(url)
  await axios.delete(url, options)
}

function listReposEmpty(listRepos) {
  return listRepos.filter(repo => repo.size === 0)
}

function names(list){
  const newList = []
  list.map(el => newList.push(el["name"]))
  return newList
}

async function main() {

  try {
    const listRepos = await getAllRepos()
    const repos = names(listRepos)
    console.log(listRepos)
  } catch (error) {
    console.log(error)
  }


}

main()