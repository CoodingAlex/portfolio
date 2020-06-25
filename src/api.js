const apiUrl =
  process.env.API_URL || 'https://coodingalex-portfolio-5lh2fwblb.vercel.app'
console.log(process.env.API_URL)

async function getProjects() {
  const data = await fetch(`${apiUrl}/portfolio/projects`)
  return data.json()
}
async function getAbout() {
  const data = await fetch(`${apiUrl}/portfolio/about`)

  return data.json()
}

export { getAbout }
export { getProjects }
