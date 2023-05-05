import React, { useState } from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './dyscalculia.css'

const Dyscalculia = (props) => {
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
 
    fetch("http://13.233.142.223:8000/submitdyscalculia/", requestOptions)
      .then((response) => response.json())
      .then((result)=>{console.log(result); setPrediction(result.answer);})
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="dyscalculia-container">
      <Helmet>
        <title>Dyscalculia - Ikshana</title>
        <meta property="og:title" content="Dyscalculia - Ikshana" />
      </Helmet>
      <Header rootClassName="header-root-class-name10"></Header>
      <div className="dyscalculia-donate"></div>
      <section className="dyscalculia-updates"> 
        <div className="dyscalculia-content">
          <div className="dyscalculia-details">
            <h1 className="dyscalculia-text">
              <span>Dyscalculia</span>
              <br></br>
            </h1>
            <form className="dyscalculia-form">
              <label className="dyscalculia-text03">
                <span>Name</span>
                <br></br>
              </label>
              <input
                type="text"
                required
                autoFocus
                placeholder="Name"
                className="dyscalculia-textinput input"
              />
              <div className="dyscalculia-container01"></div>
              <label className="dyscalculia-text06">
                <span>Gender</span>
                <br></br>
              </label>
              <div className="dyscalculia-container02">
                <input
                  type="radio"
                  name="gender"
                  className="dyscalculia-radiobutton"
                />
                <label className="dyscalculia-text09"> Female</label>
              </div>
              <div className="dyscalculia-container03">
                <input
                  type="radio"
                  name="gender"
                  className="dyscalculia-radiobutton01"
                />
                <label> Male</label>
              </div>
              <div className="dyscalculia-container04"></div>
              <label className="dyscalculia-text11">
                <span>Age</span>
                <br></br>
              </label>
              <div className="dyscalculia-container05">
                <input
                  type="radio"
                  name="age"
                  className="dyscalculia-radiobutton02"
                />
                <label> 6</label>
              </div>
              <div className="dyscalculia-container06">
                <input
                  type="radio"
                  name="age"
                  className="dyscalculia-radiobutton03"
                />
                <label> 7</label>
              </div>
              <div className="dyscalculia-container07">
                <input
                  type="radio"
                  name="age"
                  className="dyscalculia-radiobutton04"
                />
                <label> 8 </label>
              </div>
              <div className="dyscalculia-container08">
                <input
                  type="radio"
                  name="age"
                  className="dyscalculia-radiobutton05"
                />
                <label> 9</label>
              </div>
              <div className="dyscalculia-container09"></div>
              <label className="dyscalculia-text18">
                <span>Grade</span>
                <br></br>
              </label>
              <div className="dyscalculia-container10">
                <input
                  type="radio"
                  name="grade"
                  className="dyscalculia-radiobutton06"
                />
                <label> 3</label>
              </div>
              <div className="dyscalculia-container11">
                <input
                  type="radio"
                  name="grade"
                  className="dyscalculia-radiobutton07"
                />
                <label> 4</label>
              </div>
              <div className="dyscalculia-container12">
                <input
                  type="radio"
                  name="grade"
                  className="dyscalculia-radiobutton08"
                />
                <label> 5</label>
              </div>
              <div className="dyscalculia-container13"></div>
              <label className="dyscalculia-text24">
                <span>
                  1. Do you have difficulty with addition, subtraction,
                  multiplication and division or may find it difficult to
                  understand the words &quot;plus&quot; &amp; &quot;add&quot;?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
              </label>
              <div className="dyscalculia-container14">
              </div>
              <div className="dyscalculia-container15">
                <input
                  type="radio"
                  name="q1"
                  className="dyscalculia-radiobutton09"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,0)}
                  checked = {features[0]==="1"}
                />
                <label>Not at all</label>
              </div>
              <div className="dyscalculia-container16">
                <input
                  type="radio"
                  name="q1"
                  className="dyscalculia-radiobutton10"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,0)}
                  checked = {features[0]==="2"}
                />
                <label>Rarely</label>
              </div>
              <div className="dyscalculia-container17">
                <input
                  type="radio"
                  name="q1"
                  className="dyscalculia-radiobutton11"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,0)}
                  checked = {features[0]==="3"}
                />
                <label>Sometimes</label>
              </div>
              <div className="dyscalculia-container18">
                <input
                  type="radio"
                  name="q1"
                  className="dyscalculia-radiobutton12"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,0)}
                  checked = {features[0]==="4"}
                />
                <label>All the time</label>
              </div>
              <div className="dyscalculia-container19"></div>
              <label className="dyscalculia-text32">
                2. Do you have trouble learning and understanding reasoning
                methods and multi-step calculation procedures? A+B=?
              </label>
              <div className="dyscalculia-container20">
                <input
                  type="radio"
                  name="q2"
                  className="dyscalculia-radiobutton13"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,1)}
                  checked = {features[1]==="1"}
                />
                <label>Not at all</label>
              </div>
              <div className="dyscalculia-container21">
                <input
                  type="radio"
                  name="q2"
                  className="dyscalculia-radiobutton14"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,1)}
                  checked = {features[1]==="2"}
                />
                <label>Rarely</label>
              </div>
              <div className="dyscalculia-container22">
                <input
                  type="radio"
                  name="q2"
                  className="dyscalculia-radiobutton15"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,1)}
                  checked = {features[1]==="3"}
                />
                <label>Sometimes</label>
              </div>
              <div className="dyscalculia-container23">
                <input
                  type="radio"
                  name="q2"
                  className="dyscalculia-radiobutton16"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,1)}
                  checked = {features[1]==="4"}
                />
                <label>All the time</label>
              </div>
              <div className="dyscalculia-container24"></div>
              <label className="dyscalculia-text37">
                3. Do you have difficulty remembering times
                tables/multiplication table?
              </label>
              <div className="dyscalculia-container25">
                <input
                  type="radio"
                  name="q3"
                  className="dyscalculia-radiobutton17"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,2)}
                  checked = {features[2]==="1"}
                />
                <label>Not at all</label>
              </div>
              <div className="dyscalculia-container26">
                <input
                  type="radio"
                  name="q3"
                  className="dyscalculia-radiobutton18"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,2)}
                  checked = {features[2]==="2"}
                />
                <label>Rarely</label>
              </div>
              <div className="dyscalculia-container27">
                <input
                  type="radio"
                  name="q3"
                  className="dyscalculia-radiobutton19"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,2)}
                  checked = {features[2]==="3"}
                />
                <label>Sometimes</label>
                <div className="dyscalculia-container28"></div>
              </div>
              <div className="dyscalculia-container29">
                <input
                  type="radio"
                  name="q3"
                  className="dyscalculia-radiobutton20"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,2)}
                  checked = {features[2]==="4"}
                />
                <label>All the time</label>
                <div className="dyscalculia-container30"></div>
              </div>
              <div className="dyscalculia-container31"></div>
              <label className="dyscalculia-text42">
                4. Do you find it difficult to do calculations in your head?
              </label>
              <div className="dyscalculia-container32">
                <input
                  type="radio"
                  name="q4"
                  className="dyscalculia-radiobutton21"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,3)}
                  checked = {features[3]==="1"}
                />
                <label>Not at all</label>
              </div>
              <div className="dyscalculia-container33">
                <input
                  type="radio"
                  name="q4"
                  className="dyscalculia-radiobutton22"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,3)}
                  checked = {features[3]==="2"}
                />
                <label>Rarely</label>
              </div>
              <div className="dyscalculia-container34">
                <input
                  type="radio"
                  name="q4"
                  className="dyscalculia-radiobutton23"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,3)}
                  checked = {features[3]==="3"}
                />
                <label>Sometimes</label>
              </div>
              <div className="dyscalculia-container35">
                <input
                  type="radio"
                  name="q4"
                  className="dyscalculia-radiobutton24"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,3)}
                  checked = {features[3]==="4"}
                />
                <label>All the time</label>
              </div>
              <div className="dyscalculia-container36"></div>
              <label className="dyscalculia-text47">
                5. Do you have trouble with a calculator due to difficulties in
                the process of inputting numbers?
              </label>
              <div className="dyscalculia-container37">
                <input
                  type="radio"
                  name="q5"
                  className="dyscalculia-radiobutton25"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,4)}
                  checked = {features[4]==="1"}
                />
                <label> Not at all</label>
              </div>
              <div className="dyscalculia-container38">
                <input
                  type="radio"
                  name="q5"
                  className="dyscalculia-radiobutton26"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,4)}
                  checked = {features[4]==="2"}
                />
                <label>Rarely</label>
              </div>
              <div className="dyscalculia-container39">
                <input
                  type="radio"
                  name="q5"
                  className="dyscalculia-radiobutton27"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,4)}
                  checked = {features[4]==="3"}
                />
                <label>Sometimes</label>
              </div>
              <div className="dyscalculia-container40">
                <input
                  type="radio"
                  name="q5"
                  className="dyscalculia-radiobutton28"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,4)}
                  checked = {features[4]==="4"}
                />
                <label>All the time</label>
              </div>
              <div className="dyscalculia-container41"></div>
              <label className="dyscalculia-text52">
                6. Do you reverse or mix up numbers? for example 63 for 36, or
                785 for 875?
              </label>
              <div className="dyscalculia-container42">
                <input
                  type="radio"
                  name="q6"
                  className="dyscalculia-radiobutton29"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,5)}
                  checked = {features[5]==="1"}
                />
                <label>Not at all</label>
              </div>
              <div className="dyscalculia-container43">
                <input
                  type="radio"
                  name="q6"
                  className="dyscalculia-radiobutton30"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,5)}
                  checked = {features[5]==="2"}
                />
                <label>Rarely</label>
              </div>
              <div className="dyscalculia-container44">
                <input
                  type="radio"
                  name="q6"
                  className="dyscalculia-radiobutton31"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,5)}
                  checked = {features[5]==="3"}
                />
                <label>Sometimes</label>
              </div>
              <div className="dyscalculia-container45">
                <input
                  type="radio"
                  name="q6"
                  className="dyscalculia-radiobutton32"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,5)}
                  checked = {features[5]==="4"}
                />
                <label>All the time</label>
              </div>
              <div className="dyscalculia-container46"></div>
              <label className="dyscalculia-text57">
                7. Do you have difficulty  measuring time?
              </label>
              <div className="dyscalculia-container47">
                <input
                  type="radio"
                  name="q7"
                  className="dyscalculia-radiobutton33"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,6)}
                  checked = {features[6]==="1"}
                />
                <label>Not at all</label>
              </div>
              <div className="dyscalculia-container48">
                <input
                  type="radio"
                  name="q7"
                  className="dyscalculia-radiobutton34"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,6)}
                  checked = {features[6]==="2"}
                />
                <label>Rarely</label>
              </div>
              <div className="dyscalculia-container49">
                <input
                  type="radio"
                  name="q7"
                  className="dyscalculia-radiobutton35"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,6)}
                  checked = {features[6]==="3"}
                />
                <label>Sometimes</label>
              </div>
              <div className="dyscalculia-container50">
                <input
                  type="radio"
                  name="q7"
                  className="dyscalculia-radiobutton36"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,6)}
                  checked = {features[6]==="4"}
                />
                <label>All the time</label>
              </div>
              <div className="dyscalculia-container51"></div>
              <label className="dyscalculia-text62">
                8. Do you have difficulty counting using fingers or everyday
                tasks involving numbers?
              </label>
              <div className="dyscalculia-container52">
                <input
                  type="radio"
                  name="q8"
                  className="dyscalculia-radiobutton37"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,7)}
                  checked = {features[7]==="1"}
                />
                <label>Not at all</label>
              </div>
              <div className="dyscalculia-container53">
                <input
                  type="radio"
                  name="q8"
                  className="dyscalculia-radiobutton38"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,7)}
                  checked = {features[7]==="2"}
                />
                <label>Rarely</label>
              </div>
              <div className="dyscalculia-container54">
                <input
                  type="radio"
                  name="q8"
                  className="dyscalculia-radiobutton39"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,7)}
                  checked = {features[7]==="3"}
                />
                <label>Sometimes</label>
              </div>
              <div className="dyscalculia-container55">
                <input
                  type="radio"
                  name="q8"
                  className="dyscalculia-radiobutton40"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,7)}
                  checked = {features[7]==="4"}
                />
                <label>All the times</label>
              </div>
              <div className="dyscalculia-container56"></div>
              <label className="dyscalculia-text67">
                9. Do you have difficulty using a scale (ruler) to measure?
              </label>
              <div className="dyscalculia-container57">
                <input
                  type="radio"
                  name="q9"
                  className="dyscalculia-radiobutton41"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,8)}
                  checked = {features[8]==="1"} 
                />
                <label>Not at all</label>
              </div>
              <div className="dyscalculia-container58">
                <input
                  type="radio"
                  name="q9"
                  className="dyscalculia-radiobutton42"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,8)}
                  checked = {features[8]==="2"}
                />
                <label>Rarely</label>
              </div>
              <div className="dyscalculia-container59">
                <input
                  type="radio"
                  name="q9"
                  className="dyscalculia-radiobutton43"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,8)}
                  checked = {features[8]==="3"}
                />
                <label>Sometimes</label>
              </div>
              <div className="dyscalculia-container60">
                <input
                  type="radio"
                  name="q9"
                  className="dyscalculia-radiobutton44"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,8)}
                  checked = {features[8]==="4"}
                />
                <label>All the time</label>
              </div>
              <div className="dyscalculia-container61"></div>
              <label className="dyscalculia-text72">
                10. Do you find it difficult to imagine the numbers 1 through
                9 on a line when you close your eyes?
              </label>
              <div className="dyscalculia-container62">
                <input
                  type="radio"
                  name="q10"
                  className="dyscalculia-radiobutton45"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,9)}
                  checked = {features[9]==="1"}
                />
                <label>Not at all</label>
              </div>
              <div className="dyscalculia-container63">
                <input
                  type="radio"
                  name="q10"
                  className="dyscalculia-radiobutton46"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,9)}
                  checked = {features[9]==="2"}
                />
                <label>Rarely</label>
              </div>
              <div className="dyscalculia-container64">
                <input
                  type="radio"
                  name="q10"
                  className="dyscalculia-radiobutton47"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,9)}
                  checked = {features[9]==="3"}
                />
                <label>Sometimes</label>
              </div>
              <div className="dyscalculia-container65">
                <input
                  type="radio"
                  name="q10"
                  className="dyscalculia-radiobutton48"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,9)}
                  checked = {features[9]==="4"}
                />
                <label>All the time</label>
              </div>
              <div className="dyscalculia-container66"></div>
              <label className="dyscalculia-text77">
                11. Inconsistent results with mental arithmetic e.g. addition,
                subtraction, multiplication and division?
              </label>
              <div className="dyscalculia-container67">
                <input
                  type="radio"
                  name="q11"
                  className="dyscalculia-radiobutton49"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,10)}
                  checked = {features[10]==="1"}
                />
                <label>Not at all</label>
              </div>
              <div className="dyscalculia-container68">
                <input
                  type="radio"
                  name="q11"
                  className="dyscalculia-radiobutton50"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,10)}
                  checked = {features[10]==="2"}
                />
                <label>
                  <span>Rarely</span>
                  <br></br>
                </label>
              </div>
              <div className="dyscalculia-container69">
                <input
                  type="radio"
                  name="q11"
                  className="dyscalculia-radiobutton51"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,10)}
                  checked = {features[10]==="3"}
                />
                <label>Sometimes</label>
              </div>
              <div className="dyscalculia-container70">
                <input
                  type="radio"
                  name="q11"
                  className="dyscalculia-radiobutton52"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,10)}
                  checked = {features[10]==="4"}
                />
                <label>All the time</label>
              </div>
              <div className="dyscalculia-container71"></div>
              <label className="dyscalculia-text84">
                12. Poor memory or absent minded?
              </label>
              <div className="dyscalculia-container72">
                <input
                  type="radio"
                  name="q12"
                  className="dyscalculia-radiobutton53"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,11)}
                  checked = {features[11]==="1"}
                />
                <label>Not at all</label>
              </div>
              <div className="dyscalculia-container73">
                <input
                  type="radio"
                  name="q12"
                  className="dyscalculia-radiobutton54"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,11)}
                  checked = {features[11]==="2"}
                />
                <label>Rarely</label>
              </div>
              <div className="dyscalculia-container74">
                <input
                  type="radio"
                  name="q12"
                  className="dyscalculia-radiobutton55"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,11)}
                  checked = {features[11]==="3"}
                />
                <label>Sometimes</label>
              </div>
              <div className="dyscalculia-container75">
                <input
                  type="radio"
                  name="q12" 
                  className="dyscalculia-radiobutton56"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,11)}
                  checked = {features[11]==="4"}
                />
                <label>All the time</label>
              </div>
              <div className="dyscalculia-container76"></div>
              <button type="submit" className="dyscalculia-button button" onClick={handleSubmit}> 
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

export default Dyscalculia
