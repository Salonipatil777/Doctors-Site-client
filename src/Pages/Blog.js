import React from 'react'
import img1 from '../images/banner/img1.jpg'
import plusblue from "../images/shap/plus-blue.png";
import waveBlue from "../images/shap/wave-blue.png";
import circledots from "../images/shap/circle-dots.png";
import g1 from "../images/gallary/g1.jpg";
import g8 from "../images/gallary/g8.jpg";
import g10 from "../images/gallary/g10.jpg";
import g2 from "../images/gallary/g2.jpg";
import g3 from "../images/gallary/g3.jpg";
import g4 from "../images/gallary/g4.jpg";
import g5 from "../images/gallary/g5.jpg";
import g6 from "../images/gallary/g6.jpg";
import g7 from "../images/gallary/g7.jpg";
import pic1 from "../images/testimonials/pic1.jpg";
import pic2 from "../images/testimonials/pic2.jpg";
import pic3 from "../images/testimonials/pic3.jpg";
import pic4 from "../images/testimonials/pic4.jpg";
import pic5 from "../images/testimonials/pic5.jpg";
import pic6 from "../images/testimonials/pic6.jpg";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Blog = () => {
  return (
    <>
    <div className="page-content bg-white">
	<Helmet>
          <title>Explore Blogs</title>
          <meta name="description" content="Blogs"/>
        </Helmet>
    {/* <!-- Inner Banner --> */}
    <div className="banner-wraper">
        <div className="page-banner" style={{backgroundImage:`url(${img1})`}}>
            <div className="container">
                <div className="page-banner-entry text-center">
                    <h1>Blog</h1>
                    {/* <!-- Breadcrumb row --> */}
                    <nav aria-label="breadcrumb" className="breadcrumb-row">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Blog Grid 3</li>
                        </ul>
                    </nav>
                </div>
            </div>
            <img className="pt-img1 animate-wave" src={waveBlue} alt=""/>
            <img className="pt-img2 animate2" src={circledots} alt=""/>
            <img className="pt-img3 animate-rotate" src={plusblue} alt=""/>
        </div>
        {/* <!-- Breadcrumb row END --> */}
    </div>
    {/* <!-- Inner Banner end --> */}
        
    {/* <!-- About us --> */}
    <section className="section-area section-sp1">
        <div className="container">
            <div className="row">
                <div className="col-xl-4 col-md-6">
                    <div className="blog-card mb-30">
                        <div className="post-media">
                            <Link to="/blogDetails"><img src={g1} alt=""/></Link>
                        </div>
                        <div className="post-info">
                            <ul className="post-meta">
                                <li className="author"><Link to="/blogDetails"><img src={pic1} alt=""/> Ashutosh</Link></li>
                                <li className="date"><i className="far fa-calendar-alt"></i> 21 July 2021</li>
                            </ul>
                            <h4 className="post-title"><Link to="/blogDetails">Dental Care for Women is very important</Link></h4>		
                            <Link to="/blogDetails" className="btn btn-outline-primary btn-sm">Read More <i className="btn-icon-bx fas fa-chevron-right"></i></Link>		
                        </div>
                    </div>							
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="blog-card mb-30">
                        <div className="post-media">
                            <Link to="/blogDetails"><img src={g8} alt=""/></Link>
                        </div>
                        <div className="post-info">
                            <ul className="post-meta">
                                <li className="author"><Link to="/blogDetails"><img src={pic2} alt=""/>  Santosh Kondekar</Link></li>
                                <li className="date"><i className="far fa-calendar-alt"></i> 20 July 2021</li>
                            </ul>
                            <h4 className="post-title"><Link to="/blogDetails">In this hospital there are special surgeon</Link></h4>		
                            <Link to="/blogDetails" className="btn btn-outline-primary btn-sm">Read More <i className="btn-icon-bx fas fa-chevron-right"></i></Link>			
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="blog-card mb-30">
                        <div className="post-media">
                            <Link to="/blogDetails"><img src={g10} alt=""/></Link>
                        </div>
                        <div className="post-info">
                            <ul className="post-meta">
                                <li className="author"><Link to="/blogDetails"><img src={pic3} alt=""/> Agrawal Arun Kumar</Link></li>
                                <li className="date"><i className="far fa-calendar-alt"></i> 19 July 2021</li>
                            </ul>
                            <h4 className="post-title"><Link to="/blogDetails">Why Is Skin Surgeon Considered Underrated</Link></h4>		
                            <Link to="/blogDetails" className="btn btn-outline-primary btn-sm">Read More <i className="btn-icon-bx fas fa-chevron-right"></i></Link>		
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="blog-card mb-30">
                        <div className="post-media">
                            <Link to="/blogDetails"><img src={g7} alt=""/></Link>
                        </div>
                        <div className="post-info">
                            <ul className="post-meta">
                                <li className="author"><Link to="/blogDetails"><img src={pic4} alt=""/> Agrawal Arun Kumar </Link></li>
                                <li className="date"><i className="far fa-calendar-alt"></i> 18 July 2021</li>
                            </ul>
                            <h4 className="post-title"><Link to="/blogDetails">Understand Health Before You Regret</Link></h4>		
                            <Link to="/blogDetails" className="btn btn-outline-primary btn-sm">Read More <i className="btn-icon-bx fas fa-chevron-right"></i></Link>		
                        </div>
                    </div>							
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="blog-card mb-30">
                        <div className="post-media">
                            <Link to="/blogDetails"><img src={g5} alt=""/></Link>
                        </div>
                        <div className="post-info">
                            <ul className="post-meta">
                                <li className="author"><Link to="/blogDetails"><img src={pic5} alt=""/> Agnihotri Kumar </Link></li>
                                <li className="date"><i className="far fa-calendar-alt"></i> 17 July 2021</li>
                            </ul>
                            <h4 className="post-title"><Link to="/blogDetails">Health Will Be A Thing Of The Past And Here's Why.</Link></h4>		
                            <Link to="/blogDetails" className="btn btn-outline-primary btn-sm">Read More <i className="btn-icon-bx fas fa-chevron-right"></i></Link>		
                        </div>
                    </div>							
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="blog-card mb-30">
                        <div className="post-media">
                            <Link to="/blogDetails"><img src={g4} alt=""/></Link>
                        </div>
                        <div className="post-info">
                            <ul className="post-meta">
                                <li className="author"><Link to="/blogDetails"><img src={pic6} alt=""/> Ashutosh</Link></li>
                                <li className="date"><i className="far fa-calendar-alt"></i> 16 July 2021</li>
                            </ul>
                            <h4 className="post-title"><Link to="/blogDetails">Can you get a diflucan prescription online?</Link></h4>		
                            <Link to="/blogDetails" className="btn btn-outline-primary btn-sm">Read More <i className="btn-icon-bx fas fa-chevron-right"></i></Link>			
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="blog-card mb-30">
                        <div className="post-media">
                            <Link to="/blogDetails"><img src={g3} alt=""/></Link>
                        </div>
                        <div className="post-info">
                            <ul className="post-meta">
                                <li className="author"><Link to="/blogDetails"><img src={pic1} alt=""/> Santosh Kondekar	</Link></li>
                                <li className="date"><i className="far fa-calendar-alt"></i> 15 July 2021</li>
                            </ul>
                            <h4 className="post-title"><Link to="/blogDetails">Ten Gigantic Influences Of Health</Link></h4>		
                            <Link to="/blogDetails" className="btn btn-outline-primary btn-sm">Read More <i className="btn-icon-bx fas fa-chevron-right"></i></Link>		
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="blog-card mb-30">
                        <div className="post-media">
                            <Link to="/blogDetails"><img src={g2} alt=""/></Link>
                        </div>
                        <div className="post-info">
                            <ul className="post-meta">
                                <li className="author"><Link to="/blogDetails"><img src={pic2} alt=""/> Aggarwal Supriya</Link></li>
                                <li className="date"><i className="far fa-calendar-alt"></i> 14 July 2021</li>
                            </ul>
                            <h4 className="post-title"><Link to="/blogDetails">Why Is Skin Surgeon Considered Underrated</Link></h4>		
                            <Link to="/blogDetails" className="btn btn-outline-primary btn-sm">Read More <i className="btn-icon-bx fas fa-chevron-right"></i></Link>		
                        </div>
                    </div>							
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="blog-card mb-30">
                        <div className="post-media">
                            <Link to="/blogDetails"><img src={g6} alt=""/></Link>
                        </div>
                        <div className="post-info">
                            <ul className="post-meta">
                                <li className="author"><Link to="/blogDetails"><img src={pic3} alt=""/> Agnihotri Kumar</Link></li>
                                <li className="date"><i className="far fa-calendar-alt"></i> 13 July 2021</li>
                            </ul>
                            <h4 className="post-title"><Link to="/blogDetails">Everyone need to go Dentist regularly</Link></h4>		
                            <Link to="/blogDetails" className="btn btn-outline-primary btn-sm">Read More <i className="btn-icon-bx fas fa-chevron-right"></i></Link>		
                        </div>
                    </div>							
                </div>
            </div>
        </div>
    </section>
    
</div>
    </>
  )
}

export default Blog
