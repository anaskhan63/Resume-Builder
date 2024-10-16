import { useEffect } from "react";
import { TemplateProvider } from "./Context/TemplateContext";
import Router from "./Router/Router";
import { message } from "antd";
import { ResumeDataProvider } from "./Context/ResumeDataContext";

function App() {
  useEffect(() => {
    message.info("This Project is Under Development!");
  }, []);
  return (
    <>
      <TemplateProvider>
        <ResumeDataProvider>
          <div>
            <Router />
          </div>
        </ResumeDataProvider>
      </TemplateProvider>
    </>
  );
}

export default App;
