import React, { useEffect, useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import HomeImage from './IntroPicture.png';

const Home = () => {

    const text = "I’m a full stack developer, specialized in development of web applications using React, Express.js, Node.js & more";
    
    const words = text.split(' ');
    const [coloredWords, setColoredWords] = useState(Array(words.length).fill('white'));
    const [buttonSize, setButtonSize] = useState('1rem');

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        let index = 0;
        const interval = setInterval(() => {
            const newColors = Array(words.length).fill('white');
            newColors[index] = '#FF0000'; 
            
            setColoredWords(newColors);

            index++;
            if (index >= words.length) {
                index = 0;
                setButtonSize('1.3rem');
                clearInterval(interval);
            }
        }, 400);

        return () => {
            clearInterval(interval);
            document.body.style.overflow = 'auto'; 
        };
    }, [words.length]);

    return (
        <div>
            <div className='HomeIntroContainer'>
                <div className='HomeIntroText'>
                    <p>Hi, my name is Michal Vrablic</p>
                    <h3>
                        {words.map((word, index) => (
                            <span 
                                key={index} 
                                style={{
                                    transition: 'color 0.5s', 
                                    color: coloredWords[index], 
                                    cursor: 'default'
                                }} 
                            >
                                {word}{' '}
                            </span>
                        ))}
                    </h3>
                    <Link to='/about' className='HomeIntroButton' style={{ fontSize: buttonSize }}>Learn more</Link>
                </div>
                <div className='HomeIntroPictureContainer'>
                    <img className='HomeIntroPicture' src={HomeImage} alt="Intro" />
                </div>
            </div>
        </div>
    );
};

export default Home;
