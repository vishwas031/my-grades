import './Home.css'
import Student from '../../components/assets/Student.png'
import Admin from '../../components/assets/Admin.png'
import { useMediaQuery } from 'react-responsive'

function Home() {
      const isBigScreen = useMediaQuery({ query: '(min-width: 651px)' })
      const isOnlyMobile = useMediaQuery({ query: '(max-width: 650px)' })
    return (
        <div>
            <div className="bg-img"></div>
            { isBigScreen && <div className='users p-5 text-center flex'>
                <div className="user-block">
                    <img alt='Student' src={Student}/>
                    <h2>Student</h2>
                </div>
                <div className="user-block">
                    <img alt='Student' src={Admin}/>
                    <h2>Admin</h2>
                </div>
            </div>}
            { isOnlyMobile && <div className='users2 p-5 text-center flex'>
                <div className="user-block">
                    <img alt='Student' src={Student}/>
                    <h2>Student</h2>
                </div>
                <div className="user-block">
                    <img alt='Student' src={Admin}/>
                    <h2>Admin</h2>
                </div>
            </div>}
        </div>
    );
  }
  
  export default Home;