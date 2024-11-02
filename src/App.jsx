import { useEffect } from "react";
import { TemplateProvider } from "./Context/TemplateContext";
import Router from "./Router/Router";
import { message } from "antd";
import { ResumeDataProvider } from "./Context/ResumeDataContext";
import { GenerateDataByGemeniProvider } from "./Context/GenerateDataByGemeni";

function App() {
  useEffect(() => {
    message.info("This Project is Under Development!");
  }, []);
  return (
    <>
      <TemplateProvider>
        <ResumeDataProvider>
          <GenerateDataByGemeniProvider>
            <div>
              <Router />
            </div>
          </GenerateDataByGemeniProvider>
        </ResumeDataProvider>
      </TemplateProvider>
    </>
  );
}

export default App;
