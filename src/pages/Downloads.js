import React from 'react';
import Mobilefooter from '../components/Mobilefooter';
const Downloads = () => {
  return (
    <div>
      <h3><center>DOWNLOADS</center></h3>
      <table className="table-striped" width="100%" cellPadding="20" cellSpacing="5">
        <tbody>
          <tr>
            <th>1.</th>
            <th>NSS Manual (Revised) 2006</th>
            <th>
              <a href="/pdfs/manualNss2006.pdf" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-download" aria-hidden="true"></i>DOWNLOAD
              </a>
            </th>
          </tr>
          <tr>
            <th>2.</th>
            <th>Format for Volunteer Registration</th>
            <th>
              <a href="/pdfs/VolunteerRegistration.pdf" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-download" aria-hidden="true"></i>DOWNLOAD
              </a>
            </th>
          </tr>
          <tr>
            <th>3.</th>
            <th>Application for new NSS unit</th>
            <th>
              <a href="/pdfs/New_NSS_Unit.doc" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-download" aria-hidden="true"></i>DOWNLOAD
              </a>
            </th>
          </tr>
          <tr>
            <th>4.</th>
            <th>Format for Special Camp proposal</th>
            <th>
              <a href="/pdfs/Special Camp Proposal.docx" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-download" aria-hidden="true"></i>DOWNLOAD
              </a>
            </th>
          </tr>
          <tr>
            <th>5.</th>
            <th width="70%">Format for submitting the activity report</th>
            <th>
              <a href="" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-download" aria-hidden="true"></i>DOWNLOAD
              </a>
            </th>
          </tr>
        </tbody>
      </table>
      <Mobilefooter/>
    </div>
    
  );
};

export default Downloads;
