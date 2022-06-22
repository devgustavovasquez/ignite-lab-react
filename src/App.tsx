import { gql, useQuery } from "@apollo/client"

import { Event } from "./pages/Event";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title

      teacher {
        name
      }
    }
  }
`

interface Lesson {
  id: string;
  title: string;
}

function App() {
  return (
    <Event />
  )
}

export default App
