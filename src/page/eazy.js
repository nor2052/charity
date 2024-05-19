import React from 'react';
import '../App.css';
import DataEazy from './DataEazy';

import winter from '../assets/images/winter.png';
import learnGirl from '../assets/images/learn.jpg';
import hospital from '../assets/images/hospital.jpg'

import hosr from '../assets/images/Housing2.web.png'
import boy from '../assets/images/boy.jpg'
import eta from '../assets/images/إفطار صائم.png'
function Easy(){
return(
    <div>
      <DataEazy 
      img1 ={winter}
      title1={<h5>كسوة شتوية</h5>}
      data1={<p>أسرة محتاجة تعاني من قلة ادخل وصعوبة في توفير الكسوة الشتويةالتي تقي أجساد أنبنائهم من البرد </p>}
      num1={20}
      img2={learnGirl}
      title2={<h5>طلاب العلم</h5>}
      data2={<p>تأمين أدوات مدرسية لطلاب العلم الأيتام </p>}
      num2={55}
      img3 ={hospital}
      title3={<h5>عمليات قلب مفتوح</h5>}
      data3={<p>مساعد المحتاجين من فئة المرضى القلب لعمل عمليات القلب المفتوح إنقاذ الأرواح والشفاء بإذن الله</p>}
      num3={75}
      />
      {/* <DataEazy 
      img1 ={hosr}
      img2={boy}
      img3 ={eta}
      /> */}
    </div>
);
}
export default Easy;
