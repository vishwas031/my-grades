import Navbar from '../../components/Nav/Nav';
// import Hero from '../../components/Hero/Hero';
import Form from '../../components/Form/Form';
import './Register.css'

function Register() {
    return (
      <div>
        <Navbar/>
        <div className='main'>
          <div className='left-side'>
            <Form/>
          </div>
          {/* <Hero/> */}
        </div>
      </div>
    );
  }
  
  export default Register;