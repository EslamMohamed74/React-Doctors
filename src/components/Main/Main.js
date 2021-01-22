import React, { useState, useEffect } from 'react'
import Title from '../Title/Title'
import Card from '../Card/Card'
import { Accordion } from 'react-bootstrap'
import { doctors } from '../../data/doctors'
import './Main.css'
const Main = () => {
    const [cardRight, setCardRight] = useState([]);
    const [cardLeft, setCardLeft] = useState([]);

    useEffect(() => {
        const cardRight = doctors.map((doctor, index) => {
            if(index < 3){
            return (
                    <Card doctor={doctor} key={doctor.id}/>
                )
            }
        })
        const cardLeft = doctors.map((doctor, index) => {
            if(index > 2){
            return (
                    <Card doctor={doctor} key={doctor.id}/>
                )
            }
        })
        setCardLeft(cardLeft)
        setCardRight(cardRight)
    }, [])

    return (
        <section className="Main text-right">
            <Title title="ارسال طلب" />
            <div className="container">
                <h5 className="Main-title">قم باختيار طبيبك لارسال طلب المتابعة</h5>
                <div className="row">
                    <div className="col-12">
                        <Accordion className="row">
                            <div className="col-md-6 col-xs-12" >
                            {cardRight}
                            </div>
                            <div className="col-md-6 col-xs-12">
                            {cardLeft}
                            </div>
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Main; 