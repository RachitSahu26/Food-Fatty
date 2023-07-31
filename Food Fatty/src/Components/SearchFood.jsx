import React from 'react'
import styled from "styled-components"
import { Get_URL } from '../App'

function SearchFood({ data }) {
    return (
        <FoodArea>
            <FoodCards>
                {
                    data?.map(({ name, image, text, price }) => (
                        <FoodCard kay={name} >

                            <div className="FoodCard">
                                <div className="food-img">
                                    <img src={Get_URL + image} />
                                    <div className="food-detail">
                                        <h2>{name}</h2>
                                        <p>{text}</p>

                                    </div>


                                </div>

                            </div>
                        </FoodCard>
                    ))}
            </FoodCards>
        </FoodArea>
    )
}

export default SearchFood
const FoodCards = styled.div`
.FoodCard{
/* margin:0 auto; */
width: 370px;
height: 200px;
border-radius: 24px;
margin-left: 22px;
margin-top: 33px;
padding: 10px;
color: black;
padding-left: 15px;
    background-color: #ffffff;
}

`
const FoodArea = styled.div`
    display: flex;
    flex-wrap: wrap;
background-image: url("/bg.png");
margin-top: 22px;
min-height: 500px;
height: auto;
`

const FoodCard = styled.div`



`