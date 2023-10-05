import { BsGithub, BsGoogle, BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';
import QZone1 from '../../../assets/qZone1.png'
import QZone2 from '../../../assets/qZone2.png'
import QZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-3xl font-bold">Login with</h2>
                <button className="btn hover:bg-sky-300 hover:border-1 hover:border-sky-500 font-normal text-sky-500 btn-outline w-full">
                    <BsGoogle />
                    Login with Google
                </button>
                <button className="btn font-normal btn-outline w-full">
                    <BsGithub />
                    Login with Github
                </button>
            </div>
            <div className='p-4 mb-6'>
                <h2 className="text-3xl mb-4 font-bold">Find us on</h2>
                <a href="" className='p-4 flex items-center text-lg border rounded-t-lg'>
                    <BsFacebook className='mr-3' />
                    Facebook
                </a>
                <a href="" className='p-4 flex items-center text-lg border-x'>
                    <BsTwitter className='mr-3' />
                    Twitter
                </a>
                <a href="" className='p-4 flex items-center text-lg border rounded-b-lg'>
                    <BsInstagram className='mr-3' />
                    Instagram
                </a>
            </div>

            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-3xl font-bold">Q Zone</h2>
                    <img src={QZone1} alt="" />
                    <img src={QZone2} alt="" />
                    <img src={QZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;