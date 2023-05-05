import React, { useState }from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './adhd.css'

const ADHD = (props) => {
  const [features , setFeatures] = useState([]);
  const handleInputChange = (e,index) => {
    const newValue = e.target.value;
    setFeatures((prevFeatures)=> {
      const newFeatures = [...prevFeatures];
      newFeatures[index] = newValue;
      return newFeatures;
    });
  };
 
  const myHeaders = new Headers();
  const data = JSON.stringify(features);
  const listData = JSON.parse(data);
  myHeaders.append("Content-Type", "application/json");
 
  const raw = JSON.stringify({ feature: listData });
 
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  const [prediction, setPrediction] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
 
    fetch("http://13.233.142.223:8000/submitadhd/", requestOptions)
      .then((response) => response.json())
      .then((result)=>{console.log(result); setPrediction(result.answer);})
      .catch((error) => {
        console.error(error);
      });
  };
  
  return (
    <div className="adhd-container">
      <Helmet>
        <title>ADHD - Ikshana</title>
        <meta property="og:title" content="ADHD - Ikshana" />
      </Helmet>
      <Header rootClassName="header-root-class-name11"></Header>
      <div className="adhd-donate"></div>
      <section className="adhd-updates">
        <div className="adhd-content">
          <div className="adhd-details">
            <h1 className="adhd-text">
              <span>ADHD</span>
              <br></br>
            </h1>
            <div className="adhd-container001">
              <div className="adhd-container002">
                <label className="adhd-text003">Name</label>
                <input
                  type="text"
                  required
                  autoFocus
                  placeholder="Name"
                  className="adhd-textinput input"
                />
              </div>
              <div className="adhd-container003">
                <label className="adhd-text004">
                  <span>Gender</span>
                  <br></br>
                </label>
                <div className="adhd-container004">
                  <input
                    type="radio"
                    name="gender"
                    className="adhd-radiobutton"
                  />
                  <label className="adhd-text007"> Female</label>
                </div>
                <div className="adhd-container005">
                  <input
                    type="radio"
                    name="gender"
                    className="adhd-radiobutton001"
                  />
                  <label> Male</label>
                </div>
              </div>
              <div className="adhd-container006">
                <label className="adhd-text009">Age</label>
                <div className="adhd-container007"></div>
                <div className="adhd-container008">
                  <input
                    type="radio"
                    name="age"
                    className="adhd-radiobutton002"
                  />
                  <label className="adhd-text010"> 6</label>
                </div>
                <div className="adhd-container009">
                  <input
                    type="radio"
                    name="age"
                    className="adhd-radiobutton003"
                  />
                  <label className="adhd-text011"> 7</label>
                </div>
                <div className="adhd-container010">
                  <input
                    type="radio"
                    name="age"
                    className="adhd-radiobutton004"
                  />
                  <label className="adhd-text012"> 8</label>
                </div>
                <div className="adhd-container011">
                  <input
                    type="radio"
                    name="age"
                    className="adhd-radiobutton005"
                  />
                  <label className="adhd-text013"> 9</label>
                </div>
              </div>
              <div className="adhd-container012">
                <label className="adhd-text014">
                  <span>Grade</span>
                  <br></br>
                </label>
                <div className="adhd-container013"></div>
                <div className="adhd-container014">
                  <input
                    type="radio"
                    name="grade"
                    className="adhd-radiobutton006"
                  />
                  <label> 2</label>
                </div>
                <div className="adhd-container015">
                  <input
                    type="radio"
                    name="grade"
                    className="adhd-radiobutton007"
                  />
                  <label> 3</label>
                </div>
                <div className="adhd-container016">
                  <input
                    type="radio"
                    name="grade"
                    className="adhd-radiobutton008"
                  />
                  <label> 4</label>
                </div>
              </div>
            </div>
            <form className="adhd-form">
              <label className="adhd-text020">
                <span>1. Is he/she inattentive or easily distracted?</span>
                <br></br>
              </label>
              <div className="adhd-container017">
                <input
                  type="radio"
                  name="q1"
                  className="adhd-radiobutton009"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,0)}
                  checked = {features[0]==="1"}
                />
                <label> Not at all</label>
              </div>
              <div className="adhd-container018">
                <input
                  type="radio"
                  name="q1"
                  className="adhd-radiobutton010"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,0)}
                  checked = {features[0]==="2"}
                />
                <label> Rarely</label>
              </div>
              <div className="adhd-container019">
                <input
                  type="radio"
                  name="q1"
                  className="adhd-radiobutton011"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,0)}
                  checked = {features[0]==="3"}
                />
                <label> Sometimes</label>
              </div>
              <div className="adhd-container020">
                <input
                  type="radio"
                  name="q1"
                  className="adhd-radiobutton012"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,0)}
                  checked = {features[0]==="4"}
                />
                <label> All the time</label>
              </div>
              <div className="adhd-container021"></div>
              <label className="adhd-text027">
                2. Is he/she generally angry and resentful?
              </label>
              <div className="adhd-container022">
                <input
                  type="radio"
                  name="q2"
                  className="adhd-radiobutton013"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,1)}
                  checked = {features[1]==="1"}
                />
                <label> Not at all</label>
              </div>
              <div className="adhd-container023">
                <input
                  type="radio"
                  name="q2"
                  className="adhd-radiobutton014"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,1)}
                  checked = {features[1]==="2"}
                />
                <label> Rarely</label>
              </div>
              <div className="adhd-container024">
                <input
                  type="radio"
                  name="q2"
                  className="adhd-radiobutton015"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,1)}
                  checked = {features[1]==="3"}
                />
                <label> Sometimes</label>
              </div>
              <div className="adhd-container025">
                <input
                  type="radio"
                  name="q2"
                  className="adhd-radiobutton016"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,1)}
                  checked = {features[1]==="4"}
                />
                <label> All the time</label>
              </div>
              <div className="adhd-container026"></div>
              <label className="adhd-text032">
                <span>
                  3. Does he/she find difficulty in doing or
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>completing work?</span>
              </label>
              <div className="adhd-container027">
                <input
                  type="radio"
                  name="q3"
                  className="adhd-radiobutton017"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,2)}
                  checked = {features[2]==="1"}
                />
                <label> Not at all</label>
              </div>
              <div className="adhd-container028">
                <input
                  type="radio"
                  name="q3"
                  className="adhd-radiobutton018"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,2)}
                  checked = {features[2]==="2"}
                />
                <label> Rarely</label>
              </div>
              <div className="adhd-container029">
                <input
                  type="radio"
                  name="q3"
                  className="adhd-radiobutton019"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,2)}
                  checked = {features[2]==="3"}
                />
                <label> Sometimes</label>
              </div>
              <div className="adhd-container030">
                <input
                  type="radio"
                  name="q3"
                  className="adhd-radiobutton020"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,2)}
                  checked = {features[2]==="4"}
                /> 
                <label> All the time</label>
              </div>
              <div className="adhd-container031"></div>
              <label className="adhd-text040">
                4. Is he/she always &quot;on the go&quot; or acts as if driven
                by a motor?
              </label>
              <div className="adhd-container032">
                <input
                  type="radio"
                  name="q4"
                  className="adhd-radiobutton021"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,3)}
                  checked = {features[3]==="1"}
                />
                <label> Not at all</label>
              </div>
              <div className="adhd-container033">
                <input
                  type="radio"
                  name="q4"
                  className="adhd-radiobutton022"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,3)}
                  checked = {features[3]==="2"}
                />
                <label> Rarely</label>
              </div>
              <div className="adhd-container034">
                <input
                  type="radio"
                  name="q4"
                  className="adhd-radiobutton023"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,3)}
                  checked = {features[3]==="3"}
                />
                <label> Sometimes</label>
              </div>
              <div className="adhd-container035">
                <input
                  type="radio"
                  name="q4"
                  className="adhd-radiobutton024"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,3)}
                  checked = {features[3]==="4"}
                />
                <label> All the time</label>
              </div>
              <div className="adhd-container036"></div>
              <label className="adhd-text045">
                5. Does he/she have a short attention span?
              </label>
              <div className="adhd-container037">
                <input
                  type="radio"
                  name="q5"
                  className="adhd-radiobutton025"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,4)}
                  checked = {features[4]==="1"}
                />
                <label> Not at all</label>
              </div>
              <div className="adhd-container038">
                <input
                  type="radio"
                  name="q5"
                  className="adhd-radiobutton026"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,4)}
                  checked = {features[4]==="2"}
                />
                <label> Rarely</label>
              </div>
              <div className="adhd-container039">
                <input
                  type="radio"
                  name="q5"
                  className="adhd-radiobutton027"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,4)}
                  checked = {features[4]==="3"}
                />
                <label> Sometimes</label>
              </div>
              <div className="adhd-container040">
                <input
                  type="radio"
                  name="q5"
                  className="adhd-radiobutton028"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,4)}
                  checked = {features[4]==="4"}
                />
                <label> All the time</label>
              </div>
              <div className="adhd-container041"></div>
              <label className="adhd-text050">
                6. Does he/she argue with adults?
              </label>
              <div className="adhd-container042">
                <input
                  type="radio"
                  name="q6"
                  className="adhd-radiobutton029"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,5)}
                  checked = {features[5]==="1"}
                />
                <label> Not at all</label>
              </div>
              <div className="adhd-container043">
                <input
                  type="radio"
                  name="q6"
                  className="adhd-radiobutton030"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,5)}
                  checked = {features[5]==="2"}
                />
                <label> Rarely</label>
              </div>
              <div className="adhd-container044">
                <input
                  type="radio"
                  name="q6"
                  className="adhd-radiobutton031"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,5)}
                  checked = {features[5]==="3"}
                />
                <label> Sometimes</label>
              </div>
              <div className="adhd-container045">
                <input
                  type="radio"
                  name="q6"
                  className="adhd-radiobutton032"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,5)}
                  checked = {features[5]==="4"}
                />
                <label> All the time</label>
              </div>
              <div className="adhd-container046"></div>
              <label className="adhd-text055">
                7. Does he/she fidgets with hands or feet or squirms in seat?
              </label>
              <div className="adhd-container047">
                <input
                  type="radio"
                  name="q7"
                  className="adhd-radiobutton033"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,6)}
                  checked = {features[6]==="1"}
                />
                <label> Not at all</label>
              </div>
              <div className="adhd-container048">
                <input
                  type="radio"
                  name="q7"
                  className="adhd-radiobutton034"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,6)}
                  checked = {features[6]==="2"}
                />
                <label> Rarely</label>
              </div>
              <div className="adhd-container049">
                <input
                  type="radio"
                  name="q7"
                  className="adhd-radiobutton035"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,6)}
                  checked = {features[6]==="3"}
                />
                <label> Sometimes</label>
              </div>
              <div className="adhd-container050">
                <input
                  type="radio"
                  name="q7"
                  className="adhd-radiobutton036"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,6)}
                  checked = {features[6]==="4"}
                />
                <label> All the time</label>
              </div>
              <div className="adhd-container051"></div>
              <label className="adhd-text060">
                8. Does he/she fail to complete assignments given?
              </label>
              <div className="adhd-container052">
                <input
                  type="radio"
                  name="q8"
                  className="adhd-radiobutton037"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,7)}
                  checked = {features[7]==="1"}
                />
                <label> Not at all</label>
              </div>
              <div className="adhd-container053">
                <input
                  type="radio"
                  name="q8"
                  className="adhd-radiobutton038"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,7)}
                  checked = {features[7]==="2"}
                />
                <label> Rarely</label>
              </div>
              <div className="adhd-container054">
                <input
                  type="radio"
                  name="q8"
                  className="adhd-radiobutton039"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,7)}
                  checked = {features[7]==="3"}
                />
                <label> Sometimes</label>
              </div>
              <div className="adhd-container055">
                <input
                  type="radio"
                  name="q8"
                  className="adhd-radiobutton040"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,7)}
                  checked = {features[7]==="4"}
                />
                <label> All the time</label>
              </div>
              <div className="adhd-container056"></div>
              <label className="adhd-text065">
                9. Is he/she hard to control in malls or while shopping?
              </label>
              <div className="adhd-container057">
                <input
                  type="radio"
                  name="q9"
                  className="adhd-radiobutton041"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,8)}
                  checked = {features[8]==="1"}
                />
                <label> Not at all</label>
              </div>
              <div className="adhd-container058">
                <input
                  type="radio"
                  name="q9"
                  className="adhd-radiobutton042"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,8)}
                  checked = {features[8]==="2"}
                />
                <label> Rarely</label>
              </div>
              <div className="adhd-container059">
                <input
                  type="radio"
                  name="q9"
                  className="adhd-radiobutton043"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,8)}
                  checked = {features[8]==="3"}
                />
                <label> Sometimes</label>
              </div>
              <div className="adhd-container060">
                <input
                  type="radio"
                  name="q9"
                  className="adhd-radiobutton044"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,8)}
                  checked = {features[8]==="4"}
                />
                <label> All the time</label>
              </div>
              <div className="adhd-container061"></div>
              <label className="adhd-text070">
                10. Is he/she messy or disorganized at home or school?
              </label>
              <div className="adhd-container062">
                <input
                  type="radio"
                  name="q10"
                  className="adhd-radiobutton045"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,9)}
                  checked = {features[9]==="1"}
                />
                <label> Not at all</label>
              </div>
              <div className="adhd-container063">
                <input
                  type="radio"
                  name="q10"
                  className="adhd-radiobutton046"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,9)}
                  checked = {features[9]==="2"}
                />
                <label> Rarely</label>
              </div>
              <div className="adhd-container064">
                <input
                  type="radio"
                  name="q10"
                  className="adhd-radiobutton047"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,9)}
                  checked = {features[9]==="3"}
                />
                <label> Sometimes</label>
              </div>
              <div className="adhd-container065">
                <input
                  type="radio"
                  name="q10"
                  className="adhd-radiobutton048"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,9)}
                  checked = {features[9]==="4"}
                />
                <label> All the time</label>
              </div>
              <div className="adhd-container066"></div>
              <label className="adhd-text075">
                11. Does he/she lose temper often?
              </label>
              <div className="adhd-container067">
                <input
                  type="radio"
                  name="q11"
                  className="adhd-radiobutton049"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,10)}
                  checked = {features[10]==="1"}
                />
                <label> Not at all</label>
              </div>
              <div className="adhd-container068">
                <input
                  type="radio"
                  name="q11"
                  className="adhd-radiobutton050"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,10)}
                  checked = {features[10]==="2"}
                />
                <label> Rarely</label>
              </div>
              <div className="adhd-container069">
                <input
                  type="radio"
                  name="q11"
                  className="adhd-radiobutton051"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,10)}
                  checked = {features[10]==="3"}
                />
                <label> Sometimes</label>
              </div>
              <div className="adhd-container070">
                <input
                  type="radio"
                  name="q11"
                  className="adhd-radiobutton052"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,10)}
                  checked = {features[10]==="4"}
                />
                <label> All the time</label>
              </div>
              <div className="adhd-container071"></div>
              <label className="adhd-text080">
                12. Does he/she need close supervision to get through
                assignments?
              </label>
              <div className="adhd-container072">
                <input
                  type="radio"
                  name="q12"
                  className="adhd-radiobutton053"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,11)}
                  checked = {features[11]==="1"}
                />
                <label> Not at all</label>
              </div>
              <div className="adhd-container073">
                <input
                  type="radio"
                  name="q12"
                  className="adhd-radiobutton054"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,11)}
                  checked = {features[11]==="2"}
                />
                <label> Rarely</label>
              </div>
              <div className="adhd-container074">
                <input
                  type="radio"
                  name="q12"
                  className="adhd-radiobutton055"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,11)}
                  checked = {features[11]==="3"}
                />
                <label> Sometimes</label>
              </div>
              <div className="adhd-container075">
                <input
                  type="radio"
                  name="q12"
                  className="adhd-radiobutton056"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,11)}
                  checked = {features[11]==="4"}
                />
                <label> All the time</label>
              </div>
              <div className="adhd-container076"></div>
              <label className="adhd-text085">
                13. Does he/she only attends something if she/he is very
                interested in?
              </label>
              <div className="adhd-container077">
                <input
                  type="radio"
                  name="q13"
                  className="adhd-radiobutton057"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,12)}
                  checked = {features[12]==="1"}
                />
                <label> Not at all</label>
              </div>
              <div className="adhd-container078">
                <input
                  type="radio"
                  name="q13"
                  className="adhd-radiobutton058"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,12)}
                  checked = {features[12]==="2"}
                />
                <label> Rarely</label>
              </div>
              <div className="adhd-container079">
                <input
                  type="radio"
                  name="q13"
                  className="adhd-radiobutton059"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,12)}
                  checked = {features[12]==="3"}
                />
                <label> Sometimes</label>
              </div>
              <div className="adhd-container080">
                <input
                  type="radio"
                  name="q13"
                  className="adhd-radiobutton060"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,12)}
                  checked = {features[12]==="4"}
                />
                <label> All the time</label>
              </div>
              <div className="adhd-container081"></div>
              <label className="adhd-text090">
                14. Does he/she run about or climb excessively in situations
                where it is inappropriate?
              </label>
              <div className="adhd-container082">
                <input
                  type="radio"
                  name="q14"
                  className="adhd-radiobutton061"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,13)}
                  checked = {features[13]==="1"}
                />
                <label> Not at all</label>
              </div>
              <div className="adhd-container083">
                <input
                  type="radio"
                  name="q14"
                  className="adhd-radiobutton062"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,13)}
                  checked = {features[13]==="2"}
                />
                <label> Rarely</label>
              </div>
              <div className="adhd-container084">
                <input
                  type="radio"
                  name="q14"
                  className="adhd-radiobutton063"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,13)}
                  checked = {features[13]==="3"}
                />
                <label> Sometimes</label>
              </div>
              <div className="adhd-container085">
                <input
                  type="radio"
                  name="q14"
                  className="adhd-radiobutton064"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,13)}
                  checked = {features[13]==="4"}
                />
                <label> All the time</label>
              </div>
              <div className="adhd-container086"></div>
              <label className="adhd-text095">
                15. Is distractibility or attention span a problem for him/her?
              </label>
              <div className="adhd-container087">
                <input
                  type="radio"
                  name="q15"
                  className="adhd-radiobutton065"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,14)}
                  checked = {features[14]==="1"}
                />
                <label> Not at all</label>
              </div>
              <div className="adhd-container088">
                <input
                  type="radio"
                  name="q15"
                  className="adhd-radiobutton066"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,14)}
                  checked = {features[14]==="2"}
                />
                <label> Rarely</label>
              </div>
              <div className="adhd-container089">
                <input
                  type="radio"
                  name="q15"
                  className="adhd-radiobutton067"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,14)}
                  checked = {features[14]==="3"}
                />
                <label> Sometimes</label>
              </div>
              <div className="adhd-container090">
                <input
                  type="radio"
                  name="q15"
                  className="adhd-radiobutton068"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,14)}
                  checked = {features[14]==="4"}
                />
                <label> All the time</label>
              </div>
              <div className="adhd-container091"></div>
              <label className="adhd-text100">
                16. Does he/she get irritable often?
              </label>
              <div className="adhd-container092">
                <input
                  type="radio"
                  name="q16"
                  className="adhd-radiobutton069"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,15)}
                  checked = {features[15]==="1"}
                />
                <label> Not at all</label>
              </div>
              <div className="adhd-container093">
                <input
                  type="radio"
                  name="q16"
                  className="adhd-radiobutton070"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,15)}
                  checked = {features[15]==="2"}
                />
                <label> Rarely</label>
              </div>
              <div className="adhd-container094">
                <input
                  type="radio"
                  name="q16"
                  className="adhd-radiobutton071"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,15)}
                  checked = {features[15]==="3"}
                />
                <label> Sometimes</label>
              </div>
              <div className="adhd-container095">
                <input
                  type="radio"
                  name="q16"
                  className="adhd-radiobutton072"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,15)}
                  checked = {features[15]==="4"}
                />
                <label> All the time</label>
              </div>
              <div className="adhd-container096"></div>
              <label className="adhd-text105">
                17. Does he/she avoid, express reluctance about, or has
                difficulty engaging in tasks that require sustained mental
                effort (such as schoolwork or homework)?
              </label>
              <div className="adhd-container097">
                <input
                  type="radio"
                  name="q17"
                  className="adhd-radiobutton073"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,16)}
                  checked = {features[16]==="1"}
                />
                <label> Not at all</label>
              </div>
              <div className="adhd-container098">
                <input
                  type="radio"
                  name="q17"
                  className="adhd-radiobutton074"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,16)}
                  checked = {features[16]==="2"}
                />
                <label> Rarely</label>
              </div>
              <div className="adhd-container099">
                <input
                  type="radio"
                  name="q17"
                  className="adhd-radiobutton075"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,16)}
                  checked = {features[16]==="3"}
                />
                <label> Sometimes</label>
              </div>
              <div className="adhd-container100">
                <input
                  type="radio"
                  name="q17"
                  className="adhd-radiobutton076"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,16)}
                  checked = {features[16]==="4"}
                />
                <label> All the time</label>
              </div>
              <div className="adhd-container101"></div>
              <label className="adhd-text110">
                18. Does he/she get restless in the &quot;squirmy&quot; sense?
              </label>
              <div className="adhd-container102">
                <input
                  type="radio"
                  name="q18"
                  className="adhd-radiobutton077"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,17)}
                  checked = {features[17]==="1"}
                />
                <label> Not at all</label>
              </div>
              <div className="adhd-container103">
                <input
                  type="radio"
                  name="q18"
                  className="adhd-radiobutton078"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,17)}
                  checked = {features[17]==="2"}
                />
                <label> Rarely</label>
              </div>
              <div className="adhd-container104">
                <input
                  type="radio"
                  name="q18"
                  className="adhd-radiobutton079"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,17)}
                  checked = {features[17]==="3"}
                />
                <label> Sometimes</label>
              </div>
              <div className="adhd-container105">
                <input
                  type="radio"
                  name="q18"
                  className="adhd-radiobutton080"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,17)}
                  checked = {features[17]==="4"}
                />
                <label> All the time</label>
              </div>
              <div className="adhd-container106"></div>
              <label className="adhd-text115">
                19. Does he/she get distracted when given instructions to do
                something?
              </label>
              <div className="adhd-container107">
                <input
                  type="radio"
                  name="q19"
                  className="adhd-radiobutton081"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,18)}
                  checked = {features[18]==="1"}
                />
                <label> Not at all</label>
              </div>
              <div className="adhd-container108">
                <input
                  type="radio"
                  name="q19"
                  className="adhd-radiobutton082"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,18)}
                  checked = {features[18]==="2"}
                />
                <label> Rarely</label>
              </div>
              <div className="adhd-container109">
                <input
                  type="radio"
                  name="q19"
                  className="adhd-radiobutton083"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,18)}
                  checked = {features[18]==="3"}
                />
                <label> Sometimes</label>
              </div>
              <div className="adhd-container110">
                <input
                  type="radio"
                  name="q19"
                  className="adhd-radiobutton084"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,18)}
                  checked = {features[18]==="4"}
                />
                <label> All the time</label>
              </div>
              <div className="adhd-container111"></div>
              <label className="adhd-text120">
                20. Does he/she actively defy or refuse to comply with
                adults&apos; request?
              </label>
              <div className="adhd-container112">
                <input
                  type="radio"
                  name="q20"
                  className="adhd-radiobutton085"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,19)}
                  checked = {features[19]==="1"}
                />
                <label> Not at all</label>
              </div>
              <div className="adhd-container113">
                <input
                  type="radio"
                  name="q20"
                  className="adhd-radiobutton086"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,19)}
                  checked = {features[19]==="2"}
                />
                <label> Rarely</label>
              </div>
              <div className="adhd-container114">
                <input
                  type="radio"
                  name="q20"
                  className="adhd-radiobutton087"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,19)}
                  checked = {features[19]==="3"}
                />
                <label> Sometimes</label>
              </div>
              <div className="adhd-container115">
                <input
                  type="radio"
                  name="q20"
                  className="adhd-radiobutton088"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,19)}
                  checked = {features[19]==="4"}
                />
                <label> All the time</label>
              </div>
              <div className="adhd-container116"></div>
              <label className="adhd-text125">
                21. Does he/she have trouble concentrating in class?
              </label>
              <div className="adhd-container117">
                <input
                  type="radio"
                  name="q21"
                  className="adhd-radiobutton089"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,20)}
                  checked = {features[20]==="1"}
                />
                <label> Not at all</label>
              </div>
              <div className="adhd-container118">
                <input
                  type="radio"
                  name="q21"
                  className="adhd-radiobutton090"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,20)}
                  checked = {features[20]==="2"}
                />
                <label> Rarely</label>
              </div>
              <div className="adhd-container119">
                <input
                  type="radio"
                  name="q21"
                  className="adhd-radiobutton091"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,20)}
                  checked = {features[20]==="3"}
                />
                <label> Sometimes</label>
              </div>
              <div className="adhd-container120">
                <input
                  type="radio"
                  name="q21"
                  className="adhd-radiobutton092"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,20)}
                  checked = {features[20]==="4"}
                />
                <label> All the time</label>
              </div>
              <div className="adhd-container121"></div>
              <label className="adhd-text130">
                22. Does he/she have difficulty waiting in lines or awaiting
                turn in games or group situations?
              </label>
              <div className="adhd-container122">
                <input
                  type="radio"
                  name="q22"
                  className="adhd-radiobutton093"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,21)}
                  checked = {features[21]==="1"}
                />
                <label> Not at all</label>
              </div>
              <div className="adhd-container123">
                <input
                  type="radio"
                  name="q22"
                  className="adhd-radiobutton094"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,21)}
                  checked = {features[21]==="2"}
                />
                <label> Rarely</label>
              </div>
              <div className="adhd-container124">
                <input
                  type="radio"
                  name="q22"
                  className="adhd-radiobutton095"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,21)}
                  checked = {features[21]==="3"}
                />
                <label> Sometimes</label>
              </div>
              <div className="adhd-container125">
                <input
                  type="radio"
                  name="q22"
                  className="adhd-radiobutton096"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,21)}
                  checked = {features[21]==="4"}
                />
                <label> All the time</label>
              </div>
              <div className="adhd-container126"></div>
              <label className="adhd-text135">
                23. Does he/she leaves seat in classroom or in other situations
                in which remaining seats is expected?
              </label>
              <div className="adhd-container127">
                <input
                  type="radio"
                  name="q23"
                  className="adhd-radiobutton097"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,22)}
                  checked = {features[22]==="1"}
                />
                <label> Not at all</label>
              </div>
              <div className="adhd-container128">
                <input
                  type="radio"
                  name="q23"
                  className="adhd-radiobutton098"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,22)}
                  checked = {features[22]==="2"}
                />
                <label> Rarely</label>
              </div>
              <div className="adhd-container129">
                <input
                  type="radio"
                  name="q23"
                  className="adhd-radiobutton099"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,22)}
                  checked = {features[22]==="3"}
                />
                <label> Sometimes</label>
              </div>
              <div className="adhd-container130">
                <input
                  type="radio"
                  name="q23"
                  className="adhd-radiobutton100"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,22)}
                  checked = {features[22]==="4"}
                />
                <label> All the time</label>
              </div>
              <div className="adhd-container131"></div>
              <label className="adhd-text140">
                24. Does he/she deliberately do things that annoy other people?
              </label>
              <div className="adhd-container132">
                <input
                  type="radio"
                  name="q24"
                  className="adhd-radiobutton101"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,23)}
                  checked = {features[23]==="1"}
                />
                <label> Not at all</label>
              </div>
              <div className="adhd-container133">
                <input
                  type="radio"
                  name="q24"
                  className="adhd-radiobutton102"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,23)}
                  checked = {features[23]==="2"}
                />
                <label> Rarely</label>
              </div>
              <div className="adhd-container134">
                <input
                  type="radio"
                  name="q24"
                  className="adhd-radiobutton103"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,23)}
                  checked = {features[23]==="3"}
                />
                <label> Sometimes</label>
              </div>
              <div className="adhd-container135">
                <input
                  type="radio"
                  name="q24"
                  className="adhd-radiobutton104"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,23)}
                  checked = {features[23]==="4"}
                />
                <label> All the time</label>
              </div>
              <div className="adhd-container136"></div>
              <label className="adhd-text145">
                25. Does he/she not follow through on instructions and fails to
                finish schoolwork, chores or duties in the workplace?
              </label>
              <div className="adhd-container137">
                <input
                  type="radio"
                  name="q25"
                  className="adhd-radiobutton105"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,24)}
                  checked = {features[24]==="1"}
                />
                <label> Not at all</label>
              </div>
              <div className="adhd-container138">
                <input
                  type="radio"
                  name="q25"
                  className="adhd-radiobutton106"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,24)}
                  checked = {features[24]==="2"}
                />
                <label> Rarely</label>
              </div>
              <div className="adhd-container139">
                <input
                  type="radio"
                  name="q25"
                  className="adhd-radiobutton107"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,24)}
                  checked = {features[24]==="3"}
                />
                <label> Sometimes</label>
              </div>
              <div className="adhd-container140">
                <input
                  type="radio"
                  name="q25"
                  className="adhd-radiobutton108"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,24)}
                  checked = {features[24]==="4"}
                />
                <label> All the time</label>
              </div>
              <div className="adhd-container141"></div>
              <label className="adhd-text150">
                26. Does he/she have difficulty playing or engaging in leisure
                activities quietly?
              </label>
              <div className="adhd-container142">
                <input
                  type="radio"
                  name="q26"
                  className="adhd-radiobutton109"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,25)}
                  checked = {features[25]==="1"}
                />
                <label> Not at all</label>
              </div>
              <div className="adhd-container143">
                <input
                  type="radio"
                  name="q26"
                  className="adhd-radiobutton110"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,25)}
                  checked = {features[25]==="2"}
                />
                <label> Rarely</label>
              </div>
              <div className="adhd-container144">
                <input
                  type="radio"
                  name="q26"
                  className="adhd-radiobutton111"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,25)}
                  checked = {features[25]==="3"}
                />
                <label> Sometimes</label>
              </div>
              <div className="adhd-container145">
                <input
                  type="radio"
                  name="q26"
                  className="adhd-radiobutton112"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,25)}
                  checked = {features[25]==="4"}
                />
                <label> All the time</label>
              </div>
              <div className="adhd-container146"></div>
              <label className="adhd-text155">
                27. Is he/she easily frustrated in efforts?
              </label>
              <div className="adhd-container147">
                <input
                  type="radio"
                  name="q27"
                  className="adhd-radiobutton113"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,26)}
                  checked = {features[26]==="1"}
                />
                <label> Not at all</label>
              </div>
              <div className="adhd-container148">
                <input
                  type="radio"
                  name="q27"
                  className="adhd-radiobutton114"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,26)}
                  checked = {features[26]==="2"}
                />
                <label> Rarely</label>
              </div>
              <div className="adhd-container149">
                <input
                  type="radio"
                  name="q27"
                  className="adhd-radiobutton115"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,26)}
                  checked = {features[26]==="3"}
                />
                <label> Sometimes</label>
              </div>
              <div className="adhd-container150">
                <input
                  type="radio"
                  name="q27"
                  className="adhd-radiobutton116"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,26)}
                  checked = {features[26]==="4"}
                />
                <label> All the time</label>
              </div>
              <div className="adhd-container151"></div>
              <label className="adhd-text160">
                28. Does your child have difficulty managing time or following
                through with tasks?
              </label>
              <div className="adhd-container152">
                <input
                  type="radio"
                  name="q28"
                  className="adhd-radiobutton117"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,27)}
                  checked = {features[27]==="1"}
                />
                <label> Not at all</label>
              </div>
              <div className="adhd-container153">
                <input
                  type="radio"
                  name="q28"
                  className="adhd-radiobutton118"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,27)}
                  checked = {features[27]==="2"}
                />
                <label> Rarely</label>
              </div>
              <div className="adhd-container154">
                <input
                  type="radio"
                  name="q28"
                  className="adhd-radiobutton119"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,27)}
                  checked = {features[27]==="3"}
                />
                <label> Sometimes</label>
              </div>
              <div className="adhd-container155">
                <input
                  type="radio"
                  name="q28"
                  className="adhd-radiobutton120"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,27)}
                  checked = {features[27]==="4"} 
                />
                <label> All the time</label>
              </div>
              <div className="adhd-container156"></div>
              <label className="adhd-text165">
                29. Does your child interrupt others or have trouble taking
                turns?
              </label>
              <div className="adhd-container157">
                <input
                  type="radio"
                  name="q29"
                  className="adhd-radiobutton121"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,28)}
                  checked = {features[28]==="1"}
                />
                <label> Not at all</label>
              </div>
              <div className="adhd-container158">
                <input
                  type="radio"
                  name="q29"
                  className="adhd-radiobutton122"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,28)}
                  checked = {features[28]==="2"}
                />
                <label> Rarely</label>
              </div>
              <div className="adhd-container159">
                <input
                  type="radio"
                  name="q29"
                  className="adhd-radiobutton123"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,28)}
                  checked = {features[28]==="3"}
                />
                <label> Sometimes</label>
              </div>
              <div className="adhd-container160">
                <input
                  type="radio"
                  name="q29"
                  className="adhd-radiobutton124"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,28)}
                  checked = {features[28]==="4"}
                />
                <label> All the time</label>
              </div>
              <div className="adhd-container161"></div>
              <label className="adhd-text170">
                30. Is he/ she easily forgetful?
              </label>
              <div className="adhd-container162">
                <input
                  type="radio"
                  name="q30"
                  className="adhd-radiobutton125"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,29)}
                  checked = {features[29]==="1"}
                />
                <label> Not at all</label>
              </div>
              <div className="adhd-container163">
                <input
                  type="radio"
                  name="q30"
                  className="adhd-radiobutton126"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,29)}
                  checked = {features[29]==="2"}
                />
                <label> Rarely</label>
              </div>
              <div className="adhd-container164">
                <input
                  type="radio"
                  name="q30"
                  className="adhd-radiobutton127"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,29)}
                  checked = {features[29]==="3"}
                />
                <label> Sometimes</label>
              </div>
              <div className="adhd-container165">
                <input
                  type="radio"
                  name="q30"
                  className="adhd-radiobutton128"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,29)}
                  checked = {features[29]==="4"}
                />
                <label> All the time</label>
              </div>
              <button type="submit" className="adhd-button button" onClick={handleSubmit}>
                Submit
              </button>
              <p><h1>{prediction}</h1></p>  
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ADHD
