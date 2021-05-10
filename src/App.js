import logo from './logo.svg';
import './App.css';
import Map from './Live_tracking'
import MapCopy from './Optimal_Route'
import Sidebar from './sidebar'
import {Route,Switch} from 'react-router-dom'
import PageWrapper from './PageWrapper'


function App() {
  return (
    <div className="App">
      <Sidebar style= {{zIndex:2}}/>
        <PageWrapper>
          <Switch>
            <Route path="/LiveBoats" component={Map}/>
            <Route path="/OptimalRoute" component={MapCopy}/>
          </Switch>
        </PageWrapper>
    </div>
  );
}

export default App;
