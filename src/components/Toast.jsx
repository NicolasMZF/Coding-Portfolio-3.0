import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Toast(){
  return(
        <div 
        className="toast position-fixed bottom-0 end-0 m-3" 
        role="alert" 
        aria-live="assertive" 
        aria-atomic="true"
        id="langToast"
      >
        <div className="toast-header">
          <strong className="me-auto">Portfolio</strong>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="toast"
          ></button>
        </div>
        <div className="toast-body" id="langToastBody">
          Hello, world! This is a toast message.
        </div>
      </div>
  );
}