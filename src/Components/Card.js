import React, { Component } from 'react';
const Card = (props) => {
    return (
        <div className="col-md-3 col-sm-12 text-center py-3 ">
            <div className="card" >
                {props.val.links.mission_patch_small ? <img className="card-img-top  py-3" src={props.val.links.mission_patch_small} alt="SpaceX Launch Programs" />
                    :
                    <img width={200} height={210} src="assets/images/No.png" alt="logo" />
                }
                <div className="card-body">
                    <h5 className="card-title text-info">FalconSat #{props.val.flight_number}</h5>
                    <h5 className="card-text">MissioonId <a href="#" className="text-info">{props.val.mission_id[0] ? props.val.mission_id[0] : "-"}</a></h5>
                    <h5 className="card-text">Year Launch <a href="#" className="text-info">{props.val.launch_year}</a></h5>
                    <h5 className="card-text">Successfull Launch <a href="#" className="text-info">{`${props.val.launch_success}`}</a></h5>
                    <h5 className="card-text">Successfull Landing <a href="#" className="text-info">{`${props.val.rocket.first_stage.cores[0].land_success}`}</a></h5>
                </div>
            </div>
        </div>
    )
};
export default Card;