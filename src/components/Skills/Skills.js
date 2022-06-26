import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

import htmlLogo from '../../svg/html5.svg'
import cssLogo from '../../svg/css3.svg'
import reactLogo from '../../svg/react.svg'
import reduxLogo from '../../svg/redux.svg'
import webpackLogo from '../../svg/webpack.svg'
import jsLogo from '../../svg/javascript.svg'
 
const Button = ({skill}) => (
    <button className='logo' type="button">
      {skill === 'HTML' && <img src={htmlLogo}  alt="logo"/>}
      {skill === 'CSS' && <img src={cssLogo}  alt="logo"/>} 
      {skill === 'React' && <img src={reactLogo}  alt="logo"/>} 
      {skill === 'Redux' && <img src={reduxLogo}  alt="logo"/>} 
      {skill === 'Webpack' && <img src={webpackLogo}  alt="logo"/>}
      {skill === 'JavaScript' && <img src={jsLogo}  alt="logo"/>} 
    </button>
);

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            <div className='skill_content'>
              <Button skill={skill}/>
              {skill}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
