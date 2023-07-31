import React, { useEffect, useState } from 'react'
import styled from "styled-components";
// import SearchFood from './Components/SearchFood';

const Get_URL = "http://localhost:9000/";
export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchDataURl = async () => {
      setLoading(true);

      try {

        const response = await fetch(Get_URL)
        const json = await response.json();
        // console.log(json);
        setData(json);
        setLoading(false);

      }

      catch (error) {
        setError("data is not found ");

      }
    }

    fetchDataURl();



  },[])

  if (error) return <div>{error}</div>
  if (loading) return <div>Loading... </div>


  return (
    <Container>
      <TopContainer>
        <div className='log-img'>
          <img src='/public/logo.svg'></img>
        </div>
        <div className="input-box">
          <input placeholder='Enter and search' />
        </div>

      </TopContainer>

      <SelectedContainer>
        <Button>All </Button>
        <Button>Break Fast </Button>
        <Button>Dinner </Button>
        <Button>Lunch</Button>


      </SelectedContainer>


    </Container>
  )
}

// ........1=> Container...........

const Container = styled.div`

margin: 0 auto;

`
// ........1(1)=> TopContainer...........

const TopContainer = styled.section`
display: flex;

justify-content: space-between;
min-height: 140px;
width: 100%;
padding:50px 60px ;
text-align: center;
.input-box{
  input{
padding: 20px;
font-size:15px;
    border: 2px solid aqua;
    background: transparent;
 color:white;
  }


}

`

// ........1(2)=> SelectedContainer...........


const SelectedContainer = styled.section`

display: flex;
justify-content: center;
gap: 12px;
`
// ........1(2.1)=> button...........

const Button = styled.button`
background: aqua;
border-radius: 5px;
padding:10px;
border: none;
font-size: 24px ;
color: black;
`

