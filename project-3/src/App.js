import AdminPage from "./AdminPage";
import {BrowserRouter ,Routes,Route} from "react-router-dom";
import Jan from "./Jan";
import Update from "./Update";


function App() {
  return (
    <div className="App">
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <AdminPage />}/>
        <Route path="/filter" element={<Jan />} />
        <Route path="/update/:id" element={<Update/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
