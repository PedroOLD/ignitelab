import { gql, useQuery } from "@apollo/client"

const GET_LESSSONS_QUERY = gql`
    query {
      lessons{
        id
        title
        teacher {
          name
        }
      }
    }

  `

function App() {

  const { data } = useQuery(GET_LESSSONS_QUERY);
  console.log(data)

  return (
    <h1 className="text-2xl">Hello Word</h1>
  )
}

export default App
