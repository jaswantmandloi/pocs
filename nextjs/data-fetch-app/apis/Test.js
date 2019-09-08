import fetch from 'isomorphic-unfetch'

export const onSubmit = async (event, pageState, setPageState) => {

  event.preventDefault();

  const data = await sendRequest()
  console.log('api data', data)

  setPageState({
    ...pageState,
    message: `New state is ${data.stars}`,
    [new Date().getTime()] : new Date().getTime()
  })

}

const sendRequest = async () => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json() // better use it inside try .. catch
  return { stars: json.stargazers_count }
}
