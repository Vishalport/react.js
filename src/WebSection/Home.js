import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";

export default function Body() {
  useEffect(() => {
    Aos.init({ duration:2000 });
  }, []);
  return (
    <>
      <div className="home">
        <div class="container">
          <div class="container-fluid hero" >
          <img src="images/hero.svg" alt="" data-aos="fade-down" data-aos-duration="2000" />
            <div class="container">
            {/* The magic can’t begin until you get started */}
              <h2><span><br/>The magic can’t begin until</span><br/>you get started.</h2>
              <p>ARISE SOLUBTIONS has partnered with Amazon Web Services<br/><br/>
              ARISE SOLUBTIONS has partnered with Amazon Web Services<br/> to accelerate your business journey to the cloud.</p><br/>
              <div class="hero-btns" >
                <a data-scroll href="about">GET STARTED</a>
                <a data-scroll href="contact">Get in Touch.</a>
              </div>
            </div>
          </div>
        </div>

        {/* Services that we provide starts */}
        <section id="about-us" class="services">
            <div class="container-fluid">
              <div class="container">
                <div class="row">
                  <div class="col-12 col-sm-6 col-lg-6">
                    <div class="service-box  text-center">
                      <img src="https://dataevolve.in/assets/service-icon/cloud.svg" alt="" width="150" height="150" />
                      <h3>Cloud Services</h3>
                      <p>The move to the cloud can be intimidating, but Arise Soltuion’s team of engineers are there to help you.</p>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 col-lg-6">
                    <div class="service-box text-center">
                      <img src="https://dataevolve.in/assets/service-icon/security.svg" alt="" width="150" height="150" />
                      <h3>Cyber Security</h3>
                      <p>We will keep your data safe and sound Right from detection to protection, We will help our clients strengthen their cyber-Security from top-to-toe.</p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-sm-6 col-lg-6">
                    <div data-Aos="fade-up" class="service-box  text-center">
                      <img src="https://dataevolve.in/assets/service-icon/cyber-security.svg" alt="" width="150" height="150" />
                      <h3>Managed Security Services</h3>
                      <p>We can help you overcome security threats, attacks, breaches, and other vulnerabilities without exhausting your own IT resources.</p>
                      
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 col-lg-6">
                    <div data-Aos="fade-down" class="service-box text-center">
                      <img src="https://dataevolve.in/assets/service-icon/development.svg" alt="" width="150" height="150" />
                      <h3>Development Services</h3>
                      <p>The software and legacy hardware in your existing infrastructure should be-updated with efficient IT modernization strategies.</p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-sm-6 col-lg-6">
                    <div data-Aos="fade-up" class="service-box text-center">
                      <img src="https://dataevolve.in/assets/service-icon/cloud.svg" alt="" width="200" height="200" />
                      <h3>IT Modernization</h3>
                      <p>Arise Solutions can quickly deliver reliable and repeatable cloud infrastructure.</p>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 col-lg-6">
                    <div data-Aos="fade-down" class="service-box  text-center">
                      <img src="https://dataevolve.in/assets/service-icon/devops.svg" alt="" width="180" height="180" />
                      <h3>Agile/DevOps Orchestration</h3>
                      <p>Arise Solutions team is always here to help you with Content Management, Data Management, Data Quality, and Data Processing.</p>
                      
                    </div>
                  </div>
                </div>
                 <div class="row">
                    <div class="col-12 col-sm-6 col-lg-6">
                      <div data-Aos="fade-up" class="service-box text-center">
                        <img src="https://dataevolve.in/assets/service-icon/data.svg" alt="" width="180" height="180" />
                        <h3>Data Services</h3>
                        <p>Our developers are capable of fulfilling the project requirements, Be it web or application development.</p>
                      </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-6">
                      <div data-Aos="fade-down" class="service-box text-center">
                        <img src="https://dataevolve.in/assets/service-icon/uxui.svg" alt="" width="180" height="180" />
                        <h3>UX-UI Design</h3>
                        <p>Arise Solutions exercise best practices and methods to bring out the best digital experience for the clients.</p>
                      </div>
                    </div>
                 </div>
              </div>
            </div>
          </section>
      </div>
        
          <section id="about-us" class="services">
            <div class="container-fluid">
              <div class="side-img"> 
                <img src="images/aside.svg" alt=""/>
              </div>
              <div class="container">
                <div class="row">
                  <div class="col-12 col-sm-12 col-lg-4 service-txt">
                    <h2>Anything you need,we’ve got you covered</h2>
                    <div class="hero-btns service-btn">
                      <a data-scroll href="contact.html">Get in Touch</a>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 col-lg-4">
                    <div data-Aos="fade-right" class="service-box">
                      <img src="images/service-icon1.svg" alt=""/>                   
                      <h3>Web And  Graphic<br/>Design</h3>                      
                      <p>Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.</p>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 col-lg-4">
                    <div data-Aos="fade-left" class="service-box">
                      <img src="images/service-icon2.svg" alt=""/>                  
                      <h3>Web And App<br/>Development</h3>                   
                      <p>Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Technologies starts here*/}
        {/* <section id="about-us" class="services">
            <div class="container-fluid">
              <div class="row" data-aos="fade-up" data-aos-duration="3000">
                <div class="col-12">
                  <h5>TECHNOLOGIES WE WORK WITH</h5>
                  <h2>Tools we use to Create Magic</h2>
                </div>
              </div>
              <div class="container">
                <div class="row">
                <div class="col-12 col-sm-6 col-lg-6" data-aos="fade-right" data-aos-duration="3000">
                  <div class="service-box  text-center">
                      <div className="row" data-aos="fade-down" data-aos-duration="3000">
                        <div className="col-12 col-sm-3 col-lg-3 mt-4">
                          <img src="https://img.icons8.com/external-flaticons-flat-circular-flat-icons/100/000000/external-content-management-media-agency-flaticons-flat-circular-flat-icons.png"/>
                        </div>
                        <div className="col-12 col-sm-9 col-lg-9"><br /><br />
                          <h5>Content Management System</h5>
                          <br /><br />
                          <div className="row text-center">
                            <div className="col-9 col-sm-4 col-lg-4">
                              <img src="https://img.icons8.com/color/96/000000/drupal.png" title="DRUPAL" />
                            </div>
                            <div className="col-9 col-sm-4 col-lg-4">
                              <img src="https://img.icons8.com/external-tal-revivo-duo-tal-revivo/100/000000/external-magento-is-an-open-source-e-commerce-platform-written-in-php-logo-duo-tal-revivo.png" title="MAGENTO" />
                            </div>
                            <div className="col-9 col-sm-4 col-lg-4">
                              <img src="https://img.icons8.com/color/96/000000/webflow.png"  title="WEBFLOW"/>
                            </div>
                          </div>
                          <div className="row text-center">
                            <div className="col-9 col-sm-6 col-lg-6">
                              <img src="https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/100/000000/external-shopify-an-e-commerce-platform-that-helps-to-sell-online-logo-tritone-tal-revivo.png" title="SHOPIFY"/>
                            </div>
                            <div className="col-9 col-sm-6 col-lg-6">
                              <img src="https://img.icons8.com/color/96/000000/joomla.png" title="JOOMLA"/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 col-lg-6" data-aos="fade-left" data-aos-duration="3000">
                   <div class="service-box  text-center">
                      <div className="row" data-aos="fade-up" data-aos-duration="3000">
                        <div className="col-md-3 mt-4">
                          <img src="https://img.icons8.com/ios-filled/100/000000/w3c.png"/>
                        </div>
                        <div className="col-md-9"><br /><br />
                          <h5>Web & Mobile App Design</h5>
                          <br /><br />
                          <div className="row text-center">
                            <div className="col-md-4">
                              <img src="https://img.icons8.com/fluency/96/000000/adobe-photoshop.png" title="ADOBE PHOTOSHOP" />
                            </div>
                            <div className="col-md-4">
                              <img src="https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/100/000000/external-figma-a-better-way-to-design-and-gather-feedback-all-in-one-place-logo-tritone-tal-revivo.png" title="FIGMA" />
                            </div>
                            <div className="col-md-4">
                              <img src="https://img.icons8.com/color/96/000000/adobe-flash--v1.png" title="ADOBE FLASH" />
                            </div>
                          </div>
                          <div className="row text-center">
                            <div className="col-md-6">
                              <img src="https://img.icons8.com/carbon-copy/100/000000/sketch.png" title="SKETCH" />
                            </div>
                            <div className="col-md-6">
                              <img src="https://img.icons8.com/color/96/000000/adobe-indesign--v1.png" title="ADOBE INDESIGN" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-sm-6 col-lg-6" data-aos="fade-right" data-aos-duration="3000">
                    <div class="service-box  text-center">
                      <div className="row" data-aos="fade-down" data-aos-duration="3000">
                        <div className="col-md-3 mt-4">
                          <img src="https://img.icons8.com/ios-filled/100/000000/amazon-s3.png"/>
                        </div>
                        <div className="col-md-9"><br /><br />
                          <h5>Annual Hosting Services</h5>
                          <br /><br />
                          <div className="row text-center">
                            <div className="col-md-4">
                              <img src="https://img.icons8.com/external-inipagistudio-lineal-color-inipagistudio/64/000000/external-hosting-cloud-computing-network-inipagistudio-lineal-color-inipagistudio.png" title="HOSTINGER"/>
                            </div>
                            <div className="col-md-4">
                              <img src="https://img.icons8.com/ios/100/000000/aws-cloudfront.png" title="AWS" />
                            </div>
                            <div className="col-md-4">
                              <img src="https://img.icons8.com/color/96/000000/google-cloud-print--v1.png" title="GOOGLE CLOUD" />
                            </div>
                          </div>
                          <div className="row text-center">
                            <div className="col-md-6">
                              <img src="https://img.icons8.com/fluency/96/000000/microsoft-blend.png" title="MICROSOFT BLEND"/>
                            </div>
                            <div className="col-md-6">
                            <img src="https://img.icons8.com/color/96/000000/microsoft-groove.png" title="GROOVE" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 col-lg-6" data-aos="fade-left" data-aos-duration="3000">
                    <div class="service-box  text-center">
                      <div className="row" data-aos="fade-up" data-aos-duration="3000">
                        <div className="col-md-3">
                          <img src="https://img.icons8.com/ios-filled/200/000000/api-settings.png"/>
                        </div>
                        <div className="col-md-9"><br /><br />
                          <h5>Restful API Development</h5>
                          <br /><br />
                          <div className="row text-center">
                            <div className="col-md-4">
                              <img src="https://img.icons8.com/color/96/000000/html-5--v1.png"/>
                            </div>
                            <div className="col-md-4">
                              <img src="https://img.icons8.com/color/96/000000/css3.png"/>
                            </div>
                            <div className="col-md-4">
                              <img src="https://img.icons8.com/color/96/000000/angularjs.png"/>
                            </div>
                          </div>
                          <div className="row text-center">
                            <div className="col-md-6">
                              <img src="https://img.icons8.com/ultraviolet/80/000000/react--v1.png"/>
                            </div>
                            <div className="col-md-6">
                              <img src="https://img.icons8.com/color/96/000000/javascript--v1.png"/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          Technologies ends here */}

          <section class="about">
            <div class="container">
              <div class="row">
                <div class="col-12 col-sm-12 col-lg-6">
                  <img src="images/aboutimg.svg" alt=""/>
                </div>
                <div class="col-12 col-sm-12 col-lg-6">
                  <h5>OUR COMPANY</h5>
                  <h2>Some Fine<br/>Words About Us</h2>
                  
                  <p>Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.Vestibulum ac diam sit amet.Quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.</p>
                </div>
              </div>
            </div>
          </section>



          <section id="portfolio" class="portfolio">
            <div class="container-fluid">
              <div class="portfolio-aside">
                <img src="images/aside3.svg" alt=""/>
              </div>
              <div class="container">
                <div class="row">
                  <div class="col-12">
                    <h2>See some of our<br/>Creative work.</h2>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-lg-4 work-box">
                    <div class="photobox photobox_type10">
                        <div class="photobox__previewbox">                       
                          <img src="images/1.png" class="photobox__preview" alt="Preview"/>
                          
                          <span class="photobox__label">Awesome Work</span>
                        </div>
                      </div>
                  </div>
                  <div class="col-12 col-lg-4 work-box">
                    <div class="photobox photobox_type10">
                        <div class="photobox__previewbox">                         
                          <img src="images/2.png" class="photobox__preview" alt="Preview"/>                         
                          <span class="photobox__label">Awesome Work</span>
                        </div>
                      </div>
                  </div>
                  <div class="col-12 col-lg-4 work-box">
                    <div class="photobox photobox_type10">
                        <div class="photobox__previewbox">                     
                          <img src="images/3.png" class="photobox__preview" alt="Preview"/>                         
                          <span class="photobox__label">Awesome Work</span>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-lg-4 work-box">
                    <div class="photobox photobox_type10">
                        <div class="photobox__previewbox">                         
                          <img src="images/4.png" class="photobox__preview" alt="Preview"/>                          
                          <span class="photobox__label">Awesome Work</span>
                        </div>
                      </div>
                  </div>
                  <div class="col-12 col-lg-4 work-box">
                    <div class="photobox photobox_type10">
                        <div class="photobox__previewbox">                         
                          <img src="images/5.png" class="photobox__preview" alt="Preview"/>                          
                          <span class="photobox__label">Awesome Work</span>
                        </div>
                      </div>
                  </div>
                  <div class="col-12 col-lg-4 work-box">
                    <div class="photobox photobox_type10">
                        <div class="photobox__previewbox">                         
                          <img src="images/6.png" class="photobox__preview" alt="Preview"/>                         
                          <span class="photobox__label">Awesome Work</span>
                        </div>
                      </div>
                  </div>
                </div>             
                <div id="hiden-gallery" class="hide">
                  <div class="row">
                    <div class="col-12 col-lg-4 work-box">
                      <div class="photobox photobox_type10">
                          <div class="photobox__previewbox">                        
                            <img src="images/5.png" class="photobox__preview" alt="Preview"/>                           
                            <span class="photobox__label">Awesome Work</span>
                          </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4 work-box">
                      <div class="photobox photobox_type10">
                          <div class="photobox__previewbox">                            
                            <img src="images/3.png" class="photobox__preview" alt="Preview"/>                        
                            <span class="photobox__label">Awesome Work</span>
                          </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4 work-box">
                      <div class="photobox photobox_type10">
                          <div class="photobox__previewbox">                         
                            <img src="images/1.png" class="photobox__preview" alt="Preview"/>                           
                            <span class="photobox__label">Awesome Work</span>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 more-btn">                  
                    <a class="more-btn-inside">Show More.</a>
                  </div>
                </div>
              </div>
            </div>
          </section>

      

          <section id="blog" class="blog">
            <div class="container-fluid">
              <div class="blog-aside">
                <img src="images/aside4.svg" alt=""/>
              </div>
              <div class="container">
                <div class="row">
                  <div class="col-10">
                    <h5>BLOG STORIES</h5>
                    <h2>Check Our News</h2>
                  </div>
                </div>
                <div id="blog-drag" class="row blog-slider">
                  <div data-Aos="fade-right" class="col-1 col-lg-3 blog-box blog-first, argent">                 
                    <h6>NEW ADVENTURE</h6>                  
                    <p>17 March 2019</p>        
                   <p>Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.</p>
                  </div>
                  <div data-Aos="fade-right" class="col-12 col-lg-3 blog-box blog-second, argent">                
                    <h6>NEW ADVENTURE</h6>          
                    <p>17 March 2019</p>                   
                    <p>Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.</p>
                  </div>
                  <div data-Aos="fade-right" class="col-12 col-lg-3 blog-box blog-third, argent">                 
                    <h6>NEW ADVENTURE</h6>                  
                    <p>17 March 2019</p>                   
                   <p>Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.</p>
                  </div>       
                  <div data-Aos="fade-right" class="col-12 col-lg-3 blog-box blog-4, argent">       
                    <h6>NEW ADVENTURE</h6>
                    <p>17 March 2019</p>                 
                    <p>Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.</p>
                  </div>
                  <div data-Aos="fade-right" class="col-12 col-lg-3 blog-box">             
                    <h6>NEW ADVENTURE</h6>
                    <p>17 March 2019</p>
                    <p>Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.</p>
                  </div>
                  <div data-Aos="fade-right" class="col-12 col-lg-3 blog-box">
                    <h6>NEW ADVENTURE</h6>
                    <p>17 March 2019</p>
                    <p>Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.</p>
                  </div>
                </div>
                <button id="blog-btn">Show More Stories</button>
              </div>
            </div>
          </section> 
           
    
      </>

  )
}
