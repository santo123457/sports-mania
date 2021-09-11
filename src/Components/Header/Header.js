import React from 'react';

// import img from "https://i.im.ge/2021/09/09/QvwiG8.png"

const Header = () => {
    return (
        <div className="d-flex"style={{ backgroundImage: `url("https://i.im.ge/2021/09/09/QvwiG8.png")`, width: "100%",
        height: "300px",backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat' }}>
            <h4 className="align-self-center d-block m-auto text-light">
            Sports Mania
           
            </h4>
        </div>
    );
};

export default Header;