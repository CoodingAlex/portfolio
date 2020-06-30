const apiUrl =
  process.env.API_URL || 'https://portfolio-api.coodingalex.vercel.app'

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
