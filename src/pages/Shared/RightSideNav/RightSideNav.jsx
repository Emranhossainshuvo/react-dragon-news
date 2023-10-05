import { BsGoogle } from 'react-icons/bs';

const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-3'>
                <h2 className="text-3xl font-bold">Login with</h2>
                <button className="btn btn-outline w-full">
                    <BsGoogle/>
                    Login with Google 
                </button>
            </div>
        </div>
    );
};

export default RightSideNav;