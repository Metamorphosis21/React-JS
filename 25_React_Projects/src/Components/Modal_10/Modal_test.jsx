import './Styles_10.css'
import PropTypes from 'prop-types';


function Modal_test({id , header , body , footer}) {
  return (
    <section className="sec10">
      <div className="heading">Modal Pop Up 04</div>

      <div id={id || 'Modal'}>
      <div className="modal-content">
            <div className="header">
                <span>&times;</span>
                <h2>
                    {
                        header ? header : 'Default Header'
                    }
                </h2>
            </div>
            <div className="body">
                {
                    body ? body : 'Default Body'
                }
            </div>
            <div className="footer">
                {
                    footer ? footer : 'Default Footer'
                }
            </div>
          </div>
      </div>
    </section>
  );
}

// Define prop types
Modal_test.propTypes = {
    id: PropTypes.string,
    header: PropTypes.string,
    body: PropTypes.string,
    footer: PropTypes.string,
  };

export default Modal_test;
