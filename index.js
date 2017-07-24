module.exports = (request, response) => {
  const urlParts = request.url.split('/')

  if (urlParts.length < 3) {
    return {
      error: 'Please specify all the missing data (see the repo)!',
      errorHandle: 'missing_data'
    }
  }

  const repo = urlParts[1]
  const code = urlParts[2]

  response.writeHead(302, {
    Location: `https://github.com/zeit/${repo}/blob/master/errors/${code}.md`
  })

  response.end()
}
