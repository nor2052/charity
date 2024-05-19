import Line from "./line";

function DataEazy (props) {
    return (
        <div class="card-group padd">
  <div class="card cardMain padd">
    <img src={props.img1} class="card-img-top" alt="..." />
    <Line  num={props.num1} />
    <div class="card-body">
      <h5 class="card-title">{props.title1} </h5>
      <p class="card-text">{props.data1} </p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card cardMain padd">
    <img src={props.img2} class="card-img-top" alt="..." />
    <Line num={props.num2} />
    <div class="card-body">
      <h5 class="card-title"> {props.title2}</h5>
      <p class="card-text">{props.data2}</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card cardMain padd">
    <img src={props.img3} class="card-img-top" alt="..." />
    <Line num={props.num3} />
    <div class="card-body">
      <h5 class="card-title"> {props.title3} </h5>
      <p class="card-text">{props.data3}</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
    );
}
export default DataEazy;