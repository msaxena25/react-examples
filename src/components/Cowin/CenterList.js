import { useEffect, useState, useRef } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import axios from 'axios';

import './CenterList.css';

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    if (playing) {
      audio.muted = false;
      audio.play();
    } else {
      audio.pause();
    }
  }, [playing]);

  useEffect(() => {
    audio.autoplay = true;
    audio.muted = true;
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

/**
 *  {
    center_id: 604873,
    name: 'Govt Boys High School',
  },
 */

const centreId = [
  { center_id: 32325, name: 'Rajiv Nagar Uphc' },
  {
    center_id: 60807,
    name: 'Govt Boys SS School',
  },
  {
    center_id: 613165,
    name: 'Civil Hospital Sec 10 18 Plus',
  },
  { center_id: 198664, name: 'Polyclinic Sec31' },
  {
    center_id: 604036,
    name: 'Chanderlok UPHC 1',
  },
  {
    center_id: 604956,
    name: 'Nathupur UPHC 18 Plus',
  },
  {
    center_id: 623556,
    name: 'Gandhi Nagar Uphc 1',
  },
];

const centreIdsKeys = centreId.map((item) => item.center_id);

const scheduleAPI = `https://cdn-api.co-vin.in/api/v2/appointment/schedule`;

const baseURL = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=122002&date=11-05-2021`;
const distByURL = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=188&date=17-05-2021`;

//
let loop = 0;

const CenterList = () => {
  const [rowData, setRowData] = useState([]);
  const [load, setLoad] = useState(true);
  const [pinCode, setPinCode] = useState('122002');
  const elementRef = useRef();

  const [playing, toggle] = useAudio('ringtone.mp3');

  const updateData = (centres) => {
    const requiredCentres = centres.filter(
      (item) => (item.pincode === 122001 || item.pincode === 122002 || item.pincode === 122004) && item.fee_type === 'Free'
    ); // centreIdsKeys.includes(item.center_id)
    const finalData = [];
    requiredCentres.forEach((element) => {
      const s = element.sessions[0];
      if (s.min_age_limit === 18) {
        const obj = {
          date: s.date,
          cap: s.available_capacity,
          name: element.name,
          age: s.min_age_limit,
          va: s.vaccine,
          totalSession: element.sessions.length,
          pincode: element.pincode,
        };
        finalData.push(obj);
      }
    });
    //finalData[1].cap = 10; // TESTING
    setRowData(finalData);

    setLoad(false);
    if (finalData.length) {
      const capsArr = finalData.filter((item) => item.cap > 0);
      if (capsArr && capsArr.length > 0) {
        console.log('cap', capsArr);
        document.getElementsByClassName('audio-element')[0].play(); // chrome://settings/content/sound
      }
    }

    loop = loop + 1;
    console.log('loop :', loop);
    // console.log('finalData :', finalData, loop);
  };

  const hitAPI = () => {
    setLoad(true);
    // refresh browser
    if (loop > 50) {
      window.location.reload();
      return;
    }

    fetch(distByURL)
      .then((resp) => resp.json())
      .then((data) => updateData(data.centers));
  };

  useEffect(() => {
    setLoad(true);
    let timer1 = setInterval(() => {
      hitAPI();
    }, 5000);
    return () => {
      clearInterval(timer1);
    };
  }, []);

  const onListClick = (el) => {
    window.open('https://selfregistration.cowin.gov.in/', '_blank');
  };

  const scheduleSlot = () => {
    const data = {
      center_id: 604956,
      captcha:"QCw6s",
      session_id: '7481d916-54be-4deb-a01d-a5f13702ebfe',
      beneficiaries: ['66819899335150', '28603482605330'],
      slot: '10:00AM-12:00PM',
      dose: 1,
    };
    axios({
      method: 'post',
      url: scheduleAPI,
      data: data,
      headers: {
        authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiI1OTRhYTBiNi02MzE0LTQxOTUtOWNhZC0xMzk1MmMwMzAyM2MiLCJ1c2VyX2lkIjoiNTk0YWEwYjYtNjMxNC00MTk1LTljYWQtMTM5NTJjMDMwMjNjIiwidXNlcl90eXBlIjoiQkVORUZJQ0lBUlkiLCJtb2JpbGVfbnVtYmVyIjo5NTU1ODk3OTIzLCJiZW5lZmljaWFyeV9yZWZlcmVuY2VfaWQiOjI4NjAzNDgyNjA1MzMwLCJzZWNyZXRfa2V5IjoiYjVjYWIxNjctNzk3Ny00ZGYxLTgwMjctYTYzYWExNDRmMDRlIiwidWEiOiJNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXaW42NDsgeDY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvOTAuMC40NDMwLjIxMiBTYWZhcmkvNTM3LjM2IiwiZGF0ZV9tb2RpZmllZCI6IjIwMjEtMDUtMTVUMTM6NDM6NDQuOTEwWiIsImlhdCI6MTYyMTA4NjIyNCwiZXhwIjoxNjIxMDg3MTI0fQ.ksWFN6EWiTFEJJ1KAgAE8detsaULjVE3f0q8eqQFAuE',
      },
    }).then(function (response) {
      console.log('response :', response);

      alert('booked');
    });
  };

  return (
    <>
      <h6>Gurgaon pin code : 122002, 122001, 122004</h6>
      {load ? 'Loading...............' : ''}

      {rowData.length ? (
        <ul onClick={onListClick}>
          {rowData.map((item, index) => {
            return (
              <li
                style={
                  item.cap > 0
                    ? { fontSize: '22px', border: '1px solid gray', background: 'antiquewhite', cursor: 'pointer' }
                    : { fontSize: '17px', pointerEvents: 'none' }
                }
                key={index}
              >
                <span style={{ color: 'blue' }}>
                  {item.name}-{item.pincode}
                </span>{' '}
                - <span>{item.totalSession}</span> -{' '}
                <span style={{ color: 'red' }}>
                  - {item.date} - ({item.age})
                </span>{' '}
                === {item.cap > 0 ? <span style={{ color: 'green', fontWeight: 'bold' }}>{item.cap}</span> : 0}
              </li>
            );
          })}
        </ul>
      ) : (
        <h1 style={{ color: 'green' }}>Waiting for Slots...</h1>
      )}

      {rowData.length && <ReactAudioPlayer className='audio-element' src='horse.ogv' controls />}

      <button onClick={scheduleSlot}>Schedule</button>
    </>
  );
};

export default CenterList;
