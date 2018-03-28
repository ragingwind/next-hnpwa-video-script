import fetch from 'isomorphic-fetch'

export default async function (pathname) {
  const u = `https://api.hnpwa.com/v0${pathname}.json`
  const res = await fetch(u)
  return res.json()
}
