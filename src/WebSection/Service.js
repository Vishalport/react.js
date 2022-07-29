import React ,{ useEffect } from "react";
import { NavLink } from "react-router-dom";
import Aos from 'aos';
import "aos/dist/aos.css";

function Services() {
    useEffect(() => {
        Aos.init({ duration:2000 });
      }, []);
  return (
    <div className="services">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7" data-aos="fade-right" data-aos-duration="3000">
            <h2>SERVICES</h2>            
          </div>
          <div class="col-lg-5">
            <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="https://img.freepik.com/free-vector/designers-are-working-desing-web-page-web-design-user-interface-user-experience-content-organization_335657-4403.jpg?w=2000"
                alt=""
                data-aos="fade-left" data-aos-duration="3000"
                />
          </div>
        </div>

        <div class="row align-items-center my-5" data-aos="fade-up" data-aos-duration="3000">
          <div class="col-lg-12">
            <h4 class="color-h4">Magic we can create</h4>     
            <p>We specialize in a wide range of Cloud Services, Web/ Application design, and development. Our team of experts will help businesses elevate their value and productivity through our services. We are here to help you decide the right architecture and processes to follow and oversee the successful delivery of your projects.</p>       
            <p>Arise Solutions assures that our team of talented developers, designers, and data analysts will help you reach your goals. We take care of your development needs, and you can put all your heart and soul into the business.</p>
          </div>          
        </div>

        {/* cloud services start */}
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-12 col-lg-6" data-aos="fade-right" data-aos-duration="2000">
                <img src="https://pngimage.net/wp-content/uploads/2019/05/communicative-icon-png-1.png" alt=""/>
                </div>
                <div class="col-12 col-sm-12 col-lg-6" data-aos="fade-left" data-aos-duration="3000">
                <h5>Cloud Services</h5>
                <h3>We were born in clouds</h3>
                <p>We are an end-to-end service provider for all your cloud computing needs. Start getting the most from your cloud technologies. Accelerate your move to multi-cloud with industry-leading tools and agile best practices to migrate and modernize your applications. Arise Solutions’s AWS-certified engineers have the experience and expertise to compress the timeline, avoid pitfalls, and reduce downtime as you migrate data and applications to the cloud.</p>
                
                
                <div class="hero-btns contact-btn">
                    <a href="#">AWS Partnership</a>
                </div>
                </div>
            </div>
        </div>
        {/* cloud services ends */}

        {/* Cyber security starts */}
        <section class="about">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-12 col-lg-6" data-aos="fade-right" data-aos-duration="2000">
                        <h5>Cyber Security</h5>
                        <h3>We will keep your data safe and sound</h3>
                        <p>Right from detection to protection, We will help our clients strengthen their cyber-Security from top-to-toe. Working with the help of amazing technologies like Cyber Analytics, Machine Learning, and Automation. We will make sure to enable enterprises to set up their own next-gen SOCs to effectively identify potential cybersecurity incidents, facilitating preventive action right in time.</p>
                    </div>
                    <div class="col-12 col-sm-12 col-lg-6" data-aos="fade-left" data-aos-duration="3000">
                        <img src="https://terranovasecurity.com/wp-content/uploads/2020/09/Cyber-Security-Awareness-Hub-icon.png" alt="" width="400" height="400" />
                    </div>
                </div>
            </div>
        </section>
        {/* Cyber security ends */}

        {/* Managed Security Services ends */}
        <section class="about">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-12 col-lg-6" data-aos="fade-right" data-aos-duration="2000">
                        <img src="https://www.pngitem.com/pimgs/m/387-3871463_download-web-security-png-free-download-website-security.png" alt="" width="400" height="400" />
                    </div>
                    <div class="col-12 col-sm-12 col-lg-6" data-aos="fade-left" data-aos-duration="2000">
                        <h5>Managed Security Services</h5>
                        <h3>Managed solutions depending on your requirements</h3>
                        <p>Our team will deliver a wide range of services includes:- flexible hosting options, technical assessments, and 24/7 security operation. We can help you overcome security threats, attacks, breaches, and other vulnerabilities without exhausting your own IT resources, and without paying an exorbitant sum for a server-based solution. We will integrate our services with your existing infrastructure, and we can even work in hybrid environments by using a mix of cloud and on-premise resources.</p>
                    </div>
                   
                </div>
            </div>
        </section>
        {/* Managed Security Services ends */}

        {/* Why Choose Our Security? starts */}
        <section class="about">
        <div class="container-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2>Why Choose Our <br/>Security?</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-lg-4 work-box" data-aos="fade-right" data-aos-duration="2000">
                        <img  className="text-center m-2" src="https://dataevolve.in/assets/service-icon/devops.svg" alt=""/><br/>
                        <br/><br/>
                        <h5 className="text-center">Custom-Tailored Armor</h5>
                        <p className="text-center">We’ll scale the right mix of managed solutions to suit your security requirements and business needs.</p>
                    </div>
                    <div class="col-12 col-lg-4 work-box" data-aos="fade-down" data-aos-duration="2000">
                        <img  className="text-center" src="https://media.istockphoto.com/vectors/business-meeting-illustration-vector-id1308949444?k=20&m=1308949444&s=612x612&w=0&h=AY1VF6FkzLPzA19yPWo3skg4HEyUMIC3gMZuKWx7uT8=" alt=""/>
                        <h5 className="text-center">Protective & Proactive</h5>
                        <p className="text-center">We’ve invested in best-in-class products, people, and processes to provide ongoing support and protection for our clients.</p>
                    </div>
                    <div class="col-12 col-lg-4 work-box" data-aos="fade-left" data-aos-duration="2000">
                        <img  className="text-center" src="https://img.freepik.com/free-vector/designers-are-working-desing-web-page-web-design-user-interface-user-experience-content-organization_335657-4403.jpg?w=2000" alt=""/>
                        <br/><br/>
                        <h5 className="text-center">Experties & Insight</h5>
                        <p className="text-center">From design and implementation to management and support, we take pride in building customized solutions for our clients.</p>
                    </div>
                </div>
            </div>
        </div>
        </section>
        {/* Why Choose Our Security? ends */}

        {/* IT Modernization starts */}
        <section class="about">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-12 col-lg-6" data-aos="fade-right" data-aos-duration="2000">
                        <h5>IT Modernization</h5>
                        <h3>Modern Software Requires Modern Hardware</h3>
                        <p>The software and legacy hardware in your existing infrastructure should be-updated with efficient IT modernization strategies. Our team will understand the technology ecosystem so that they can provide you with optimized solutions that will fulfill your business requirements.</p>
                        <div className="ul">
                            <ul class="service_page_lists">
                                <li>Pay Down Technical Debt </li>
                                <li>Support Expanding Workloads and DevOps Practices</li>
                                <li>Reduce Business Risk and Improve Data Security</li>
                                <li>Simplify the Path to Hybrid Cloud</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-lg-6" data-aos="fade-left" data-aos-duration="2000">
                        <img src="https://tarktech.com/wp-content/uploads/2020/06/Legacy.png" alt=""/>
                    </div>
                </div>
            </div>
        </section>
        {/* IT Modernization ends*/}

         {/* Agile/Devops starts */}
        <section class="about">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-12 col-lg-6" data-aos="fade-right" data-aos-duration="2000">
                        <img src="https://www.altexsoft.com/media/2018/08/DevOps-cycle.png" alt=""/>
                    </div>
                    <div class="col-12 col-sm-12 col-lg-6" data-aos="fade-left" data-aos-duration="2000">
                        <h5>Agile/DevOps Orchestration</h5>
                        <h3>Explore efficiencies and innovation</h3>
                        <p>By utilizing Agile management strategies and DevOps Infrastructure as Code (IaC) delivery methods, Arise Solutions can quickly deliver reliable and repeatable cloud infrastructure. Arise Solutions AWS Cloud provides a set of flexible services designed to enable companies to more rapidly and reliably build and deliver products using AWS and DevOps practices.</p>
                        <div className="ul">
                            <ul class="service_page_lists">
                                <li>Infrastructure As Code</li>
                                <li>Continuous Integration and Continuous Deployment</li>
                                <li>Deploying Application Code</li>
                                <li>Automating software release processes</li>
                                <li>Monitoring your application and infrastructure performance</li>
                                <li>Managing Infrastructure</li>
                            </ul>
                        </div>
                    </div>                   
                </div>
            </div>
        </section>
        {/* Agile/Devops ends */}

        {/* Data services starts  */}
        <section class="about">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-12 col-lg-6" data-aos="fade-right" data-aos-duration="2000">
                        <h5>Data Services</h5>
                        <h3>Looking for someone to Manage information and making the best use of it?</h3>
                        <p>Arise Solutions team is always here to help you with Content Management, Data Management, Data Quality, and Data Processing. Understanding our client’s business goals and objectives and then focusing on providing innovative solutions. We achieve this through flexibility and continuous improvement. The efficient use of data resources helps you save time and costs. And eventually, improve your ROI.</p>
                        <div className="row">
                            <div className="col-md-6">
                                <ul class="service_page_lists">
                                    <li>Content Management</li>
                                    <li>Data Quality</li>
                                </ul>
                            </div>
                            <div className="col-md-6" >
                                <ul class="service_page_lists">
                                    <li>Data Management</li>
                                    <li>Data Processing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-lg-6" data-aos="fade-left" data-aos-duration="2000">
                        <img src="https://acuvate.com/compass/wp-content/uploads/2020/11/data-analytics-companies-usa-banner-1-featured.png" alt=""/>
                    </div>
                </div>
            </div>
        </section>
        {/* Data services ends  */}

        {/* LET’S EXPLORE THE ROAD starts */}
        <div className="row">
            <div className="col-md-3" data-aos="fade-right" data-aos-duration="3000">
                <img src="https://png.pngtree.com/png-clipart/20200701/original/pngtree-a-man-who-works-at-a-computer-png-image_5361911.jpg" alt="" width="250" height="300" />
            </div>
            <div className="col-md-7" data-aos="fade-down" data-aos-duration="3000">
                <h2>LET’S EXPLORE THE ROAD TO SUCCESS TOGETHER</h2>
                <div class="hero-btns contact-btn">
                    <a href="#">WORK WITH US</a>
                </div>
            </div>
            <div className="col-md-2" data-aos="fade-left" data-aos-duration="3000">
                <img src="https://www.clipartmax.com/png/middle/108-1081569_dots-clipart-nine-9-dot-pattern.png" alt="" />
            </div>
        </div>
        {/* LET’S EXPLORE THE ROAD ends */}

        {/* Develpment services starts */}
        <section class="about">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-12 col-lg-6" data-aos="fade-right" data-aos-duration="2000">
                        <img src="https://sensationsolutions.com/wp-content/uploads/2022/03/Homepage-Header-Menu-Slider_04-1-1.png" alt=""/>
                    </div>
                    <div class="col-12 col-sm-12 col-lg-6" data-aos="fade-left" data-aos-duration="2000">
                        <h5>Development Services</h5>
                        <h3>High-quality, cost-effective services to the Internet & IT outsourcing clients</h3>
                        <p>Our developers are capable of fulfilling the project requirements, Be it web or application development. The outcome boasts beauty and brains, with beautiful design, cutting-edge code, and exceptional usability. Arise Solutions team has proven expertise in trending web technologies like Magento, WordPress, front-end technologies like Angular, ReactJS, Ionic, and back-end technologies like Node.js, PHP, Laravel, to develop custom and responsive websites, applications, and eCommerce solutions.</p>
                        <div className="row">
                            <div className="col-md-6">
                                <ul class="service_page_lists">
                                    <li>Custom Web Development</li>
                                    <li>Android App Development</li>
                                    <li>eCommerce Development</li>
                                    <li>Testing</li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul class="service_page_lists">
                                    <li>Enterprise Web Development</li>
                                    <li>iOS App Development</li>
                                    <li>Support & Maintenance</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </section>
        {/* Develpment services ends */}

       {/* UI/UX Design starts */}
        <section class="about">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-12 col-lg-6" data-aos="fade-right" data-aos-duration="2000">
                        <h5>UX-UI Design</h5>
                        <h3>The path to success goes through UI/UX Designing</h3>
                        <p>Arise Solutions exercise best practices and methods to bring out the best digital experience for the clients. Arise Solutions can help you design & develop a unique and classy interface for your digital product. We deliver the quality UI/UX Services as per your requirements.</p>
                        <div className="row">
                            <div className="col-md-6">
                                <ul class="service_page_lists">
                                    <li>User-Centered Design</li>
                                    <li>Illustrations</li>
                                    <li>Web Design</li>
                                    <li>Mockups</li>
                                    <li>Competitor Analysis</li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul class="service_page_lists">
                                    <li>Lo-Fi & Hi-Fi Wireframes</li>
                                    <li>Visual Interface Design</li>
                                    <li>Application Design</li>
                                    <li>Cognitive Walkthrough</li>
                                    <li>Heuristic Evaluation</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-lg-6" data-aos="fade-left" data-aos-duration="2000">
                        <img src="https://www.pngitem.com/pimgs/m/219-2195635_transparent-web-development-png-ui-design-png-download.png" alt=""/>
                    </div>
                </div>
            </div>
        </section>
        {/* UI/UX Design ends */}

        {/* <div className="row">
            <div className="col-md-3">
                <img src="images/character.svg" alt="" />
            </div>
            <div className="col-md-8">
                <h2>We Empathize, We Design, We Develop Your Ideas</h2>
            </div>
            <div className="col-md-1">
                <img src="images/work-dots.svg" alt="" />
            </div>
        </div> */}
        

      </div>
    </div>
  );
}

export default Services;
