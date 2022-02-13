import faker from "faker";

const Content=(props)=>{
   return(
    <div class="ui cards">
  
  <div class="card">
    <div class="content">
    <img class="right floated mini ui image" style={{width:"50px",height:"50px"}} src={faker.image.image()}/>
      <div class="header">
        Jenny Lawrence
      </div>
      <div class="meta">
        New User
      </div>
      <div class="description">
        Jenny requested permission to view your contact details
      </div>
    </div>
    <div>
      {props.children}
    </div>
  </div>
</div>
   )
}
export default Content;