import {PcContexProvider} from './contexProvers/pc';
import Resvid from "./Resvid";
function App() {
  

  return (
    <PcContexProvider>
    <Resvid/>
    </PcContexProvider>
    
  )
}

export default App
