import { Fragment } from "react";

const Cart = (prop) => (
    
        
      <div className="col-sm-4">
                <div className="card" key={prop.rocket.flight_number}>
                        <img src={prop.rocket.links.mission_patch } className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Mission Name{ prop.rocket.mission_name}</h5>
                <p>launch_year:{prop.rocket.launch_year}</p>
                <p>launch site:{prop.rocket.launch_site.site_name}</p>
                <p>Mission Name :{ prop.rocket.launch_success}</p>
                        </div>
                </div>
        </div>
            
    
    
     
);

export default Cart;