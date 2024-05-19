import React from 'react';
import phalastin from '../assets/images/Phalestine.web.png';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import eye from '../assets/images/icon-eye.svg';
import Line from './line';
import forijat from '../assets/images/icon-forijat.svg';
import SP from '../assets/images/SP.png';
import user from '../assets/images/users.svg';
import FormDonation from './FormDonation';
import { Link } from 'react-router-dom';
function DataCard(props) {

    return (
<div className="container-fluid">
    <Card style={{ width: '100%' }}>
        <div className="d-flex">
            <div style={{ paddingRight: '20px', width: '60%' }}>
                <Card.Body>
                    <Card.Title>إغاثة الشعب الفلسطيني المتضرر من الحرب</Card.Title>
                    <Card.Text>
                        نسعى جاهدين لتقديم المساعدة والدعم للشعب الفلسطيني الذي تأثر بشدة جراء الحروب والصراعات. يهدف مشروع
                        "إغاثة الشعب الفلسطيني المتضرر من الحرب" إلى توفير المساعدة الإنسانية الضرورية
                        والإغاثة العاجلة للعائلات الفلسطينية المتضررة، بما في ذلك توفير الغذاء والمأكولات الأساسية، والمأوى، والرعاية الصحية.
                        يعتبر هذا المشروع فرصة لنا جميعًا للوقوف بجانب الشعب الفلسطيني في أوقات الضيق والمحن، وتقديم الدعم المعنوي والمادي لهم في مواجهة
                    </Card.Text>
                    <div className="d-grid gap-2">
                    
                    
                        {/* <button onClick={byTheProject} className="btn btn-primary" type="button">
                        تبرع الآن

                            </button> */}
                    <Link className="btn btn-primary" to={{ pathname: '/FormDonation' }}>
                        تبرع الآن
                    </Link>
                    </div>
                    <div className="money">
                        <p className="card-spacer-x pdisb"><small className="card-spacer-x" style={{ textAlign: 'left' }}>المبلغ المتبقي : <small style={{ color: ' red' }}>25,000 ل.س</small></small></p>
                        <p className="card-text pdisb"><small className="text-muted" style={{ textAlign: 'right' }}> تم جمع : 75,000 ل.س </small></p>
                    </div>
                    
                    <div className="Linecolor">
                        <Line num={75} className="Linecolor" />
                    </div>
                </Card.Body>
            </div>
            <div style={{ width: '40%' }}>
                <Card.Img variant="end" src={phalastin} style={{ width: '100%', borderRadius: '50%' }} />
                <p className="card-text" style={{ textAlign: 'center' }}><small className="text-muted">السودان، تركيا، سوريا، لبنان، مالي، وغيرها</small></p>
                
            </div>
        </div>
        <div className='listGroup' style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                <ListGroup className="my-2" style={{  backgroundColor: '#f2f2f2' , width: '20%' }}>
                    <ListGroup.Item className="w-100 p-2 text-center " style={{ backgroundColor: '#f2f2f2' }}> الزيارات 3551 زيارة
                        <img src={eye} className="img-fluid rounded-start classEye" />
                    </ListGroup.Item>
                </ListGroup>
                <ListGroup className="my-2" style={{  backgroundColor: '#f2f2f2' , width: '20%'}}>
                    <ListGroup.Item className="w-100 p-2 text-center " style={{ backgroundColor: '#f2f2f2' }}> آخر عملية تبرع قبل 3 ثانية
                        <img src={forijat} className="img-fluid rounded-start classEye" />
                    </ListGroup.Item>
                </ListGroup>
                <ListGroup className="my-2" style={{  backgroundColor: '#f2f2f2', width: '20%' }}>
                    <ListGroup.Item className="w-100 p-2 text-center " style={{ backgroundColor: '#f2f2f2' }}> عدد عمليات التبرع 6,941 عملية
                    <img src={SP} className="img-fluid rounded-start classEye" />
                    </ListGroup.Item>
                </ListGroup>
                <ListGroup className="my-2" style={{  backgroundColor: '#f2f2f2', width: '20%' }}>
                    <ListGroup.Item className="w-100 p-2 text-center " style={{ backgroundColor: '#f2f2f2' }}> عدد المستفيدين 61 حتى الآن
                    <small> العدد المستهدف 195 مستفيد </small>
                    <img src={user} className="img-fluid rounded-start classEye" />
                </ListGroup.Item>
            </ListGroup>
        </div>
    </Card>
</div>


    );
}
export default DataCard;








