import React, {useState, useEffect} from "react"; 
import axios from "axios";
import StarwarsCard from './StarWarsCard';
import { Container, Row } from "reactstrap";

export default function StarwarsChars() {
    const [char, setChar] = useState([]);

    useEffect(() => {
        axios
          .get(`https://swapi.co/api/people/`)
          .then(response => {
            const starwarsChar = response.data.results;
            console.log(starwarsChar);
            setChar(starwarsChar);
          })
          .catch(err => console.log(`There error is: ${err}`));
          },[]);   

      return (
          <Container>
              <Row>
        <div>
        {char.map(char => {
          return (
            <StarwarsCard
            key={char.name}
            name={char.name}
            birth_year={char.birth_year}
            height={char.height}
            mass={char.mass}
            />
          );
        })}
        </div>
        </Row>
        </Container>
      );
} 