import { TemplateProvider } from "./Context/TemplateContext"
import Router from "./Router/Router"

function App() {

  return (
    <>
      <TemplateProvider>
        <div >
          <Router />
        </div>
      </TemplateProvider>
    </>
  )
}

export default App
