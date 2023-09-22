import NavBar from "../NavBar";
import JobPage from '../JobPage';
import EmailBox from "../EmailBox";
import Bottom from "../Bottom";

function ListJobs() {
  return (
    <div>
        <NavBar />
        <JobPage />
        <EmailBox />
        <Bottom />
    </div>
  )
}

export default ListJobs;