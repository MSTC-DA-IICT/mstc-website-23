import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { MdArrowRight, MdArrowLeft } from 'react-icons/md';
import EventData from '../data/events.json'


export default function Events(){
    const arrowStyles = {
        position: 'absolute',
        zIndex: 2,
        cursor: 'pointer',
    };
    
    return(
        <div className="pt-32 mx-8 sm:mx-16 md:mx-24 lg:mx-40 text-gray-100">
            {EventData.map((category) => (
            <div className="">
                <h1 className="text-2xl md:text-4xl mb-10 font-medium text-center">
                    {category.title}
                </h1>
                <Carousel className="mb-16" showStatus={false} showThumbs={false} infiniteLoop
                preventMovementUntilSwipeScrollTolerance={true}
                swipeScrollTolerance={50}
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                        <div className="flex items-center">
                            <button className="top-40 w-10 h-10 md:w-12 md:h-12 md:top-[calc(50%-25px)]" type="button" onClick={onClickHandler} title={label} style={{...arrowStyles, left: 0}}>
                                <MdArrowLeft className="w-full h-full"/>
                            </button>
                        </div>
                    )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                        <div className="flex items-center">
                            <button className="top-40 w-10 h-10 md:w-12 md:h-12 md:top-[calc(50%-25px)]" type="button" onClick={onClickHandler} title={label} style={{...arrowStyles, right: 0}}>
                                <MdArrowRight className="w-full h-full"/>
                            </button>
                        </div>
                    )
                }
                >   
                {category.events.map((event) => (
                <div className="xl:flex bg-black/[.5] rounded-xl md:mx-12 px-8 pt-8 xl:px-8 xl:pt-8 pb-12 h-full">
                    <div className="flex justify-center items-center md:p-0 mb-4 min-w-fit w-auto mx-2 md:px-0 xl:mr-4 xl:mb-0 
                    bg-cover bg-center rounded-xl"
                    style={{backgroundImage: ("url(/images" + event.img + ")" )}}>
                        <div className="flex items-center h-full w-full backdrop-blur-xl rounded-xl backdrop-brightness-75">
                            <img src={process.env.PUBLIC_URL + '/images' + event.img } alt={event.name} 
                            className="backdrop-blur-xl backdrop-brightness-75 rounded-xl object-contain w-full max-h-80 "/>
                        </div>
                    </div>
                    <div className="mx-4 md:m-0 md:ml-4 text-start md:px-0 min-w-80 ">
                        <h1 className="text-lg md:text-2xl font-medium mb-2">{event.name}</h1>
                        <p className="mb-2 text-sm md:text-base">
                            {event.description}
                        </p>
                        {event.list &&
                            <div>
                                <h1 className="text-base md:text-lg font-medium mb-1">{event.listTitle}</h1>
                                <ul>
                                {event.list.map((item) => (
                                    <li className="list-disc ml-4 text-sm md:text-base">
                                        {item.length === 2 && <a className="hover:text-cyan-500" href={item[1]}>{item[0]}</a>}
                                        {item.length !== 2 && <>{item}</>}
                                    </li>
                                ))}
                                </ul>
                            </div>
                        }
                    </div>
                </div>
                ))}  
                </Carousel>
                <hr className="mb-16 mx-auto w-1/5 border-gray-400"/>
            </div>
            
            ))}
        </div>
    )
}