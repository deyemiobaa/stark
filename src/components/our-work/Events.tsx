import image from "../../assets/events.svg"
const Events = () => {
  return (
    <div className="scenes-bg px-5 py-15">
        <div className="flex flex-col items-center justify-center space-y-5">
            <div className="text-white text-center space-y-3">
                <h1 className="text-2xl md:text-[56px] tracking-tighter ">EVENTS</h1>
                <p className="max-w-[776px] text-lg md:text-2xl">we produce immersive brand experiences that entertain, engage, and leave las ng  impressions. Whether it’s a music showcase, product launch, influencer gathering, or brandeD  ac va on, we bring your vision to life with flawless execu on and cultural relevance.</p>
            </div>
             <img src={image} alt="" />
             <p className="text-lg md:text-2xl text-white text-center">We turn every event into a stage for creativity and brand storytelling.</p>
        </div>
       
   </div>
  )
}

export default Events