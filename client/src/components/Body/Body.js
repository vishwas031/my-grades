import Form from '../Form/Form';
import './Body.css'

function Body({text}) {
  let array = text.split(',')
    return (
        <div className='main'>
          <div className='left-side'>
            <Form array={array}/>
          </div>
        </div>
    );
  }
  
  export default Body;