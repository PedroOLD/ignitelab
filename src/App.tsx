import { gql, useQuery } from "@apollo/client"

const GET_LESSSONS_QUERY = gql`
    query {
      lessons{
        id
        title
      }
    }

  `

  interface Leassons {
    id: string
    title: string
  }

function App() {


  const { data } = useQuery<{lessons: Leassons[]}>(GET_LESSSONS_QUERY);
  console.log(data)

  return (
    <ul>
        {data?.lessons.map((lesson) => {
            return <li key={lesson.id}>{lesson.title}</li>
        })}
    </ul>
  )
}

export default App
