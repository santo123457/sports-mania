import { width } from 'dom-helpers';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import logo from '../../images/LeaugeLogo/image1.png'
import male from '../../images/Photo/male.png'
import female from '../../images/Photo/female.png'
const LeagueDetails = () => {
    const {leagueId}= useParams();
    const [league,setLeague]=useState([]);
   console.log(league);
    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`)
        .then(res=> res.json())
        .then(data=> setLeague(data.leagues[0]));
        
    },[]);
    return (
       <div>
            <div className="d-flex"style={{ backgroundImage: `url("https://i.im.ge/2021/09/09/QvwiG8.png")`, width: "100%",
            height: "300px",backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat' ,
            opacity: 0.5}}>
                <h4 className="align-self-center d-block m-auto">
                <img src={logo} style={{width: '100px', }} alt="" />
                </h4>
            </div>

            <div className='d-flex justify-content-center row'>
                <div style={{width:'80%',backgroundColor:"#3A42FF",color:'#ffff',margin:'auto'}} className='container mt-2 pt-3 rounded-3 d-flex pb-3' >
                <div className='col-md-7' >
                        <h4>{league.strLeague}</h4>
                        <h6>
                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0)">
                            <path d="M11.9999 0C6.73306 0 2.44812 4.28489 2.44812 9.55181C2.44812 11.5997 3.08684 13.5522 4.29528 15.1983C5.42585 16.7383 6.95867 17.8868 8.74086 18.5325L11.9894 24L15.382 18.4868C19.0829 17.0863 21.5518 13.5278 21.5518 9.55181C21.5517 4.28489 17.2668 0 11.9999 0ZM11.9999 15.601C8.6644 15.601 5.95076 12.8873 5.95076 9.55181C5.95076 6.21628 8.6644 3.50264 11.9999 3.50264C15.3355 3.50264 18.0491 6.21628 18.0491 9.55181C18.0491 12.8873 15.3355 15.601 11.9999 15.601Z" fill="white"/>
                            <path d="M12 4.91156C9.44132 4.91156 7.35974 6.99319 7.35974 9.55181C7.35974 12.1104 9.44132 14.1921 12 14.1921C14.5587 14.1921 16.6402 12.1104 16.6402 9.55181C16.6402 6.99319 14.5587 4.91156 12 4.91156ZM11.3153 11.6739L9.17305 9.53161L10.1693 8.53537L11.3153 9.68137L13.8263 7.17037L14.8226 8.16661L11.3153 11.6739Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0">
                            <rect width="24" height="24" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                            Founded : {league.dateFirstEvent}
                        </h6>
                        <h6>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.2366 3.06973C22.0809 2.91498 21.8981 2.83715 21.6857 2.83715C21.5803 2.83715 21.3578 2.92373 21.0207 3.09459C20.6822 3.26592 20.3221 3.45658 19.9444 3.66936C19.5654 3.88075 19.1168 4.07234 18.5987 4.24366C18.0815 4.41452 17.603 4.5011 17.1623 4.5011C16.7547 4.5011 16.3964 4.42373 16.0864 4.26853C15.0599 3.78772 14.1664 3.42895 13.4088 3.19223C12.6507 2.95597 11.8356 2.83715 10.9628 2.83715C9.45593 2.83715 7.73947 3.32717 5.81531 4.30537C5.41832 4.50341 5.1337 4.65677 4.94948 4.76914L4.76664 3.42849C5.17976 3.06973 5.44641 2.54701 5.44641 1.95705C5.44641 0.876143 4.57045 0.000183105 3.48955 0.000183105C2.40865 0.000183105 1.53223 0.876143 1.53223 1.95705C1.53223 2.66214 1.90895 3.27513 2.46806 3.61962L5.11159 23.004C5.19035 23.5811 5.68405 23.9997 6.25099 23.9997C6.30257 23.9997 6.35507 23.9956 6.40803 23.99C7.03806 23.9035 7.47926 23.3236 7.39314 22.6936L6.33066 14.903C8.25851 13.9465 9.92615 13.4643 11.329 13.4643C11.9245 13.4643 12.5052 13.5522 13.0712 13.7328C13.6377 13.9128 14.1093 14.1072 14.4837 14.3186C14.8577 14.5309 15.3003 14.7271 15.8101 14.9053C16.3199 15.0849 16.8233 15.1747 17.3202 15.1747C18.5757 15.1747 20.0784 14.7017 21.8317 13.7562C22.0519 13.642 22.2126 13.5297 22.3148 13.42C22.4171 13.31 22.4677 13.1529 22.4677 12.9498V3.62008C22.4677 3.40869 22.3908 3.22493 22.2366 3.06973Z" fill="white"/>
                            </svg>

                            Country: {league.strCountry}
                        </h6>
                        <h6>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0C5.37266 0 0 5.37266 0 12C0 18.6273 5.37266 24 12 24C18.6273 24 24 18.6273 24 12C23.9926 5.37578 18.6242 0.0074219 12 0ZM12.4283 3.45957L16.6 1.79199C17.0734 2.00625 17.5314 2.25312 17.9707 2.53086L17.9816 2.5377C18.4133 2.81113 18.8258 3.11367 19.2164 3.44316L19.25 3.47246C19.4252 3.62168 19.5955 3.77617 19.7611 3.93555C19.782 3.95605 19.8039 3.97559 19.8248 3.99648C19.9984 4.16602 20.1666 4.34082 20.3293 4.5207C20.3428 4.53594 20.3557 4.55195 20.3691 4.56719C20.5119 4.72715 20.6492 4.89277 20.7824 5.06113C20.8145 5.10117 20.8465 5.14121 20.8775 5.18125C21.0221 5.36836 21.1619 5.55879 21.2939 5.75527L20.4623 9.29043L16.3707 10.6545L12.4293 7.50078L12.4283 3.45957ZM3.12207 5.18359C3.15313 5.14355 3.18477 5.10352 3.2168 5.06367C3.34844 4.89668 3.48457 4.73379 3.6252 4.5748C3.64043 4.55801 3.65449 4.54082 3.66953 4.52402C3.83125 4.34375 3.99863 4.16914 4.17207 4C4.19199 3.98047 4.21191 3.95996 4.23281 3.94199C4.39707 3.78359 4.56602 3.63008 4.73965 3.48164L4.77969 3.44805C5.1668 3.1209 5.57539 2.82031 6.00273 2.54805L6.01836 2.53809C6.45508 2.26094 6.91016 2.01445 7.38086 1.8L11.5717 3.45957V7.49961L7.63008 10.6527L3.53848 9.29121L2.70684 5.75605C2.84004 5.55996 2.97832 5.36992 3.12207 5.18359ZM2.64004 18.1381C2.52246 17.9588 2.40996 17.7762 2.30273 17.59L2.27676 17.5451C2.17012 17.36 2.06914 17.1717 1.97402 16.9805L1.9707 16.9744C1.77031 16.5721 1.59434 16.158 1.44395 15.7344V15.7305C1.37285 15.5305 1.30801 15.3256 1.24805 15.1195L1.22637 15.0436C1.17148 14.85 1.12168 14.6543 1.07715 14.4564C1.07324 14.4371 1.06836 14.4187 1.06445 14.3996C0.966211 13.9527 0.895703 13.5004 0.853125 13.0447L3.29512 10.1145L7.3584 11.4688L8.5377 16.1855L6.6 18.7637L2.64004 18.1381ZM14.6637 22.8771C14.4637 22.9268 14.2584 22.9695 14.0531 23.008C14.0244 23.0137 13.9951 23.0184 13.9664 23.0236C13.7916 23.0549 13.6148 23.0816 13.4377 23.1035C13.3904 23.1096 13.3436 23.116 13.2965 23.1217C13.132 23.1408 12.966 23.1553 12.7996 23.1672C12.7473 23.1707 12.6955 23.176 12.6432 23.1793C12.4305 23.1924 12.216 23.2 12 23.2C11.8021 23.2 11.6055 23.1947 11.41 23.1844C11.3863 23.1844 11.3637 23.1805 11.34 23.1787C11.166 23.1688 10.9928 23.1557 10.8199 23.1389L10.8 23.1352C10.4213 23.0941 10.0447 23.034 9.67207 22.9553L7.30605 19.2508L9.21328 16.7076H14.7867L16.7252 19.2676L14.6637 22.8771ZM22.9385 14.4C22.9344 14.4191 22.9297 14.4377 22.9256 14.4568C22.8809 14.6545 22.8311 14.8502 22.7764 15.0439L22.7549 15.1199C22.6947 15.326 22.6301 15.5301 22.5588 15.7309V15.7348C22.4084 16.1584 22.2326 16.5725 22.032 16.9748L22.0287 16.9809C21.933 17.1723 21.8322 17.3605 21.726 17.5455L21.7 17.5904C21.5934 17.7771 21.4811 17.9594 21.3633 18.1377L17.4168 18.76L15.4656 16.184L16.6443 11.4684L20.7076 10.1141L23.1496 13.0443C23.1072 13.5002 23.0367 13.9529 22.9385 14.4Z" fill="white"/>
                            </svg>

                            Sports Type : Football 
                        </h6>
                        <h6>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0)">
                            <path d="M22.0621 0.223076C21.9779 0.217818 16.1261 0.283915 16.1261 0.283915C15.0829 0.296684 14.2484 1.31517 14.2627 2.3592C14.2754 3.39347 15.1197 4.38567 16.1517 4.38567C16.1592 4.38567 16.1674 4.38567 16.1765 4.38567L17.267 4.20841L15.2796 6.1177C13.6625 4.9903 11.7465 4.33685 9.73427 4.33685C7.13322 4.33685 4.68839 5.3298 2.84895 7.16924C-0.947859 10.9661 -0.947859 17.1341 2.84895 20.9309C4.68839 22.7696 7.13322 23.7776 9.73427 23.7776C12.3353 23.7776 14.7794 22.7606 16.6189 20.9226C19.9207 17.6208 20.4442 12.5208 18.0069 8.74956L20.2309 6.62395V7.94288C20.2309 8.98765 21.0729 9.83339 22.1161 9.83339C23.1587 9.83339 24.0022 8.98765 24.0022 7.94288V2.09557C23.9992 1.59158 23.9188 0.337243 22.0621 0.223076ZM13.9449 18.2472C12.8213 19.3724 11.3251 19.9935 9.73277 19.9935C8.14044 19.9935 6.64425 19.3724 5.51986 18.2472C3.1952 15.9248 3.1952 12.1438 5.51986 9.81987C6.64425 8.69473 8.14044 8.07357 9.73277 8.07357C11.3251 8.07357 12.8213 8.69473 13.9449 9.81987C16.2696 12.1438 16.2696 15.9256 13.9449 18.2472Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0">
                            <rect width="23.9999" height="24.0006" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                            Gander : {league.strGender}
                        </h6>
                </div>
                <div className="col-md-5">
                        {
                            league.strGender === 'Female'? <img src={female} style={{width:'300px'}} alt="" />:
                            <img src={male}style={{width:'300px'}} alt="" />
                            
                        }
                        
                </div>
                </div>
            </div>
            <div className="w-75 m-auto mt-5 text-secondary">
            <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</small>
            <br />
            <br />
            <small>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </small>
            </div>
       </div>
    );
};

export default LeagueDetails;