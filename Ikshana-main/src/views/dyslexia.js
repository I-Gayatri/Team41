import React, { useState } from 'react'


import { Helmet } from 'react-helmet'


import Header from '../components/header'
import './dyslexia.css'

const Dyslexia = (props) => {


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
 
    fetch("http://13.233.142.223:8000/submitdyslexia/", requestOptions)
      .then((response) => response.json())
      .then((result)=>{console.log(result); setPrediction(result.answer);})
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="dyslexia-container">
      <Helmet>
        <title>Dyslexia - Ikshana</title>
        <meta property="og:title" content="Dyslexia - Ikshana" />
      </Helmet>
      <Header rootClassName="header-root-class-name9"></Header>
      <div className="dyslexia-donate"></div>
      <section className="dyslexia-updates">
        <div className="dyslexia-content">
          <div className="dyslexia-details">
            <h1 className="dyslexia-text">
              <span>Dyslexia</span>
              <br></br>
            </h1>
            <form className="dyslexia-form">
              <label className="dyslexia-text03">
                <span>Name</span>
                <br></br>
              </label>
              <input
                type="text"
                required
                autoFocus
                placeholder="Name"
                className="dyslexia-textinput input"
              />
              <div className="dyslexia-container01"></div>
              <label className="dyslexia-text06">
                <span>Gender</span>
                <br></br>
              </label>
              <div className="dyslexia-container02">
                <input
                  type="radio"
                  name="radio"
                  className="dyslexia-radiobutton"
                  value="female"
                />
                <label className="dyslexia-text09"> Female</label>
              </div>
              <div className="dyslexia-container03">
                <input
                  type="radio"
                  name="radio"
                  className="dyslexia-radiobutton01"
                  value="male"
                />
                <label>Male</label>
              </div>
              <div className="dyslexia-container04"></div>
              <label className="dyslexia-text11">
                <span>Age</span>
                <br></br>
              </label>
              <div className="dyslexia-container05">
                <input
                  type="radio"
                  name="age"
                  className="dyslexia-radiobutton02"
                />
                <label>6</label>
              </div>
              <div className="dyslexia-container06">
                <input
                  type="radio"
                  name="age"
                  className="dyslexia-radiobutton03"
                />
                <label>7</label>
              </div>
              <div className="dyslexia-container07">
                <input
                  type="radio"
                  name="age"
                  className="dyslexia-radiobutton04"
                />
                <label>8</label>
              </div>
              <div className="dyslexia-container08">
                <input
                  type="radio"
                  name="age"
                  className="dyslexia-radiobutton05"
                />
                <label>9</label>
              </div>
              <div className="dyslexia-container09"></div>
              <label className="dyslexia-text18">
                <span>Grade</span>
                <br></br>
              </label>
              <div className="dyslexia-container10">
                <input
                  type="radio"
                  name="grade"
                  className="dyslexia-radiobutton06"
                />
                <label>3</label>
              </div>
              <div className="dyslexia-container11">
                <input
                  type="radio"
                  name="grade"
                  className="dyslexia-radiobutton07"
                />
                <label>4</label>
              </div>
              <div className="dyslexia-container12">
                <input
                  type="radio"
                  name="grade"
                  className="dyslexia-radiobutton08"
                />
                <label>5</label>
              </div>
              <div className="dyslexia-container13"></div>
              <label className="dyslexia-text24">
                <span>1. Did your child struggle to learn to count?</span>
                <br></br>
              </label>
              <div className="dyslexia-container14">
                <input
                  type="radio"
                  name="q=1"
                  className="dyslexia-radiobutton09"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,0)}
                  checked = {features[0]==="1"}
                />
                <label>Not at all</label>
              </div>
              <div className="dyslexia-container15">
                <input
                  type="radio"
                  name="q=1"
                  className="dyslexia-radiobutton10"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,0)}
                  checked = {features[0]==="2"} 
                />
                <label>Rarely</label>
              </div>
              <div className="dyslexia-container16">
                <input
                  type="radio"
                  name="q=1"
                  className="dyslexia-radiobutton11"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,0)}
                  checked = {features[0]==="3"}
                />
                <label>Sometimes</label>
              </div>
              <div className="dyslexia-container16">
                <input
                  type="radio"
                  name="q=1"
                  className="dyslexia-radiobutton11"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,0)}
                  checked = {features[0]==="4"}
                />
                <label>All the time</label>
              </div>
              <div className="dyslexia-container17"></div>
              <label className="dyslexia-text30"> 
                2. Does he/she say numbers out of order?
              </label>
              <div className="dyslexia-container18">
                <input
                  type="radio"
                  name="q2"
                  className="dyslexia-radiobutton12"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,1)}
                  checked = {features[1]==="1"}
                />
                <label>Not at all</label>
              </div>
              <div className="dyslexia-container19">
                <input
                  type="radio"
                  name="q2"
                  className="dyslexia-radiobutton13"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,1)}
                  checked = {features[1]==="2"}
                />
                <label>Rarely</label>
              </div>
              <div className="dyslexia-container20">
                <input
                  type="radio"
                  name="q2"
                  className="dyslexia-radiobutton14"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,1)}
                  checked = {features[1]==="3"}
                />
                <label>Sometimes</label>
              </div>
              <div className="dyslexia-container16">
                <input
                  type="radio"
                  name="q2"
                  className="dyslexia-radiobutton11"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,1)}
                  checked = {features[1]==="4"}
                />
                <label>All the time</label>
              </div>
              <div className="dyslexia-container21"></div>
              <label className="dyslexia-text34">
                3. Does your child not seem to understand the connection between
                the symbol “4” and the word “four?”
              </label>
              <div className="dyslexia-container22">
                <input
                  type="radio"
                  name="q3"
                  className="dyslexia-radiobutton15"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,2)}
                  checked = {features[2]==="1"}
                />
                <label>Not at all</label>
              </div>
              <div className="dyslexia-container23">
                <input
                  type="radio"
                  name="q3"
                  className="dyslexia-radiobutton16"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,2)}
                  checked = {features[2]==="2"}
                />
                <label>Rarely</label>
              </div>
              <div className="dyslexia-container24">
                <input
                  type="radio"
                  name="q3"
                  className="dyslexia-radiobutton17"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,2)}
                  checked = {features[2]==="3"}
                />
                <label>Sometimes</label>
              </div>
              <div className="dyslexia-container16">
                <input
                  type="radio"
                  name="q3"
                  className="dyslexia-radiobutton11"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,2)}
                  checked = {features[2]==="4"}
                />
                <label>All the time</label>
              </div>
              <div className="dyslexia-container25"></div>
              <label className="dyslexia-text38">
                4. When you ask him how many cookies are left, for example, does
                he seem confused by the question or answer incorrectly?
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </label>
              <div className="dyslexia-container26">
                <input
                  type="radio"
                  name="q4"
                  className="dyslexia-radiobutton18"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,3)}
                  checked = {features[3]==="1"}
                />
                <label>Not at all</label>
              </div>
              <div className="dyslexia-container27">
                <input
                  type="radio"
                  name="q4"
                  className="dyslexia-radiobutton19"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,3)}
                  checked = {features[3]==="2"}
                />
                <label>Rarely</label>
              </div>
              <div className="dyslexia-container28">
                <input
                  type="radio"
                  name="q4"
                  className="dyslexia-radiobutton20"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,3)}
                  checked = {features[3]==="3"}
                />
                <label>Sometimes</label>
              </div>
              <div className="dyslexia-container16">
                <input
                  type="radio"
                  name="q4"
                  className="dyslexia-radiobutton11"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,3)}
                  checked = {features[3]==="4"}
                />
                <label>All the time</label>
              </div>
              <div className="dyslexia-container29"></div>
              <label className="dyslexia-text42">
                5. Does your child still count on his fingers past third grade?
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </label>
              <div className="dyslexia-container30">
                <input
                  type="radio"
                  name="q5"
                  className="dyslexia-radiobutton21"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,4)}
                  checked = {features[4]==="1"}
                />
                <label>Not at all</label>
              </div>
              <div className="dyslexia-container31">
                <input
                  type="radio"
                  name="q5"
                  className="dyslexia-radiobutton22"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,4)}
                  checked = {features[4]==="2"}
                />
                <label>Rarely</label>
              </div>
              <div className="dyslexia-container32">
                <input
                  type="radio"
                  name="q5"
                  className="dyslexia-radiobutton23"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,4)}
                  checked = {features[4]==="3"}
                />
                <label>Sometimes</label>
              </div>
              <div className="dyslexia-container16">
                <input
                  type="radio"
                  name="q5"
                  className="dyslexia-radiobutton11"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,4)}
                  checked = {features[4]==="4"}
                />
                <label>All the time</label>
              </div>
              <div className="dyslexia-container33"></div>
              <label className="dyslexia-text46">
                6. Is he confused by letters, numbers, words, sequences, or
                verbal explanations?
              </label>
              <div className="dyslexia-container34">
                <input
                  type="radio"
                  name="q6"
                  className="dyslexia-radiobutton24"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,5)}
                  checked = {features[5]==="1"}
                />
                <label>Not at all</label>
              </div>
              <div className="dyslexia-container35">
                <input
                  type="radio"
                  name="q6"
                  className="dyslexia-radiobutton25"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,5)}
                  checked = {features[5]==="2"}
                />
                <label>Rarely</label>
              </div>
              <div className="dyslexia-container36">
                <input
                  type="radio"
                  name="q6"
                  className="dyslexia-radiobutton26"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,5)}
                  checked = {features[5]==="3"}
                />
                <label>Sometimes</label>
              </div>
              <div className="dyslexia-container16">
                <input
                  type="radio"
                  name="q6"
                  className="dyslexia-radiobutton11"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,5)}
                  checked = {features[5]==="4"}
                />
                <label>All the time</label>
              </div>
              <div className="dyslexia-container37"></div>
              <label className="dyslexia-text50">
                7. Does he/she read and re-read with little comprehension?
              </label>
              <div className="dyslexia-container38">
                <input
                  type="radio"
                  name="q7"
                  className="dyslexia-radiobutton27"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,6)}
                  checked = {features[6]==="1"}
                />
                <label>Not at all</label>
              </div>
              <div className="dyslexia-container39">
                <input
                  type="radio"
                  name="q7"
                  className="dyslexia-radiobutton28"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,6)}
                  checked = {features[6]==="2"}
                />
                <label>Rarely</label>
              </div>
              <div className="dyslexia-container40">
                <input
                  type="radio"
                  name="q7"
                  className="dyslexia-radiobutton29"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,6)}
                  checked = {features[6]==="3"}
                />
                <label>Sometimes</label>
              </div>
              <div className="dyslexia-container16">
                <input
                  type="radio"
                  name="q7"
                  className="dyslexia-radiobutton11"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,6)}
                  checked = {features[6]==="4"}
                />
                <label>All the time</label>
              </div>
              <div className="dyslexia-container41"></div>
              <label className="dyslexia-text54">
                8. Is there difficulty finding the right words while speaking?
                Does he/she use lots of &apos;ums&apos;, &apos;ahs&apos;,
                &apos;those things&apos;, and &apos;that stuff&apos;?
              </label>
              <div className="dyslexia-container42">
                <input
                  type="radio"
                  name="q8"
                  className="dyslexia-radiobutton30"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,7)}
                  checked = {features[7]==="1"}
                />
                <label>Not at all</label>
              </div>
              <div className="dyslexia-container43">
                <input
                  type="radio"
                  name="q8"
                  className="dyslexia-radiobutton31"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,7)}
                  checked = {features[7]==="2"}
                />
                <label>Rarely</label>
              </div>
              <div className="dyslexia-container44">
                <input
                  type="radio"
                  name="q8"
                  className="dyslexia-radiobutton32"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,7)}
                  checked = {features[7]==="3"}
                />
                <label>Sometimes</label>
              </div>
              <div className="dyslexia-container16">
                <input
                  type="radio"
                  name="q8"
                  className="dyslexia-radiobutton11"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,7)}
                  checked = {features[7]==="4"}
                />
                <label>All the time</label>
              </div>
              <div className="dyslexia-container45"></div>
              <label className="dyslexia-text58">
                9. Does he/she pause, repeat or make frequent mistakes when
                reading aloud?
              </label>
              <div className="dyslexia-container46">
                <input
                  type="radio"
                  name="q9"
                  className="dyslexia-radiobutton33"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,8)}
                  checked = {features[8]==="1"}
                />
                <label>Not at all</label>
              </div>
              <div className="dyslexia-container47">
                <input
                  type="radio"
                  name="q9"
                  className="dyslexia-radiobutton34"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,8)}
                  checked = {features[8]==="2"}
                />
                <label>Rarely</label>
              </div>
              <div className="dyslexia-container48">
                <input
                  type="radio"
                  name="q9"
                  className="dyslexia-radiobutton35"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,8)}
                  checked = {features[8]==="3"}
                />
                <label>Sometimes</label>
              </div>
              <div className="dyslexia-container16">
                <input
                  type="radio"
                  name="q9"
                  className="dyslexia-radiobutton11"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,8)}
                  checked = {features[8]==="4"}
                />
                <label>All the time</label>
              </div>
              <div className="dyslexia-container49"></div>
              <label className="dyslexia-text62">
                10. Is the child&apos;s spelling ability poor? Letters missed,
                reversed etc?
              </label>
              <div className="dyslexia-container50">
                <input
                  type="radio"
                  name="q10"
                  className="dyslexia-radiobutton36"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,9)}
                  checked = {features[9]==="1"}
                />
                <label>Not at all</label>
              </div>
              <div className="dyslexia-container51">
                <input
                  type="radio"
                  name="q10"
                  className="dyslexia-radiobutton37"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,9)}
                  checked = {features[9]==="2"}
                />
                <label>Rarely</label>
              </div>
              <div className="dyslexia-container52">
                <input
                  type="radio"
                  name="q10"
                  className="dyslexia-radiobutton38"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,9)}
                  checked = {features[9]==="3"}
                />
                <label>Sometimes</label>
              </div>
              <div className="dyslexia-container16">
                <input
                  type="radio"
                  name="q10"
                  className="dyslexia-radiobutton11"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,9)}
                  checked = {features[9]==="4"}
                />
                <label>All the time</label>
              </div>
              <div className="dyslexia-container53"></div>
              <label className="dyslexia-text66">
                11. Is reading extremely difficult? (Below grade or age level.)
              </label>
              <div className="dyslexia-container54">
                <input
                  type="radio"
                  name="q11"
                  className="dyslexia-radiobutton39"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,10)}
                  checked = {features[10]==="1"}
                />
                <label>Not at all</label>
              </div>
              <div className="dyslexia-container55">
                <input
                  type="radio"
                  name="q11"
                  className="dyslexia-radiobutton40"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,10)}
                  checked = {features[10]==="2"}
                />
                <label>Rarely</label>
              </div>
              <div className="dyslexia-container56">
                <input
                  type="radio"
                  name="q11"
                  className="dyslexia-radiobutton41"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,10)}
                  checked = {features[10]==="3"}
                />
                <label>Sometimes</label>
              </div>
              <div className="dyslexia-container16">
                <input
                  type="radio"
                  name="q11"
                  className="dyslexia-radiobutton11"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,10)}
                  checked = {features[10]==="4"}
                />
                <label>All the time</label>
              </div>
              <div className="dyslexia-container57"></div>
              <label className="dyslexia-text70">
                12. Can count, but has difficulty counting objects and dealing
                with money?
              </label>
              <div className="dyslexia-container58">
                <input
                  type="radio"
                  name="q12"
                  className="dyslexia-radiobutton42"
                  value = "1"
                  onChange={(e)=>handleInputChange(e,11)}
                  checked = {features[11]==="1"}
                />
                <label>Not at all</label>
              </div>
              <div className="dyslexia-container59">
                <input
                  type="radio"
                  name="q12"
                  className="dyslexia-radiobutton43"
                  value = "2"
                  onChange={(e)=>handleInputChange(e,11)}
                  checked = {features[11]==="2"}
                />
                <label>Rarely</label>
              </div>
              <div className="dyslexia-container60">
                <input
                  type="radio"
                  name="q12"
                  className="dyslexia-radiobutton44"
                  value = "3"
                  onChange={(e)=>handleInputChange(e,11)}
                  checked = {features[11]==="3"}
                />
                <label>Sometimes</label>
              </div>
              <div className="dyslexia-container16">
                <input
                  type="radio"
                  name="q12"
                  className="dyslexia-radiobutton11"
                  value = "4"
                  onChange={(e)=>handleInputChange(e,11)}
                  checked = {features[11]==="4"}
                />
                <label>All the time</label>
              </div>
              <div className="dyslexia-container61"></div>
              <button type="submit" className="dyslexia-button button" onClick={handleSubmit}>
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


export default Dyslexia



