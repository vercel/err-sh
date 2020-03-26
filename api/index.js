module.exports = (request, response) => {
  const { url } = request
  const urlParts = url.split('/')

  if (url === '/') {
    response.writeHead(302, {
      Location: `https://zeit.co`
    })

    response.end()
    return
  }

  if (urlParts.length < 3) {
    return {
      error: 'Please specify all the missing data (see the repo)!',
      errorHandle: 'missing_data'
    }
  }

  const isZeit = urlParts.length === 3
  const user = isZeit ? 'zeit' : urlParts[1]
  const repo = urlParts[isZeit ? 1 : 2]
  const code = urlParts[isZeit ? 2 : 3]

  response.writeHead(302, {
    Location: `https://github.com/${user}/${repo}/blob/master/errors/${code}.md`
  })

  response.end()
}
