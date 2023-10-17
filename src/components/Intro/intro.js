import React from 'react'
import './intro.css'
import btnImg from '../../assets/hireme.png'
import doodle from '../../assets/doodle.png'
import { Link } from'react-scroll'

const Intro = () => {
  return (
    <section className="intro" >
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm<span className="introName"> Abhijeet</span> <br /> Website designer </span>
            <p className="introPara">I am a skilled web designer with experiece in creating <br />visually appealing and user friendly websites </p>
            <Link><button className="btn"><img src={btnImg} className="btnImg"alt="Hire Me" />Hire Me</button></Link>
        </div>
        <img src={doodle} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro