import logo from './logo.svg';
import './App.css';
import DynamicBox from './form';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
function App() {
  return (
<>
<LocalizationProvider dateAdapter={AdapterDayjs}>
      <DynamicBox />
    </LocalizationProvider>
</>
  );
}

export default App;
