import React from 'react';
import { useNavigate } from 'react-router-dom';


const Navigation = () => {
    const navigate = useNavigate(); 

    return (
        <nav> 
            <ul class="header__menu">
                <li>
                  <a href="#" class="menu-item-resume-link">
                    <p onClick={() => navigate('/')} style={{ cursor: 'pointer' }} class="header_menu-item ui text size-textxs">Resume Scanner</p>
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
        </nav>
    ); 
};

export default Navigation; 