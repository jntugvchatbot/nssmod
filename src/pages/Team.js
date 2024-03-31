import React from 'react';
import './Team.css';
import Mobilefooter from '../components/Mobilefooter';

const Team = () => {
  return (
    <div className="container">
      <ul className="tabs">
        <li className="active" rel="Admin">Admin</li>
        <li rel="East_Godavari">East Godavari</li>
        <li rel="West_Godavar">West Godavari</li>
        <li rel="Krishna">Krishna</li>
        <li rel="Guntur">Guntur</li>
        <li rel="Prakasam">Prakasam</li>
      </ul>
      <div className="tab_container">
        <div id="Admin" className="tab_content">
          <section id="team" className="pb-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div className="mainflip">
                      <div className="frontside">
                        <div className="card">
                          <div className="card-body text-center">
                            <p><img className="img-fluid" src="nss/assets/images/imagevc.jpg" alt="card image" /></p> 
                            <h4 className="card-title">Dr. G.V.R. PRASADA RAJU</h4>
                            <p className="card-text">Vice-Chancellor.</p>
                            <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="backside">
                        <div className="card">
                          <div className="card-body text-center mt-4">
                            <h4 className="card-title">Dr. G.V.R. PRASADA RAJU</h4>
                            <p className="card-text">Vice-Chancellor.</p>
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <a className="social-icon text-xs-center" target="_blank" href="#">
                                  <i className="fa fa-facebook"></i>
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a className="social-icon text-xs-center" target="_blank" href="#">
                                  <i className="fa fa-twitter"></i>
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a className="social-icon text-xs-center" target="_blank" href="#">
                                  <i className="fa fa-skype"></i>
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a className="social-icon text-xs-center" target="_blank" href="#">
                                  <i className="fa fa-google"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <h4 align="center">Advisory Committee</h4>
      <table className="table table-striped table-bordered dataTable" style={{ width: '90%', margin: 'auto' }}>
        <tbody>
          <tr bgcolor='#CCCCCC'>
            <td style={{ width: '69px', textAlign: 'center' }}><h6><strong>S.No</strong></h6></td>
            <td style={{ width: '449px', textAlign: 'center' }}><h6><strong>Name of the Member</strong></h6></td>
            <td style={{ width: '233px', textAlign: 'center' }}><h6><strong>Position</strong></h6></td>
          </tr>
          <tr>
            <td>1</td>
            <td>Prof. G V.R.Prasada Raju, Hon’ble Vice Chancellor</td>
            <td>Chairman</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Sri J. Syamala Rao, IAS Pl. Secretary to Higher Education Department, Govt. of AP</td>
            <td>Member</td>
          </tr>
          {/* Add more table rows as needed */}
        </tbody>
      </table>
      
    </div>
  );
}

export default Team;
