module.exports = (request, response) => {
  const { url } = request
  const urlParts = url.split('/')

  if (url === '/') {
    response.writeHead(302, {
      Location: `https://zeit.co/blog/err-sh`
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

  const repo = urlParts[1]
  const code = urlParts[2]

  response.writeHead(302, {
    Location: `https://github.com/zeit/${repo}/blob/master/errors/${code}.md`
  })

  response.end()
}
