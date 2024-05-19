import Card from './CardMain';
import phalastin from '../assets/images/Phalestine.web.png';
import phalastin1 from '../assets/images/phalstin1.png';
import Syria from '../assets/images/سوريا.png';
import child from '../assets/images/يتيم.jpg';

import React from 'react';
import { useUser } from '../page/DataBack';
// import Card from './Card';

function Help() {
    // const { DataProject } = useUser(); // الحصول على البيانات من السياق

    return (
        

        <div>
                    <Card 
                            datatitle1={<p>إغاثة الشعب الفلسطيني</p>}
                            img1={phalastin}
                             tag1={phalastin1}
                             class1={<p>عامة المجتمع</p>}
                             avail1={200}
                             from1={300}
        
                             datatitle2={<p>مساعدة الأطفال الأيتام</p>}
                             img2={child}
                             tag2={Syria}
                             class2={<p> الأطفال الأيتام </p>}
                             avail2={89}
                             from2={900}
                         />
                         
                          
                 </div>
    );
}

export default Help;




// <div>
        //     {/* استخدام map لتمرير كل عنصر في DataProject وعرضه في مكون Card */}
        //     {/* {DataProject.map((project, index) => ( */}
        //         <div key={index}>
        //             <Card 
        //                 datatitle={project.datatitle}
        //                 img={project.img}
        //                 tag={project.tag}
        //                 class={project.class}
        //                 avail={project.avail}
        //                 from={project.from}
        //             />
        //             <div className="card-footer text-muted">
        //                 منذ يومين
        //             </div>
        //         </div>
        //     ))}
        // </div>





// import Card from './CardMain';
// import phalastin from '../assets/images/Phalestine.web.png';
// import phalastin1 from '../assets/images/phalstin1.png';
// import Syria from '../assets/images/سوريا.png';
// import child from '../assets/images/يتيم.jpg';

// function Help(){
//     return (
//         <div>
//             <Card 
//                     datatitle1={<p>إغاثة الشعب الفلسطيني</p>}
//                     img1={phalastin}
//                     tag1={phalastin1}
//                     class1={<p>عامة المجتمع</p>}
//                     avail1={200}
//                     from1={300}

//                     datatitle2={<p>مساعدة الأطفال الأيتام</p>}
//                     img2={child}
//                     tag2={Syria}
//                     class2={<p> الأطفال الأيتام </p>}
//                     avail2={89}
//                     from2={900}
//                 />
//                 <div class="card-footer text-muted">
//                 منذ يومين
//                 </div>
//                 {/* <Card 
//                     datatitle1={<p>إغاثة الشعب الفلسطيني</p>}
//                     img1={phalastin}
//                     tag1={phalastin1}
//                     class1={<p>عامة المجتمع</p>}
//                     avail1={200}
//                     from1={300}

//                     datatitle2={null}
//                     img2={null}
//                     tag2={null}
//                     class2={null}
//                     avail2={null}
//                     from2={null}
//                 /> */}
//         </div>
//     )
// }
// export default Help;