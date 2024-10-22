import logo from './logo.svg';
import './css_files/AfterEnteringResume.css';
import './css_files/components.css';
import './css_files/font.css';
import './css_files/index.css';
import './css_files/styles.css';

function App() {
  return (
      <div class="columnheader_logo-one">
        <header class="header">
          <div class="header_top-row">
            <div class="header___navigation">
              <ul class="header__menu">
                <li>
                  <a href="#" class="menu-item-resume-link">
                    <p class="header_menu-item ui text size-textxs">Resume Scanner</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p class="ui text size-textxs">Example Resumes</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p class="ui text size-textxs">Community</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p class="ui text size-textxs">Blogs</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p class="ui text size-textxs">Tips</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p class="ui text size-textxs">Contact</p>
                  </a> 
                </li>
                <li>
                  <button class="header____auth-button ui button gray_300 size-xs fill round">Sign in</button>
                </li>
                <li>
                  <button class="header____auth-button-1 ui button blue_gray_900 size-xs fill round">Register</button>
                </li>
              </ul>
            </div> 
          </div>
        </header>



        
        <div>
          <div class="flex-col-center-center heroactions">
            <h1 class="resume-scanner_title ui heading size-headingxs">Resume Scanner</h1>
            <button class="button--upload ui button blue_gray_900 size-sm fill round">Upload File to Start Scan</button>
          </div>
        </div> 
      </div>

  );
}

export default App;
