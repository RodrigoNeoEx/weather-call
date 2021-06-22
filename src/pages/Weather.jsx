import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { TiArrowBack } from 'react-icons/ti';
import UTCconverter from '../components/UTCconverter';
import cloudy from '../style/pages/Weather/images/cloudy-day.gif';
import sun from '../style/pages/Weather/images/sun.gif';
import rain from '../style/pages/Weather/images/rain.gif';
import storm from '../style/pages/Weather/images/storm.gif';
import '../style/pages/Weather/Weather.css';
import '../style/pages/Login/Login.css';

const Weather = ({ weather, selectedState }) => {
  const history = useHistory();
  let img = '';
  const timer = 1800;
  return (
    <div>
      { [weather].map((wInfo) => {
        if(wInfo.weather[0].description.includes('clouds')) img = cloudy;
        if(wInfo.weather[0].description.includes('clear')) img = sun;
        if(wInfo.weather[0].description.includes('rain')) img = rain;
        if(wInfo.weather[0].description.includes('thunderstorm')) img = storm;
        let myDate = new Date( wInfo.dt *1000);
      return (
      <content className="content" key={wInfo.cod}>
        <header className="headerContainer">
          <h1 className="title w600Country">
            {`Country: ${wInfo.sys.country} - State: ${selectedState}`}
          </h1>
          <h1 className="title w600City">{`City: ${wInfo.name}`}</h1>
          <h3 className="title">{`${myDate.toLocaleString()} `}<UTCconverter timezone={wInfo.timezone} /> </h3>

            <svg className="svg1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#8e54f194" fillOpacity="1" d="M0,128L21.8,122.7C43.6,117,87,107,131,138.7C174.5,171,218,245,262,250.7C305.5,256,349,192,393,149.3C436.4,107,480,85,524,112C567.3,139,611,213,655,240C698.2,267,742,245,785,213.3C829.1,181,873,139,916,106.7C960,75,1004,53,1047,53.3C1090.9,53,1135,75,1178,106.7C1221.8,139,1265,181,1309,176C1352.7,171,1396,117,1418,90.7L1440,64L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z">
            </path>
          </svg>
        </header>
        <main className="weatherInfo">
          <section className="weatherBox">
            <img src={img} alt="weatherImg" id="weatherImg"/>
            <p id="setWeatherImg">{`${wInfo.weather[0].main} - ${wInfo.weather[0].description} `}</p>
            <p>{`Current Temperature: ${((wInfo.main.temp)- 273.1).toFixed(1)}°C`}</p>
            <p>{`Feels like Temperature: ${((wInfo.main.feels_like)- 273.1).toFixed(1)}°C`}</p>
            <p>{`Max Temperature: ${((wInfo.main.temp_max)- 273.1).toFixed(1)}°C`}</p>
            <p>{`Min Temperature: ${((wInfo.main.temp_min)- 273.1).toFixed(1)}°C`}</p>
          </section>

        </main>
        <button
          className="goBack"
          type="button"
          onClick={ () => {
            document.querySelector('.svg1').classList.add('loadingON');
            setTimeout(() => history.push('/'), timer)}}
          >
            New Search
            <TiArrowBack />
          </button>
      </content>)
    })}
    </div>
  )
}

const mapStateToProps = (state) => ({
  weather: state.weather.weather,
  selectedState: state.selectedState.stateSelected,
});

export default connect(mapStateToProps)(Weather);
