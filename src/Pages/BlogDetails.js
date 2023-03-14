import React from "react";
import img1 from "../images/banner/img1.jpg";
import plusblue from "../images/shap/plus-blue.png";
import waveBlue from "../images/shap/wave-blue.png";
import circledots from "../images/shap/circle-dots.png";
import dentist from "../images/blog/dentist.jpg";
import dr1 from "../images/dr1.jpg";
import dr2 from "../images/dr2.png";
import dr4 from "../images/dr4.webp";
import dr5 from "../images/blog/dr5.jpg";
import dr6 from "../images/blog/dr6.jpg";
import dr7 from "../images/blog/dr7.png";
import dr8 from "../images/blog/dr8.jpg_large";
import pic2 from "../images/blog/recent-blog/pic2.jpg";
import pic3 from "../images/blog/recent-blog/pic3.jpg";
import g3 from "../images/gallary/g1.jpg";
import g4 from "../images/gallary/g2.jpg";
import g5 from "../images/gallary/g3.jpg";
import g6 from "../images/gallary/g4.jpg";
import g7 from "../images/gallary/g5.jpg";
import g8 from "../images/gallary/g6.jpg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const BlogDetails = () => {
  return (
    <>
      <div className="page-content bg-white">
      <Helmet>
          <title>Explore Blogs in Details</title>
          <meta name="description" content="Precious Tips To Help You Get Better."/>
        </Helmet>
        {/* <!-- Inner Banner --> */}
        <div className="banner-wraper">
          <div
            className="page-banner"
            style={{ backgroundImage: `url(${img1})` }}
          >
            <div className="container">
              <div className="page-banner-entry text-center">
                <h1>Blog Details</h1>
                {/* <!-- Breadcrumb row --> */}
                <nav aria-label="breadcrumb" className="breadcrumb-row">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-home"
                        >
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                          <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item">Blog</li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Blog Details
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <img className="pt-img1 animate-wave" src={waveBlue} alt="" />
            <img className="pt-img2 animate2" src={circledots} alt="" />
            <img className="pt-img3 animate-rotate" src={plusblue} alt="" />
          </div>
          {/* <!-- Breadcrumb row END --> */}
        </div>
        {/* <!-- Inner Banner end --> */}

        <section className="section-area section-sp1 bg-white">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-7 col-xl-8 mb-30 mb-md-50">
                {/* <!-- blog start --> */}
                <div className="blog-card blog-single">
                  <div className="post-media">
                    <img src={dentist} alt="" />
                  </div>
                  <div className="info-bx">
                    <ul className="post-meta">
                      <li className="author">
                        <Link to="/blogDetails">
                          <img src={dr1} alt="" />
                          Tejas Deshmukh
                        </Link>
                      </li>
                      <li className="date">
                        <i className="far fa-calendar-alt"></i> 19 July 2021
                      </li>
                    </ul>
                    <div className="ttr-post-title">
                      <h2 className="post-title">
                        Precious Tips To Help You Get Better.
                      </h2>
                    </div>
                    <div className="ttr-post-text">
                      <p>
                        You just need to enter the keyword and select the
                        keyword type to generate a list of 6 title ideas and
                        suggestions. If you’re not satisfied with the results,
                        you can always hit the refresh button to generate a new
                        list of unique titles.
                      </p>
                      <blockquote className="wp-block-quote">
                        <p>
                          Once you’ve gotten all the titles and have chosen the
                          best one, the next thing you need to do is to craft a
                          magnetic content. Great content marketers excel at
                          creating content.
                        </p>
                      </blockquote>
                      <p>
                        Raj Hospitals has been the pioneer in bringing
                        ground-breaking healthcare technologies to India.
                      </p>
                      <ul className="wp-block-gallery columns-6 is-cropped">
                        <li className="blocks-gallery-item">
                          <img alt="" src={dr2} />
                        </li>
                        <li className="blocks-gallery-item">
                          <img alt="" src={dr4} />
                        </li>
                      </ul>
                      <p>
                        You just need to enter the keyword and select the
                        keyword type to generate a list of 6 title ideas and
                        suggestions. If you’re not satisfied with the results,
                        you can always hit the refresh button to generate a new
                        list of unique titles.
                      </p>
                      <p>
                        It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially
                        unchanged. It was popularised in the 1960s with the
                        release of Letraset sheets containing Lorem Ipsum
                        passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                      </p>
                    </div>
                    <div className="ttr-post-footer">
                      <div className="post-tags">
                        <strong>Tags:</strong>
                        <Link to="javascript;">Health</Link>
                        <Link to="javascript;">Growth</Link>
                        <Link to="javascript;">Life</Link>
                      </div>
                      <div className="share-post ml-auto">
                        <ul className="social-media mb-0">
                          <li>
                            <strong>Share:</strong>
                          </li>
                          <li>
                            <Link target="blank" to="https://www.facebook.com/">
                              <i className="fab fa-facebook-f"></i>
                            </Link>
                          </li>
                          <li>
                            <Link target="blank" to="https://www.instagram.com/">
                              <i className="fab fa-instagram"></i>
                            </Link>
                          </li>
                          <li>
                            <Link target="blank" to="https://www.linkedin.com/">
                              <i className="fab fa-linkedin-in"></i>
                            </Link>
                          </li>
                          <li>
                            <Link target="blank" to="https://twitter.com/">
                              <i className="fab fa-twitter"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="author-box blog-user mb-50">
                  <div className="author-profile-info">
                    <div className="author-profile-pic">
                      <img src={dr5} alt="" />
                    </div>
                    <div className="author-profile-content">
                      <h5>Amit Vatkar</h5>
                      <p className="mb-20">
                        Aenean sollicitudin, lorem quis biber idum auctor anisi
                        elit consequat happ quam vel enim augue.
                      </p>
                      <ul className="social-media mb-0">
                        <li>
                          <Link target="blank" to="https://www.facebook.com/">
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                        </li>
                        <li>
                          <Link target="blank" to="https://www.instagram.com/">
                            <i className="fab fa-instagram"></i>
                          </Link>
                        </li>
                        <li>
                          <Link target="blank" to="https://www.linkedin.com/">
                            <i className="fab fa-linkedin-in"></i>
                          </Link>
                        </li>
                        <li>
                          <Link target="blank" to="https://twitter.com/">
                            <i className="fab fa-twitter"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="clear" id="comment-list">
                  <div className="comments-area" id="comments">
                    <h4 className="widget-title">8 Comments</h4>

                    <div className="clearfix">
                      {/* <!-- comment list END --> */}
                      <ol className="comment-list">
                        <li className="comment">
                          <div className="comment-body">
                            <div className="comment-author vcard">
                              <img className="avatar photo" src={dr6} alt="" />
                              <div className="clearfix">
                                <cite className="fn">Gaurav Gupta</cite>
                                <span className="says">says:</span>
                                <div className="comment-meta">
                                  <Link to="javascript;">
                                    May 09, 2021 at 10:45 am
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <p>
                              Leveraging its vast medical expertise &
                              technological advantage, Apollo Hospitals has
                              consistently delivered best in className clinical
                              outcomes.
                            </p>
                            <div className="reply">
                              <Link
                                to="javascript;"
                                className="comment-reply-link"
                              >
                                Reply
                              </Link>
                            </div>
                          </div>

                          {/* <!-- list END --> */}
                        </li>
                        <li className="comment">
                          <div className="comment-body">
                            <div className="comment-author vcard">
                              <img className="avatar photo" src={dr7} alt="" />
                              <div className="clearfix">
                                <cite className="fn">Gautam Banga</cite>
                                <span className="says">says:</span>
                                <div className="comment-meta">
                                  <Link to="javascript;">
                                    May 09, 2021 at 10:45 am
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <p>
                              Raj Pharmacy is India’s first, largest and most
                              trusted branded pharmacy network, with over 5000
                              plus outlets covering the entire nation.
                            </p>
                            <div className="reply">
                              <Link
                                to="javascript"
                                className="comment-reply-link"
                              >
                                Reply
                              </Link>
                            </div>
                          </div>
                        </li>
                        <li className="comment">
                          <div className="comment-body">
                            <div className="comment-author vcard">
                              <img className="avatar photo" src={dr8} alt="" />
                              <div className="clearfix">
                                <cite className="fn">Santosh Kondekar</cite>
                                <span className="says">says:</span>
                                <div className="comment-meta">
                                  <Link to="javascript;">
                                    May 09, 2021 at 10:45 am
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <p>
                              Largest network of the world’s finest and
                              brightest medical experts who provide
                              compassionate care using outstanding expertise and
                              advanced technology.
                            </p>
                            <div className="reply">
                              <Link
                                to="javascript;"
                                className="comment-reply-link"
                              >
                                Reply
                              </Link>
                            </div>
                          </div>
                        </li>
                      </ol>
                      {/* <!-- comment list END --> */}
                      {/* <!-- Form --> */}
                      <div className="comment-respond" id="respond">
                        <h4 className="widget-title">Leave a Reply</h4>
                        <form
                          className="comment-form"
                          id="commentform"
                          method="post"
                        >
                          <p className="comment-form-author">
                            <label htmlFor="author">
                              Name <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              // value=""
                              name="Author"
                              placeholder="Author"
                              id="author"
                            />
                          </p>
                          <p className="comment-form-email">
                            <label htmlFor="email">
                              Email <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              // value=""
                              placeholder="Email"
                              name="email"
                              id="email"
                            />
                          </p>
                          <p className="comment-form-comment">
                            <label htmlFor="comment">Comment</label>
                            <textarea
                              rows="8"
                              name="comment"
                              placeholder="Comment"
                              id="comment"
                            ></textarea>
                          </p>
                          <p className="form-submit">
                            <input
                              type="submit"
                              // value="Submit Comment"
                              className="submit"
                              id="submit"
                              name="submit"
                            />
                          </p>
                        </form>
                      </div>
                      {/* <!-- Form --> */}
                    </div>
                  </div>
                </div>
                {/* <!-- blog END --> */}
              </div>
              <div className="col-md-12 col-lg-5 col-xl-4 mb-30">
                <aside className="side-bar sticky-top aside-bx">
                  <div className="widget widget_search">
                    <form role="search" method="post" className="searchform">
                      <div className="input-group">
                        <input
                          name="text"
                          className="form-control"
                          placeholder="Enter your keywords..."
                          type="text"
                        />
                        <div className="input-group-btn">
                          <button type="submit" className="btn btn-secondary">
                            <i className="fa fa-search"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="widget recent-posts-entry">
                    <h4 className="widget-title">Recent Posts</h4>
                    <div className="widget-post-bx">
                      <div className="widget-post clearfix">
                        <div className="ttr-post-media">
                          <img src={dentist} width="200" height="143" alt="" />
                        </div>
                        <div className="ttr-post-info">
                          <div className="ttr-post-header">
                            <h6 className="post-title">
                              <Link to="/blogDetails">
                                Precious Tips To Help You Get Better.
                              </Link>
                            </h6>
                          </div>
                          <ul className="post-meta">
                            <li className="date">
                              <i className="far fa-calendar-alt"></i> 21 July
                              2021
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="widget-post clearfix">
                        <div className="ttr-post-media">
                          <img src={pic2} width="200" height="160" alt="" />
                        </div>
                        <div className="ttr-post-info">
                          <div className="ttr-post-header">
                            <h6 className="post-title">
                              <Link to="/blogDetails">
                                Ten Doubts You Should Clarify About.
                              </Link>
                            </h6>
                          </div>
                          <ul className="post-meta">
                            <li className="date">
                              <i className="far fa-calendar-alt"></i> 20 July
                              2021
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="widget-post clearfix">
                        <div className="ttr-post-media">
                          <img src={pic3} width="200" height="160" alt="" />
                        </div>
                        <div className="ttr-post-info">
                          <div className="ttr-post-header">
                            <h6 className="post-title">
                              <Link to="/blogDetails">
                                The 10 Steps Needed For Putting.
                              </Link>
                            </h6>
                          </div>
                          <ul className="post-meta">
                            <li className="date">
                              <i className="far fa-calendar-alt"></i> 19 July
                              2021
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="widget widget_gallery gallery-grid-3">
                    <Link to="/gallary">
                      <h4 className="widget-title">Our Gallery</h4>
                    </Link>

                    <ul className="magnific-image">
                      <li>
                        <Link
                          to="/gallary"
                          className="magnific-anchor"
                        >
                          <img src={g7} alt="" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/gallary"
                          className="magnific-anchor"
                        >
                          <img src={g8} alt="" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/gallary"
                          className="magnific-anchor"
                        >
                          <img src={g3} alt="" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/gallary"
                          className="magnific-anchor"
                        >
                          <img src={g4} alt="" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/gallary"
                          className="magnific-anchor"
                        >
                          <img src={g5} alt="" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/gallary"
                          className="magnific-anchor"
                        >
                          <img src={g6} alt="" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="widget widget_tag_cloud">
                    <h4 className="widget-title">Tags</h4>
                    <div className="tagcloud">
                      <Link to="javascript;">Improvement</Link>
                      <Link to="javascript;">Health</Link>
                      <Link to="javascript;">Life</Link>
                      <Link to="javascript;">Covid</Link>
                      <Link to="javascript;">Healthy</Link>
                      <Link to="javascript;">Growth</Link>
                      <Link to="javascript;">Education</Link>
                      <Link to="javascript;">Manage</Link>
                      <Link to="javascript;">General</Link>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogDetails;
