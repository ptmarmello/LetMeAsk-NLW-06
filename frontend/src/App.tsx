
import { Home } from "./pages/Home";
import { BrowserRouter, Route } from 'react-router-dom';
import { Newroom } from "./pages/Newroom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/rooms/new" component={Newroom}/>
    </BrowserRouter>
  );
}

export default App;
