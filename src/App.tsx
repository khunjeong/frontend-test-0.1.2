import './App.css';

import { Sale } from './components';

import { MACBOOK_2020_PRO_13 } from './api/data/MACBOOK_2020_PRO_13';
// import { CERESHOME_DEILIVE_CURTAIN } from './api/data/CERESHOME_DEILIVE_CURTAIN';

function App() {
  return (
    <div className='App'>
      <Sale sale={MACBOOK_2020_PRO_13} />
      {/* <Sale sale={CERESHOME_DEILIVE_CURTAIN} /> */}
    </div>
  );
}

export default App;
