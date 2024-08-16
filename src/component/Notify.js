import addNotification from 'react-push-notification';
import logo from './images/udhayan.jpg';


function Notify() {

  const clickNotify = ()=>{
    addNotification({
      title:'From Udhayan',
      message:'Hello, this is a notification from Udhayan',
      duration:10000,
      icon : logo,
      native:true,
      onClick: ()=>window.location="https://react-firebase-topaz-nine.vercel.app/",
    })
  }
  return (
    <div>
      <button onClick={clickNotify} className="btn btn-primary m-5">
        Click to notify
      </button>
    </div>
  );
}

export default Notify;
