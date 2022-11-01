export async function fetchImg(imageName, page) {
  const API_KEY = '29899357-fb56e1b3516b55b25477bf57b'
  const OPTIONS = 'image_type=photo&orientation=horizontal&safesearch=true&lang=en&lang=uk&per_page=12'
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${imageName}&${OPTIONS}&page=${page}`

  const res = await fetch(url)
  const r = res.json
  if (r.totalHits === 0) {
    return Promise.reject(new Error())
  }
  return r
}