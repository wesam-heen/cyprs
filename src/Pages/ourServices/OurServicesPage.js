import React from "react";
import "./ourServicesPage.css";
import Square from '../../components/squareframe/Square'
import Card from '../../components/Card/Card'
import { Container } from "react-bootstrap";
import MobileMenu from "../../components/mobileMenu/MobileMenu";
const ourServices = () => {
  return (
      <>
      <MobileMenu/>
      <div className="our-services-page mt-md-5 mb-md-5 pb-4">
      <Container>
      <Square text="Our Services" />
      <div className='row mt-md-5'>
      <div className="col-md-4 mt-2">
      <Card
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="84.772"
            height="84.772"
            viewBox="0 0 84.772 84.772"
          >
            <path
              id="language_FILL0_wght400_GRAD0_opsz48"
              d="M46.386,88.772a41.537,41.537,0,0,1-16.636-3.338,42.8,42.8,0,0,1-13.457-9.06,41.925,41.925,0,0,1-9.007-13.51A42.5,42.5,0,0,1,4,46.174,41.733,41.733,0,0,1,7.285,29.59a42.233,42.233,0,0,1,9.007-13.4A41.368,41.368,0,0,1,29.749,7.232,42.716,42.716,0,0,1,46.386,4,42.716,42.716,0,0,1,63.022,7.232,41.368,41.368,0,0,1,76.48,16.186a42.233,42.233,0,0,1,9.007,13.4,41.733,41.733,0,0,1,3.285,16.583,42.5,42.5,0,0,1-3.285,16.689,41.925,41.925,0,0,1-9.007,13.51,42.8,42.8,0,0,1-13.458,9.06A41.537,41.537,0,0,1,46.386,88.772Zm0-6.146a35.268,35.268,0,0,0,6.2-8.742,52.631,52.631,0,0,0,4.08-11.709H36.213a53.74,53.74,0,0,0,3.974,11.444A36.112,36.112,0,0,0,46.386,82.626Zm-9.007-1.272a50.662,50.662,0,0,1-4.556-8.689,63.478,63.478,0,0,1-3.179-10.49H13.749A38,38,0,0,0,23.074,73.99,46.558,46.558,0,0,0,37.379,81.354Zm18.12-.106a42.426,42.426,0,0,0,13.722-7.312,37.951,37.951,0,0,0,9.8-11.762H63.234A76.761,76.761,0,0,1,60,72.559a48.1,48.1,0,0,1-4.5,8.689ZM11.629,55.817H28.478q-.318-2.861-.371-5.139t-.053-4.5q0-2.649.106-4.715t.424-4.609H11.629a30.9,30.9,0,0,0-1.007,4.556,37.133,37.133,0,0,0-.265,4.768,41.056,41.056,0,0,0,.265,4.927,29.87,29.87,0,0,0,1.007,4.715Zm23.418,0H57.83q.424-3.285.53-5.351t.106-4.292q0-2.119-.106-4.08t-.53-5.245H35.048q-.424,3.285-.53,5.245t-.106,4.08q0,2.225.106,4.292t.53,5.351Zm29.14,0H81.142A29.87,29.87,0,0,0,82.149,51.1a41.055,41.055,0,0,0,.265-4.927,37.134,37.134,0,0,0-.265-4.768,30.9,30.9,0,0,0-1.007-4.556H64.294q.318,3.709.424,5.669t.106,3.656q0,2.331-.159,4.4t-.477,5.245Zm-1.06-25.326H79.023a34.333,34.333,0,0,0-9.59-12.186,36.539,36.539,0,0,0-14.04-6.888,46.187,46.187,0,0,1,4.5,8.477,68.917,68.917,0,0,1,3.232,10.6Zm-26.915,0H56.77A41.33,41.33,0,0,0,52.85,19.63a43.349,43.349,0,0,0-6.464-9.272,23.3,23.3,0,0,0-5.722,7.523,68.42,68.42,0,0,0-4.451,12.61Zm-22.464,0h16a59.644,59.644,0,0,1,2.967-10.226,50.308,50.308,0,0,1,4.556-8.742A34.959,34.959,0,0,0,13.749,30.491Z"
              transform="translate(-4 -4)"
              fill="#fff"
            />
          </svg>
        }
        title="Citizenship By Investment"
        text="Citizenship By Investment Programs Will
        Grant Immediate Dual Citizenship And 
       Qualification For A Passport To Our
        Clients And Their Family By Investing
        In The Economy Of The Selected Country.
        These Programs Offer Visa Free Access
        To Over 125 Countries And It Gives The
        Ability To Travel Without Borders."
      />
    </div>
    <div className="col-md-4 mt-2">
      <Card
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="68.319"
            height="66.326"
            viewBox="0 0 68.319 66.326"
          >
            <path
              id="home_app_logo_FILL0_wght400_GRAD0_opsz48"
              d="M24.977,73.376V58.194H55.341V73.376ZM6,55.347V37.983a6.108,6.108,0,0,1,.474-2.372,4.709,4.709,0,0,1,1.423-1.9L36.364,8.473a4.439,4.439,0,0,1,1.755-1.091,6.432,6.432,0,0,1,4.08,0,4.439,4.439,0,0,1,1.755,1.091l7.591,6.737Zm5.693,18.029A5.67,5.67,0,0,1,6,67.683V60.471L21.182,47V73.376Zm47.443,0V42.253L42.911,27.83,54.392,17.677,72.421,33.713a5.618,5.618,0,0,1,1.423,1.945,5.767,5.767,0,0,1,.474,2.325v29.7a5.67,5.67,0,0,1-5.693,5.693Z"
              transform="translate(-6 -7.05)"
              fill="#fff"
            />
          </svg>
        }
        title="Residency By Investment"
        text="The Residency By Investment Offers Our
        Client The Easiest Option Of Granting The
        Residency Without Relocating And Living
        In Their Selected Country. The Program 
       Often Comes With Accompanying Freedom
        Of Travel Across The EU And Schengen Zone.
        Eventually, If Our Clients And Their Family
        Undertake Permanent Residency, They May 
       Be Eligible To Apply For Citizenship."
      />
    </div>
    <div className="col-md-4 mt-2">
      <Card
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50.689"
            height="81.91"
            viewBox="0 0 50.689 81.91"
          >
            <g
              id="passport-svgrepo-com_1_"
              data-name="passport-svgrepo-com (1)"
              transform="translate(-85 0)"
            >
              <g
                id="Group_62"
                data-name="Group 62"
                transform="translate(85 0)"
              >
                <g
                  id="Group_61"
                  data-name="Group 61"
                  transform="translate(0 0)"
                >
                  <path
                    id="Path_231"
                    data-name="Path 231"
                    d="M134.219,13.958H123.935V1.5a1.507,1.507,0,0,0-.3-.933,1.473,1.473,0,0,0-1.7-.472l-36,13.958-.009,0A1.28,1.28,0,0,0,85,15.291v65.15a1.469,1.469,0,0,0,1.469,1.469h47.75a1.469,1.469,0,0,0,1.469-1.469V15.427A1.469,1.469,0,0,0,134.219,13.958ZM121,3.615V13.958H94.322ZM132.75,78.972H87.938V16.9H132.75Z"
                    transform="translate(-85 0)"
                    fill="#fff"
                  />
                  <path
                    id="Path_232"
                    data-name="Path 232"
                    d="M134.835,189a19.837,19.837,0,1,0,13.944,5.73A19.7,19.7,0,0,0,134.835,189Zm-11.877,7.819a16.888,16.888,0,0,1,4.6-3.242c-2.258,3.322-3.739,8.2-3.961,13.788H118A16.75,16.75,0,0,1,122.957,196.82ZM118,210.3h5.6c.222,5.58,1.7,10.453,3.952,13.775A16.931,16.931,0,0,1,118,210.3Zm15.362,15.151c-3.608-1.367-6.487-7.644-6.823-15.151h6.823Zm0-18.089h-6.823c.336-7.507,3.215-13.784,6.823-15.151Zm2.938-15.151c3.608,1.367,6.487,7.644,6.823,15.151H136.3Zm0,33.239V210.3h6.823C142.791,217.811,139.912,224.089,136.3,225.455Zm5.813-1.375c2.253-3.322,3.731-8.2,3.952-13.775h5.6A16.931,16.931,0,0,1,142.117,224.08Zm3.952-16.714c-.222-5.587-1.7-10.465-3.961-13.788a16.938,16.938,0,0,1,9.559,13.788Z"
                    transform="translate(-109.49 -154.29)"
                    fill="#fff"
                  />
                  <path
                    id="Path_233"
                    data-name="Path 233"
                    d="M154.969,121a1.469,1.469,0,0,0,0,2.938h22.589a1.469,1.469,0,0,0,0-2.938Z"
                    transform="translate(-140.92 -98.779)"
                    fill="#fff"
                  />
                  <path
                    id="Path_234"
                    data-name="Path 234"
                    d="M231.5,153.47a1.469,1.469,0,0,0,1.469,1.469h13.039a1.469,1.469,0,1,0,0-2.938H232.969A1.469,1.469,0,0,0,231.5,153.47Z"
                    transform="translate(-204.595 -124.085)"
                    fill="#fff"
                  />
                  <path
                    id="Path_235"
                    data-name="Path 235"
                    d="M128.969,154.939h13.223a1.469,1.469,0,1,0,0-2.938H128.969a1.469,1.469,0,0,0,0,2.938Z"
                    transform="translate(-119.695 -124.085)"
                    fill="#fff"
                  />
                </g>
              </g>
            </g>
          </svg>
        }
        title="Passport Renewal"
        text="Our Company Are Also Here To Assist Our
        Clients To Renew Their Passport Easily 
       And Organized By Getting The Necessary 
       Documents For Passport Renewal And 
       Assist Them On How To Process."
      />
    </div>
      
      </div> 
      <div className='row mt-5'>
      <div className="col-md-4 mt-2">
      <Card
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" width="56.024" height="59.136" viewBox="0 0 56.024 59.136">
          <path id="gavel_FILL0_wght400_GRAD0_opsz48" d="M8,63.136V58.468H45.349v4.669Zm17.274-16.5L8,29.366l5.447-5.6,17.43,17.274ZM45.038,26.876,27.764,9.447,33.366,4,50.64,21.274ZM60.756,60.024,19.049,18.317l3.268-3.268L64.024,56.756Z" transform="translate(-8 -4)" fill="#fff"/>
        </svg>
        
        }
        title="Legal Services"
        text="Our Priority Is To Give Our Client A 
        Consultation By Giving Them All 
        Legal Advice And Information That
         They Need. We Also Provide
         Smoother Process And Help Them 
        To Obtain Their Documents To Be
         Authenticated And Translated By
         Taking Care Of The Details."
      />
    </div>
    <div className="col-md-4 mt-2">
      <Card
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" width="78.089" height="78.089" viewBox="0 0 78.089 78.089">
          <g id="vuesax_linear_people" data-name="vuesax/linear/people" transform="translate(-620 -252)">
            <g id="people" transform="translate(620 252)">
              <g id="Group" transform="translate(49.879 6.507)">
                <path id="Vector" d="M8.687,16.789a1.97,1.97,0,0,0-.618,0,8.411,8.411,0,1,1,.618,0Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"/>
                <path id="Vector-2" data-name="Vector" d="M.1,16.074a18.334,18.334,0,0,0,12.82-2.343c4.588-3.058,4.588-8.069,0-11.128A18.448,18.448,0,0,0,0,.293" transform="translate(5.238 24.402)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"/>
              </g>
              <g id="Group-2" data-name="Group" transform="translate(6.516 6.507)">
                <path id="Vector-3" data-name="Vector" d="M8.1,16.789a1.97,1.97,0,0,1,.618,0,8.411,8.411,0,1,0-.618,0Z" transform="translate(4.807)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"/>
                <path id="Vector-4" data-name="Vector" d="M16.26,16.074a18.334,18.334,0,0,1-12.82-2.343c-4.588-3.058-4.588-8.069,0-11.128A18.448,18.448,0,0,1,16.358.293" transform="translate(0 24.402)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"/>
              </g>
              <g id="Group-3" data-name="Group" transform="translate(26.135 30.812)">
                <path id="Vector-5" data-name="Vector" d="M8.687,16.789a1.97,1.97,0,0,0-.618,0,8.411,8.411,0,1,1,.618,0Z" transform="translate(4.222)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"/>
                <path id="Vector-6" data-name="Vector" d="M3.441,2.587c-4.588,3.058-4.588,8.069,0,11.128,5.206,3.481,13.731,3.481,18.936,0,4.588-3.058,4.588-8.069,0-11.128C17.2-.862,8.647-.862,3.441,2.587Z" transform="translate(0 24.451)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"/>
              </g>
              <path id="Vector-7" data-name="Vector" d="M0,0H78.089V78.089H0Z" fill="none" opacity="0"/>
            </g>
          </g>
        </svg>
        
        }
        title="Additional Dependents"
        text="We Are Also Helping Clients Who Already Grant 
        Their Citizenship To Add Their Dependents
         Under Their Sponsorship. Client Must Apply 
        Their Additional Dependents Separately"
      />
    </div>
    <div className="col-md-4 mt-2">
      <Card
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" width="60.814" height="60.814" viewBox="0 0 60.814 60.814">
    <g id="vuesax_linear_trend-up" data-name="vuesax/linear/trend-up" transform="translate(-620 -188)">
      <g id="trend-up" transform="translate(620 188)">
        <path id="Vector" d="M22.805,0,12.163,10.642,8.108,4.561,0,12.67" transform="translate(19.004 24.072)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
        <path id="Vector-2" data-name="Vector" d="M0,0H5.068V5.068" transform="translate(36.742 24.072)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
        <path id="Vector-3" data-name="Vector" d="M17.737,50.678h15.2c12.67,0,17.737-5.068,17.737-17.737v-15.2C50.678,5.068,45.61,0,32.941,0h-15.2C5.068,0,0,5.068,0,17.737v15.2C0,45.61,5.068,50.678,17.737,50.678Z" transform="translate(5.068 5.068)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
        <path id="Vector-4" data-name="Vector" d="M0,0H60.814V60.814H0Z" fill="none" opacity="0"/>
      </g>
    </g>
  </svg>
  
        }
        title="Business Formation"
        text="We Help Our Client To Establish Their New 
        Company In The Country Of Their Choice
         And Acquire Residency For Them And Their
         Family Through A Foreign-Business Venture.
         Our Professional Team Will Help Our 
        Clients To Sort Out All The Required
         Documents And Process To Complete
         Their Company Setup."
      />
    </div>
      
      </div> 
      <div className='row mt-5'>
      <div className='col-md-2'></div>
      <div className="col-md-4 mt-2">
      <Card
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" width="82.519" height="82.519" viewBox="0 0 82.519 82.519">
          <g id="vuesax_linear_dollar-circle" data-name="vuesax/linear/dollar-circle" transform="translate(-236 -572)">
            <g id="dollar-circle" transform="translate(236 572)">
              <path id="Vector" d="M0,24.034a7.813,7.813,0,0,0,7.633,8.011h8.63a6.836,6.836,0,0,0,6.67-6.98c0-4.195-1.822-5.673-4.539-6.636L4.539,13.616C1.822,12.653,0,11.174,0,6.98A6.836,6.836,0,0,1,6.67,0H15.3a7.813,7.813,0,0,1,7.633,8.011" transform="translate(29.817 25.237)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"/>
              <path id="Vector-2" data-name="Vector" d="M0,0V41.26" transform="translate(41.26 20.63)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"/>
              <path id="Vector-3" data-name="Vector" d="M68.766,34.383A34.383,34.383,0,1,1,34.383,0,34.383,34.383,0,0,1,68.766,34.383Z" transform="translate(6.877 6.877)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"/>
              <path id="Vector-4" data-name="Vector" d="M0,0H82.519V82.519H0Z" fill="none" opacity="0"/>
            </g>
          </g>
        </svg>
        }
        title="Financial Services"
        text="We Provide Our Clients The Different Financial
        Services As They Need Such As Opening An
        Account, Investment Management, Finance
        Companies, Insurance Companies,
        And A Lot More"
      />
    </div>
    <div className="col-md-4 mt-2 ">
      <Card
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" width="69.195" height="69.195" viewBox="0 0 69.195 69.195">
          <g id="vuesax_linear_task" data-name="vuesax/linear/task" transform="translate(-428 -316)">
            <g id="task" transform="translate(428 316)">
              <path id="Vector" d="M0,0H28.831" transform="translate(31.714 56.221)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"/>
              <path id="Vector-2" data-name="Vector" d="M0,0H28.831" transform="translate(31.714 36.039)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"/>
              <path id="Vector-3" data-name="Vector" d="M0,0H28.831" transform="translate(31.714 15.857)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"/>
              <path id="Vector-4" data-name="Vector" d="M0,5.766,2.883,8.649,11.532,0" transform="translate(8.649 10.091)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"/>
              <path id="Vector-5" data-name="Vector" d="M0,5.766,2.883,8.649,11.532,0" transform="translate(8.649 30.273)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"/>
              <path id="Vector-6" data-name="Vector" d="M0,5.766,2.883,8.649,11.532,0" transform="translate(8.649 50.455)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"/>
              <path id="Vector-7" data-name="Vector" d="M0,0H69.195V69.195H0Z" fill="none" opacity="0"/>
            </g>
          </g>
        </svg>
        
        
        }
        title="Driving License Services"
        text="Our Service Is To Help Our Client To Process
        Their Application For Faster And Simple
        Way To Apply For Driving License Or
        Learner’s Permit."
      />
    </div>
      </div> 
      </Container>
      </div>
      </>
    );
};

export default ourServices;
