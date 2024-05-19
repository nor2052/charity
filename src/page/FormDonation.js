import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import mtn from '../assets/images/mtn.png';
export default function FormDonation () {
    return (
        <div className='ForminArabic'>
            <>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="الاسم الكامل"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
      </InputGroup>

      <InputGroup className="mb-3 leftToRightItem">
        <Form.Control
          placeholder="الايميل"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
      </InputGroup>

      {/* <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label> */}
      <div className='selectForm'>
        <p className='textTop'>
        اختر فئة التبرع
        </p>
        <Form.Select aria-label="Default select example" className='leftToRightItem '>
      <option value="1">1000 ل.س</option>
      <option value="2">10,000 ل.س</option>
      <option value="3">100,000 ل.س</option>
      <option value="4">1,000,000 ل.س</option>
    </Form.Select>
    <br/>
    </div>
    <div className='selectForm'>
        <p className='textTop'>
        اختر البنك
        </p>
        <Form.Select aria-label="Default select example" className='leftToRightItem '>
      <option value="1">cash MTN</option>
      <option value="2">
        أقرب أليك
        {/* <img src={mtn} className="img-fluid rounded-start classEye" /> */}
      </option>
      <option value="3">البنك التجاري</option>
      <option value="4">البنك العقاري</option>
    </Form.Select>
    <br/>
    </div>
      
      <h2> رقم فاتورتك 2222222 </h2>
      <p> الرجاء الانتقال للتطبيق من أجل التسديد, حيث مدة الفاتورة 24 ساعة</p>
      <InputGroup>
        <InputGroup.Text>إذا كان لديك ملاحظة رجاء أخبرنا🤗</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup>
    </>
        </div>
    )
}