import React from 'react'
import '../css/Temp.css'
import '../css/AllOn6.css'
import { TiTick } from 'react-icons/ti'
import InternationalPatientsVideo from '../Assests/Tourism/International_Patients.mp4';
import drPrem from '../Assests/drPrem.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay ,Navigation } from "swiper";

import arrow from '../Assests/arrow.gif'

// ------tourisum imgaes------------
// ----------Food---------
import food1 from '../Assests/Tourism/Food/food1.jpg'
import food2 from '../Assests/Tourism/Food/food2.jpg'
import food3 from '../Assests/Tourism/Food/food3.png'
import food4 from '../Assests/Tourism/Food/food4.jpg'
import food5 from '../Assests/Tourism/Food/food5.jpg'
import food6 from '../Assests/Tourism/Food/food6.jpg'
//---------historical--------------
import his1 from '../Assests/Tourism/Historical Buidings/his1.jpg'
import his2 from '../Assests/Tourism/Historical Buidings/his2.jpg'
import his3 from '../Assests/Tourism/Historical Buidings/his3.jpg'

import his5 from '../Assests/Tourism/Historical Buidings/his5.jpg'
//---------- religion------------
import rel1 from '../Assests/Tourism/Religious Places/rel1.png'
import rel2 from '../Assests/Tourism/Religious Places/rel2.jpg'
import rel3 from '../Assests/Tourism/Religious Places/rel3.jpg'
import rel4 from '../Assests/Tourism/Religious Places/rel4.jpg'
//----------shop------------
import shop1 from '../Assests/Tourism/Shopping/shop1.jpg'
import shop2 from '../Assests/Tourism/Shopping/shop2.jpg'
import shop3 from '../Assests/Tourism/Shopping/shop3.jpg'
import shop4 from '../Assests/Tourism/Shopping/shop4.jpg'
import shop5 from '../Assests/Tourism/Shopping/shop5.jpg'
//----------things to do-------------
import things1 from '../Assests/Tourism/Things to do/things1.jpg'
import things2 from '../Assests/Tourism/Things to do/things2.jpg'
import things3 from '../Assests/Tourism/Things to do/things3.jpg'
import things4 from '../Assests/Tourism/Things to do/things4.jpg'
import things5 from '../Assests/Tourism/Things to do/things5.jpg'




//------ECR----------------------
import ST from '../Assests/Tourism/ECR/ST.jpg'
import M1 from '../Assests/Tourism/ECR/M1.jpg'
import SS1 from '../Assests/Tourism/ECR/SS1.jpg'
import CB1 from '..//Assests/Tourism/ECR/CB1.jpg'
import D2 from '../Assests/Tourism/ECR/D2.jpg'

function Temp() {
    return (
        <div>
            {/* doctor image */}
            <div className="all_on_6_des_title doctor_name_title" data-aos="fade-up">
                <h1>Choose Premium Dental Implant Treatments by One of India's Best Implantologists, Dr. Prem Alex Lawrence.</h1>
                <p></p>
            </div>

            <div className='docto_img_main_cont'>
                <div className='docto_img_cont'>

                    <div>
                        <img src={drPrem} data-aos="fade-up" />
                    </div>
                    <div data-aos="fade-up">
                        <p data-aos="fade-up" >With more than 15 years of experience in performing dental miracles Dr Prem is a luminiarry, a certified Diplomate and a Fellow of the International Congress of Oral Implantologistst. He has performed more than 6000+ successful dental implants. His unrivaled clinical expertise offers a tailored and laser-focused approach to treatment.</p>
                        <p data-aos="fade-up" >The International Congress of Oral Implantologists has recognised him as a Diplomat and Fellow. Additionally, he is also a licensed laser specialist. He was nominated for  “Outstanding Dentist of the Year in India- under 45 Years" in 2015 and as "Implantologist in India" by Famdent. Dr Prem is a celebrated member of Indian Dental Association, International Congress of Oral Implants and Indian Society of Periodontology.</p>
                        <p data-aos="fade-up" ></p>
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="all_on_6_des_title doctor_name_title doctor_name_title11" data-aos="fade-up">
                <h1>6 Major Reasons to Choose Specialized Implant Treatments at our Clinics</h1>
                <p></p>
            </div>

            <div className='why_video_cont'>
                <div>
                    <video  data-aos="fade-up" src={InternationalPatientsVideo} style={{ width: "100%", height: "100%" }} autoPlay loop controls muted ></video>
                </div>
            </div>

            {/* know more about cont*/}
            <div className='know_more'>
                <div>
                    <div className='knowmore_cont'>
                        <p  data-aos="fade-up" >Implant<br></br>Treatments </p>
                        <a  data-aos="fade-up" href='https://www.doctorprem.com/GuidedSurgeries'>Know more<img  data-aos="fade-up" src={arrow}/></a>
                       
                    </div>
                    <div className='knowmore_cont'>
                        <p  data-aos="fade-up" >All-On-4<br></br>Implants</p>
                        <a  data-aos="fade-up" href='https://www.doctorprem.com/AllOn4'>Know more<img  data-aos="fade-up" src={arrow}/></a>
                      
                    </div>
                    <div className='knowmore_cont'>
                        <p  data-aos="fade-up" >All-On-6<br></br> Implants</p>
                        <a  data-aos="fade-up" href='https://www.doctorprem.com/AllOn6'>Know more<img  data-aos="fade-up" src={arrow}/></a>
                        
                    </div>

                </div>
            </div>

            {/* vlog */}
            <div className="all_on_6_des_title doctor_name_title doctor_name_title11" data-aos="fade-up">
                <h1>Learn More</h1>
                <p></p>
            </div>
            <div className='vlogn_cont'>
                <div>
                    <iframe  data-aos="fade-up" width="100%" height="100%" src="https://www.youtube.com/embed/rpNCtuSEYlM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>

             {/*FAQ*/}
             <div className='on6_div33_cont'>
                <div className='on6_div3_cont'>

                    <div className="all_on_6_des_title" data-aos="fade-up">
                        <h1>Who needs an All-On-6 implant?</h1>
                        <p></p>
                    </div>

                    <div className='on6_div3_main_cont'>
                        <div className='on6_div3_main_cont_2'>
                            <ul>
                                <li data-aos="fade-up">
                                    <TiTick className="on6_tick_icon" />
                                    <div>
                                        If you are young, lose all your teeth and have adequate bone, with All-On-6 you can have your entire set of teeth again.
                                    </div>
                                </li>
                                <li data-aos="fade-up">
                                    <TiTick className="on6_tick_icon" />
                                    <div>
                                        We prescribe All-On-6 implants for patients who have an entire arch of missing teeth or who have partial tooth loss. All patients will receive a complete arch dental implant to replace their missing teeth. The All-On-6 approach is recommended as a reliable, long-term replacement for conventional dentures.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            {/* Discover Chennai */}
            <div className="all_on_6_des_title doctor_name_title" data-aos="fade-up">
                <h1>Discover Chennai</h1>
                <p></p>
            </div>

            <div className='discover_cont'>
                <div className='discover_main_cont'>

                <div className='discover_main_cont_one'>
                        <div className='discover_main_cont_one1'>
                            <Swiper navigation={true} modules={[Navigation]} className="mySwiper"  data-aos="fade-up">
                               
                                <SwiperSlide><img src={his1}  data-aos="fade-up"/></SwiperSlide>
                                <SwiperSlide><img src={his2}  data-aos="fade-up"/></SwiperSlide>
                                <SwiperSlide><img src={his3}  data-aos="fade-up"/></SwiperSlide>
                                <SwiperSlide><img src={his5}  data-aos="fade-up"/></SwiperSlide>
                            </Swiper>
                        </div>
                        <div className='discover_main_cont_one2'>
                            <p  data-aos="fade-up" >Historical Buidings</p>
                            <p  data-aos="fade-up" >Chennai is also home to colonial reminders. Some outstanding architecture includes the Fort St. George, the first English fortress in India. Chennai has its own version of the white house called Ripon Building built in honour of Lord Ripon. It currently houses the office of the Greater Chennai Corporation. This building makes for great pictures. The high court in Chennai is another beautiful building built in the Indo Sarcenic style of architecture and has magnificent painted ceilings and stained glass doors.</p>
                        </div>
                    </div>


                    <div class="banner_slider" >

                    </div>

                    


                    <div className='discover_main_cont_one'>
                       
                     



                        <div className='discover_main_cont_one1'>

                      
                            <Swiper navigation={true} modules={[Navigation]} className="mySwiper"  data-aos="fade-up">
         
                                <SwiperSlide><img src={rel1} /></SwiperSlide>
                                <SwiperSlide><img src={rel2} /></SwiperSlide>
                                <SwiperSlide><img src={rel3} /></SwiperSlide>
                                <SwiperSlide><img src={rel4} /></SwiperSlide>
                            </Swiper>
                        </div>
                        <div className='discover_main_cont_one2'>
                            <p  data-aos="fade-up" >Religious Places</p>
                            <p  data-aos="fade-up" >Chennai’s religious places are some of the world’s famous heritage structures. The Kapaleeswarar Temple, located in Mylapore, dedicated to Lord Shiva was built in the 7th Century and boasts breath-taking Dravidian-style architecture.  The Santhome Basilica is well worth a trip for any visitor to Chennai. It houses the final resting place of one of Jesus’s 12 apostles, St. Thomas. A museum attached to it houses his bone and fingerprint and other antiquities surrounding his assassination. The Madras Synagogue near Mint Street holds the last traces of Jewish presence in Chennai. The Jewish Cemetery is worth a visit for its interesting stories.  The Mughals also left their indelible mark on Chennai through the Nawab of Arcot. Locally known as Big Mosque in Triplicane is his gift. It is completely granite without the use of wood or iron.</p>
                        </div>
                    </div>

                    <div className='discover_main_cont_one'>
                   
                        <div className='discover_main_cont_one1'>
                            <Swiper navigation={true} modules={[Navigation]} className="mySwiper"  data-aos="fade-up">
                                <SwiperSlide><img src={food3} /></SwiperSlide>
                                <SwiperSlide><img src={food4} /></SwiperSlide>
                                <SwiperSlide><img src={food1} /></SwiperSlide>
                                <SwiperSlide><img src={food6} /></SwiperSlide>
                                <SwiperSlide><img src={food2} /></SwiperSlide>
                                <SwiperSlide><img src={food5} /></SwiperSlide>
                            </Swiper>
                        </div>
                        <div className='discover_main_cont_one2'>
                            <p  data-aos="fade-up" >Food</p>
                            <p  data-aos="fade-up" >The answer is always coffee in Chennai. Begin your day with filter coffee in Chennai. Have a crisp masala dosai with its accompanying South Indian dips for breakfast. At lunch time, the aroma of delectable biryanis also known as food of the Gods will summon you. Our recommendation is to succumb and take a stroll in the evening in the beach with some “sundal” or seasoned chick peas in hand. If local favourites might not be your flavour, the city is well equipped with world cuisines and all your favourite international fast food brands for when hunger strikes.</p>
                        </div>
                    </div>

                  

            


                    <div className='discover_main_cont_one'>
                    
                        <div className='discover_main_cont_one1'>
                            <Swiper navigation={true} modules={[Navigation]} className="mySwiper"  data-aos="fade-up">
                                <SwiperSlide><img src={shop3} /></SwiperSlide>
                                <SwiperSlide><img src={shop2} /></SwiperSlide>
                                <SwiperSlide><img src={shop1} /></SwiperSlide>
                                <SwiperSlide><img src={shop4} /></SwiperSlide>
                                <SwiperSlide><img src={shop5} /></SwiperSlide>
                            </Swiper>
                        </div>
                        <div className='discover_main_cont_one2'>
                            <p  data-aos="fade-up" >Shopping</p>
                            <p  data-aos="fade-up" >Shop till you drop is not just a quote when in Chennai. A variety of malls such as Phoenix Market city, VR Mall, Express Avenue etc.,  house every conceivable international brand in merchandise , food, cineplexes and entertainment zones. To get the complete local flavour try the shopping streets such as Ranganathan Street and Cotton Street for unbelievable deals .</p>
                        </div>
                    </div>


                    <div className='discover_main_cont_one'>
                        <div className='discover_main_cont_one1'>
                            <Swiper navigation={true} modules={[Navigation]} className="mySwiper"  data-aos="fade-up">
                                <SwiperSlide><img src={things1} /></SwiperSlide>
                                <SwiperSlide><img src={things2} /></SwiperSlide>
                                <SwiperSlide><img src={things3} /></SwiperSlide>
                                {/* <SwiperSlide><img src={things4} /></SwiperSlide> */}
                                <SwiperSlide><img src={things5} /></SwiperSlide>
                            </Swiper>
                        </div>
                        <div className='discover_main_cont_one2'>
                            <p  data-aos="fade-up" >Things to do</p>
                            <p  data-aos="fade-up" >Chennai offers everyone plenty of fun activities. A city known for its beaches and the second longest beach in the world Marina is perfect for walking, balloon shooting, eating fresh catch and bajjis(fried vegetable snack), horse riding and simply dipping into the ocean. The backwaters at Muttukadu, offers some spectacular boating. If you are a book lover, head to the Anna Centenary Library, a reader’s paradise for some quiet time.</p>
                        </div>
                    </div>

                    <div className='discover_main_cont_one'>
                      
                        <div className='discover_main_cont_one1'>
                            <Swiper navigation={true} modules={[Navigation]} className="mySwiper"  data-aos="fade-up">
                                <SwiperSlide><img src={ST} /></SwiperSlide>
                                <SwiperSlide><img src={M1} /></SwiperSlide>
                                <SwiperSlide><img src={ SS1} /></SwiperSlide>
                                <SwiperSlide><img src={D2} /></SwiperSlide>
                                <SwiperSlide><img src={CB1} /></SwiperSlide>
                                
                            </Swiper>
                        </div>
                        <div className='discover_main_cont_one2'>
                            <p  data-aos="fade-up" >Experience ECR</p>
                            <p  data-aos="fade-up" >The East Coast Road originally denoted the coastal stretch between Chennai and Pondicherry. It holds some very interesting sights along the way namely the Crocodile bank, Dakshinachitra , Mahabalipuram and activities such as surfing, boating, go karting etc. Take a one day trip to experience this beautiful beach highway stretch. </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* video consultation*/}
            <div className='video_consult_cont'>

            </div>


           



        </div>
    )
}

export default Temp