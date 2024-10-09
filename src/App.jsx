import { useEffect } from "react"
import { TemplateProvider } from "./Context/TemplateContext"
import Router from "./Router/Router"
import { message } from "antd"

function App() {
  useEffect(()=>{
    message.info("This Project is Under Development!")
  },[])
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
