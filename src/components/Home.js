import { TypeAnimation } from 'react-type-animation';
import Div100vh from 'react-div-100vh'
import TechStack from '../data/techstack.json';

export default function Home(){
    return(
        <>
        <Div100vh className="flex flex-col lg:flex-row bg-black/[.5] justify-center gap-x-10 pt-32 md:pt-36 lg:pt-0 md:justify-start lg:items-center min-h-full w-full text-white px-12 sm:px-24 md:px-32 lg:px-40">
            <div className='flex grow justify-center md:justify-start'>
                <TypeAnimation
                sequence={[
                    `Microsoft\nStudent\nTechnical\nClub,\nDA-IICT`, 
                    5000,
                ]}
                wrapper="div"
                className='font-sans tracking-wide uppercase text-4xl md:text-5xl lg:text-6xl font-bold'
                cursor={true}
                repeat={Infinity}
                style={{ whiteSpace: 'pre-line'}} 
                />
            </div>
            <div className='flex items-center justify-center h-1/2 lg:h-2/3 md:justify-end p-4'>
                <img alt='Banner' className='max-w-full max-h-full lg:pl-10 pb-4 lg:pb-0' src={process.env.PUBLIC_URL + "/images/banner.png"}/>
            </div>
        </Div100vh>
        <div className="pt-12 mx-12 sm:mx-24 md:mx-32 lg:mx-40 text-gray-100">
            <div className='mb-16'>
                <div className="text-2xl md:text-4xl font-medium mb-6 text-center">
                    About Us
                </div>
                <div className="text-md">
                    <p className="mb-2">
                        We are individuals who come together and share common interest, putting our ideas into existence in order to contribute to the Microsoft Community.
                    </p>
                    <p className="mb-2">
                        Yes, we are the MSTC-Microsoft Student Technical Club of DAIICT. We try to make "I don't know" to "I don't know yet".
                    </p>
                    <p className="mb-2">
                        Many people have genuine ideas related to app and web development but there is no proper platform provided to them. We, as MSTC, come here and help them give the right environment to inculcate their ideas and develop for Microsoft. We aim to do this in as exciting and simplified manner as possible.
                    </p>
                    <p className="mb-2">
                        If you want to find answers to your questions, share ideas, solve problems, or whatever may be your goal, MSTC is here to help you get more out of your ideas and technology. If you need help browse our club, or post a question and our community members and volunteers can help you understand the problem with advice or step by-step instructions.
                    </p>
                    <p className="mb-2">
                        We also come up with various events and competitions which would help you to create a strong foundation for your dream competitions like those of Imagine Cup. We are here to make you experience the windows development environment and encourage you to develop and contribute towards the same.
                    </p>
                </div>
            </div>
            <div className='mb-16'>
                <div className="text-2xl md:text-4xl font-medium mb-8 text-center">
                    Technologies We Work With
                </div>
                <div className='grid md:grid-cols-4 lg:grid-cols-5 gap-4 items-center'>
                {TechStack.map((ts) => (
                    <div className='bg-black/[.25] h-full px-8 p-4 md:px-6 rounded-xl'>
                        <div className='h-full flex items-center justify-center'>
                            <img className='max-h-20' src={process.env.PUBLIC_URL + '/images/tech/' + ts.src} alt={ts.name}/>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>          
      </>
    )
}