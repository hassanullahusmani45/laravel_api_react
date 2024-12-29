import { useRoutes } from "react-router-dom";
import routes from "./routes";
function App() {
  const router = useRoutes(routes)
  return (
    <div className="">
      {router}
    </div>
  );
}

export default App;
