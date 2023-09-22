import HomePage from './routes/HomePage';
import { Route, Routes } from 'react-router-dom';
import LogInPage from './routes/LogInPage';
import CreateAccountPage from './routes/CreateAccountPage';
import FindDevPage from './routes/FindDevPage';
import FindJobPage from './routes/FindJobPage';
import ListJobs from './routes/ListJobs';

function App() {
    return (
        <Routes>
            <Route path='/' element={ <HomePage /> } />
            <Route path='/LogIn' element={ <LogInPage /> } />
            <Route path='/CreateAccount' element={ <CreateAccountPage /> } />
            <Route path='/FindDev' element={ <FindDevPage /> } />
            <Route path='/FindJob' element={ < FindJobPage /> } />
            <Route path='/ListJob' element={ < ListJobs />} />
        </Routes>
    );
}

export default App;