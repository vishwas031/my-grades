import Form from '../../components/Form/Form';
import './Register.css'

function Register({text}) {
  let array = text.split(',')
    return (
        <div className='main'>
          <div className='left-side'>
            <Form array={array}/>
          </div>
        </div>
    );
  }
  
  export default Register;