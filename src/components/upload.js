import React from 'react';

export default class UploadMenu extends React.Component {

  render(){
    return(
      <div className="modal fade" id="createModal" role="dialog">
        <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">It's Morphin Time</h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="custom-file">
                <input type="file" className="custom-file-input" id="customFile" />
                <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="custom-file">
                <input type="file" className="custom-file-input" id="customFile" />
                <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                  </div>
                </div>
               </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-dismiss="modal">Do It</button>
              </div>
            </div>
        </div>
      </div>
    )
  }

}
