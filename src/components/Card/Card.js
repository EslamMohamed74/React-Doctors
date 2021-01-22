import React from 'react'
import Date from '../Date/Date'
import { Accordion, Card } from 'react-bootstrap'
import './Card.css'
const Cards = (props) => {
    const { id, name, image, specialist, firstDay, lastDay, startTime, endTime, availableDates } = props.doctor

    const dates = availableDates.map((availableDate, index) => {
        return (
            <div className="col-3">
                <Date availableDate={availableDate} key={index} active={index===1} />
            </div>
        )
    })
    return (
        <Card className="Card">
            <Accordion.Toggle as={Card.Header} eventKey={id}>
                <div className="row Card-Header" >
                    <div className="col-2" style={{ paddingLeft: '0' }}>
                        <img src={image} className="img-fluid rounded-circle" alt={`${name}`} />
                    </div>
                    <div className="col-10">
                        <h6 className="Card-Title">{name}</h6>
                        <small className="Card-SubTitle">{specialist}</small>
                        <div className="row Card-Body">
                            <div className="col-6 col-lg-4 pl-0 pl-lg-3">
                                <i className="fas fa-calendar-alt" aria-hidden="true"></i>&nbsp;
                                <small>{firstDay}-{lastDay}</small>
                            </div>
                            <div className="col-6 col-lg-4">
                                <i className="fas fa-clock" aria-hidden="true"></i>&nbsp;
                                <small>{startTime}-{endTime}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={id}>
                <Card.Body>
                    <div>
                        <hr />
                        <div className="row text-center">
                            <div className="col-12 mx-auto">
                                <p>
                                    مواعيد د/{name} خلال شهر اكتوبر<br />
                         يرجى تحديد الموعد المناسب للمتابعه
                     </p>
                            </div>

                        </div>
                        <div className="row text-center">
                            <div className="col-12 col-lg-10 mx-auto Card-Date" >
                                <div className="row">
                                    {dates}
                                </div>
                            </div>
                        </div>
                        <div className="row text-center Cart-Footer">
                            <div className="col-12 col-lg-8 mx-auto d-flex justify-content-between">
                                <button type="button" className="btn btn-primary">ارسال الطلب</button>
                                <button type="button" className="btn btn-outline-secondary">الغاء</button>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
}

export default Cards;