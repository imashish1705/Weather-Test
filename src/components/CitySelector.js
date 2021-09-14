import React, {useState} from 'react';
import {Row, Col, FormControl, Button} from 'react-bootstrap';
const CitySelector = ({onSearch,props}) => {
    const [city, setCity] = useState('');
   const [degreeType,setdegreeType] = useState("fahrenheit");
   //const [c , f] = useState(false);
  console.log(degreeType); 
  const onChange = (e) => {
    setdegreeType(e.target.value);
    //console.log(data);
  }
  return (
      <>
        <Row>
          <Col>
            <h1>Search your city</h1>
          </Col>
        </Row>

        <Row>
          <Col xl={5}>
            <FormControl
              placeholder="Enter city"
              onChange={(event) => setCity(event.target.value)}
              value={city}
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <Button onClick={() => onSearch(city)}>Check Weather</Button>
          </Col>
        </Row>
        <Row>
          <Col>
          <div className="form-check form-check-inline">
        <input
        className="form-check-input"
        type="radio"
        name="degree-type"
        id="celsius"
        value="celsius"
        checked={degreeType === "celsius"}
        onChange={onChange}
        />
        <label className="form-check-label" for="celsius">Celsius</label>
      </div>
      <div className="form-check form-check-inline">
        <input
        className="form-check-input"
        type="radio"
        name="degree-type"
        id="farenheit"
        value="fahrenheit"
        checked={degreeType === "fahrenheit"}
        onChange={onChange}
        />
        <label className="form-check-label" for="farenheit">Farenheit</label>
      </div>
          </Col>
        </Row>
      </>
    );
  };

export default CitySelector;