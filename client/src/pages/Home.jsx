import UserSearch from '../components/users/UserSearch'
import UserResults from '../components/users/UserResults'
const Home = () => {

    return (
        <div className="bg-slate-50 overflow-y-auto">
            <div className="container m-6 h-screen ">


                <UserSearch />


                <UserResults />
                {/* <div className="flex justify-between items-center fixed top-0 left-0 right-0 bg-white p-4 shadow-md">
          <img src={logo} alt="logo" className="w-24" />
          <div className="flex items-center">
            <span className="ml-4">Welcome {localStorage.getItem("username")}</span>
            <button type="button" className="ml-4 px-4 py-1 rounded text-white bg-green-500 hover:cursor-pointer hover:opacity-80" onClick={()=>setShowModal(true)}>Create</button>
            <span className="ml-4 font-bold hover:cursor-pointer" onClick={doLogout}>Logout</span>
          </div>
        </div> */}

            </div>


        </div>
    );
};

export default Home;