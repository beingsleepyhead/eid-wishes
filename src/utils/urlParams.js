export function getUrlParams() {
  const params = {}
  const queryString = window.location.search.slice(1)
  
  if (queryString) {
    queryString.split('&').forEach(param => {
      const [key, value] = param.split('=')
      params[key] = decodeURIComponent(value)
    })
  }
  
  return params
}

export function generateWishLink(name) {
  const baseUrl = window.location.origin + window.location.pathname
  return `${baseUrl}?name=${encodeURIComponent(name)}`
}
