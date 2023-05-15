import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { client } from "./lib/apollo"
import { ApolloProvider } from "@apollo/client"

export function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ApolloProvider>
    </div>
  )
}

