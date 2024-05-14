import React from 'react';

const About = ({info}) => {
    return (
        <div>
            <p>{info.body}</p>
            <p>{info.title}</p>
        </div>
    );
};

export default About;