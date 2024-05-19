import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import back from '../assets/images/back.jpg';
import Line from "./line";

export default function Free() {
    return (
        <CardGroup className="padd">
            <Card className="cardMain m-3 ">
                <Card.Img src={back} alt="Card image" style={{ height: "300px" , objectFit: "cover"}} />
                <Card.ImgOverlay className='textwithImg  justify-content-center align-items-center' style={{padding: "50px"}}>
                    {/* <Card.Title>Card title</Card.Title> */}
                    <Card.Text className="fs-4">
                    مُعسر عُمره 32 عاماً مُتزوج عليه فاتورة بمبلغ 3,504,971 ل.س
                    </Card.Text>
                </Card.ImgOverlay>
                <Line num={50} />
                <Card.Body>
                    <Card.Title>xxx</Card.Title>
                    <Card.Text>ddd</Card.Text>
                    <Card.Text><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
                </Card.Body>
            </Card>

            <Card className="cardMain m-3 ">
                <Card.Img src={back} alt="Card image" style={{ height: "300px" , objectFit: "cover"}} />
                <Card.ImgOverlay className='textwithImg  justify-content-center align-items-center' style={{padding: "50px"}}>
                    <Card.Text className="fs-4">
                    عليه امر بالتنفيذ وحكم بالسجن عمره 46 عاما متزوج لديه 5 أطفال متبقى عليه مبلغ 60182 ل.س
                    </Card.Text>
                </Card.ImgOverlay>
                <Line num={0} />
                <Card.Body>
                    <Card.Title>xxx</Card.Title>
                    <Card.Text>ddd</Card.Text>
                    <Card.Text><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
                </Card.Body>
            </Card>

            <Card className="cardMain m-3 ">
                <Card.Img src={back} alt="Card image" style={{ height: "300px" , objectFit: "cover"}} />
                <Card.ImgOverlay className='textwithImg  justify-content-center align-items-center ' style={{padding: "50px"}}>
                    <Card.Text className="fs-4">
                    مُعسر عُمره 37 عاماً مُتزوج ولديه (3) من الأبناء عليه فاتورة بمبلغ 1,200,000 ل.س
                    </Card.Text>
                </Card.ImgOverlay>
                <Line num={0} />
                <Card.Body>
                    <Card.Title>xxx</Card.Title>
                    <Card.Text>ddd</Card.Text>
                    <Card.Text><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
    );
}







{/* <CardGroup>
      <Card>
        <Card.Img variant="top" src="back" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup> */}