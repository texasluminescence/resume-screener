import logo from './logo.svg';
import './css_files/AfterEnteringResume.css';
import './css_files/components.css';
import './css_files/font.css';
import './css_files/index.css';
import './css_files/styles.css';
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate();
  
  return (
      <div class="columnheader_logo-one">



        
        <div>
          <div class="flex-col-center-center heroactions">
            <h1 class="resume-scanner_title ui heading size-headingxs">Grapes</h1>
            <input type="file"   class="button--upload ui button blue_gray_900 size-sm fill round">Upload File to Start Scan</input>
          </div>
        </div> 
      </div>

      //onClick={()=> navigate("/upload")}

  );
}

export default Home;
