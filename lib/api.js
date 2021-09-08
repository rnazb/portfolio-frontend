export function getStrapiURL(path = "") {
  const url = process.env.NODE_ENV === 'production' ?
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${path}` :
    `http://localhost:1337${path}`

  return url
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path)
  const response = await fetch(requestUrl)
  const data = await response.json()
  return data;
}