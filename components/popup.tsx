import Form from 'react-bootstrap/Form'


export default function Popup(){

    return(
      <Form>
        <div id="popup" className="popup">
        <div className="d-flex mb-2">
          <h5 className="title">Your bid must be at least $150</h5>
          <a href="#" className="link link_help"><span>Help</span><i className="icon-help ml-2"></i></a>
        </div>
        <div className="form-group mb-4">
          <input type="text" className="form-control" placeholder="Enter bid amount"></input>
        </div>
        <div className="row">
          <div className="col-12 col-lg-4">
            <a href="javascript:void(0)" className="btn btn-outline btn-white full uppercase btn-cancel">Cancel</a>
          </div>
          <div className="col-12 col-lg-8">
            <a href="#" className="btn btn-field btn-blue full uppercase">Place a Bid</a>
          </div>
        </div>
      </div>
      </Form>
        
    )
}