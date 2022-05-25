import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import {FaCode} from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
        <a href="https://github.com/aadityazz"><BsGithub /></a>
    </div>
    <div>
        <a href="https://leetcode.com/aditya_zz/"><FaCode /></a>
    </div>
    <div>
        <a href="https://www.linkedin.com/in/aditya-gupta-aa7524201/"><BsLinkedin/></a>
    </div>
  </div>
);

export default SocialMedia;
