import React from 'react';
import Card from 'react-bootstrap/Card'
import Cycle from './cycle';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import DataCard from './dataCard';
import { Link } from 'react-router-dom';
function Cardd(props) {
  const img1=props.img1;
  return (
    <div className='cardMain'>
    <Row xs={1} md={2} className="g-4 dip" >
{Array.from({ length: 1 }).map((_, idx) => (
  <React.Fragment key={idx}>
    <Col xs={12} md={6}>
      <Card>
        <Card.Img variant="top" src={props.img1} />
        <Card.Body>
          {props.datatitle1}
          <Row className='text-center text-decoration-none'>
            <Col className='text-decoration-none'>الفئة المستهدفة
              <br/>
              <img src={props.tag1} height={200} className='tag'/>
              <br/>
              {props.class1}
            </Col>
            <Col className='text-center2'>
             عدد المستفيدين {props.from1} ألف تم تزيد
              <br/>
              <Cycle num={Math.floor(props.avail1 * 100 / props.from1)} /> 
              <br/>     
              {props.avail1} ألف   
              <br/>
              <div className='btn'>
              <Link  className="btn btn-primary" 
              to={{pathname :'/DataCard' 
              // , state :
              // {
              //   // img1 : props.img1 ,
              // // datatitle : props.datatitle1 
              // // , tag: props.tag1 
              // // ,
              // // class : props.class1 ,
              // // avail : props.avail1,
              // // from :props.from1
              // }
              }}>  
                    عرض التفاصيل الإضافية
                  </Link>
                  </div>          
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <div class="card-footer text-muted">
                         منذ يومين
                         </div>
      {/* </Link> */}
    </Col>
    <Col xs={12} md={6}>
      <Card>
        <Card.Img variant="top" src={props.img2} />
        <Card.Body>
          {props.datatitle2}
          <Row className='text-center text-decoration-none'>
            <Col className='text-decoration-none'>الفئة المستهدفة
              <br/>
              <img src={props.tag2} alt="phalastin" height={200} className='tag'/>
              <br/>
              {props.class2}
            </Col>
            <Col className='text-center2'>
             عدد المستفيدين {props.from2} ألف تم تزيد
              <br/>
              <Cycle num={Math.floor(props.avail2 * 100 / props.from2)} /> 
              <br/>     
              {props.avail2} ألف   
              <br/>
              <div className='btn'>
              <Link  className="btn btn-primary" 
              to={{pathname :'/DataCard' 
              // , state :
              // {
              //   // img1 : props.img1 ,
              // // datatitle : props.datatitle1 
              // // , tag: props.tag1 
              // // ,
              // // class : props.class1 ,
              // // avail : props.avail1,
              // // from :props.from1
              // }
              }}>  
                    عرض التفاصيل الإضافية
                  </Link>
                  </div>    
            </Col>
          </Row>
        </Card.Body>
      </Card>
      
      <div class="card-footer text-muted">
                         منذ يومين
                         </div>
    </Col>
  </React.Fragment>
))}
</Row>
</div>
  );
}
export default Cardd;
// function Cardd(props) {
//     return (
//       <div className='cardMain'>
//       <Row xs={1} md={2} className="g-4 dip" >
//   {Array.from({ length: 1 }).map((_, idx) => (
//     <React.Fragment key={idx}>
//       <Col xs={12} md={6}>
//       <Link to={{ pathname :'/DataCard' , state :
//       {img1 : props.img1 ,
//       datatitle : props.datatitle1 
//       , tag: props.tag1 ,
//       // class : props.class1 ,
//       // avail : props.avail1,
//       // from :props.from1
//       }}}>
//         <Card>
//           <Card.Img variant="top" src={props.img1} />
//           <Card.Body>
//             {props.datatitle1}
//             <Row className='text-center text-decoration-none'>
//               <Col className='text-decoration-none'>الفئة المستهدفة
//                 <br/>
//                 <img src={props.tag1} height={200} className='tag'/>
//                 <br/>
//                 {props.class1}
//               </Col>
//               <Col className='text-center2'>
//                عدد المستفيدين {props.from1} ألف تم تزيد
//                 <br/>
//                 <Cycle num={Math.floor(props.avail1 * 100 / props.from1)} /> 
//                 <br/>     
//                 {props.avail1} ألف       
//               </Col>
//             </Row>
//           </Card.Body>
//         </Card>
//         </Link>
//       </Col>
//       <Col xs={12} md={6}>
//         <Card>
//           <Card.Img variant="top" src={props.img2} />
//           <Card.Body>
//             {props.datatitle2}
//             <Row className='text-center text-decoration-none'>
//               <Col className='text-decoration-none'>الفئة المستهدفة
//                 <br/>
//                 <img src={props.tag2} alt="phalastin" height={200} className='tag'/>
//                 <br/>
//                 {props.class2}
//               </Col>
//               <Col className='text-center2'>
//                عدد المستفيدين {props.from2} ألف تم تزيد
//                 <br/>
//                 <Cycle num={Math.floor(props.avail2 * 100 / props.from2)} /> 
//                 <br/>     
//                 {props.avail2} ألف       
//               </Col>
//             </Row>
//           </Card.Body>
//         </Card>
//       </Col>
//     </React.Fragment>
//   ))}
// </Row>
// </div>
//     );
// }
// export default Cardd;
