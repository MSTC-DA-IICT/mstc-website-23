import MemberData from '../data/members.json'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

export default function Members(){
    return(
        <div className="pt-32 mx-12 sm:mx-24 md:mx-32 lg:mx-40 text-gray-100">
            <h1 className="text-2xl md:text-4xl font-medium mb-4 text-center">
                  Our Team
            </h1>
            <div className='flex flex-wrap justify-center'>
            {MemberData.map((member) => (
                <div className='rounded-xl md:w-3/6 lg:w-2/6 py-6 md:px-6'>
                    <div className='bg-black/[.4] backdrop-blur-md rounded-xl'>
                        <img className="rounded-xl object-cover w-full aspect-square" loading="lazy"
                        src={process.env.PUBLIC_URL + "/images/members/" + member.name.split(" ").join("") + ".jpg"}
                        alt={member.name}/>
                        <div className='flex justify-between items-center px-3 py-3'>
                            <div className='mr-4'>
                                <h3 className='text-base font-medium'>{member.name}</h3>
                                <h4 className='text-sm text-gray-200'>{member.designation}</h4>
                            </div>
                            <div className='flex gap-2'>
                                <a href={member.linkedin} className="hover:text-blue-400">
                                    <BsLinkedin className="h-6 w-6"/>
                                </a>
                                <a href={member.github} className="hover:text-gray-200">
                                    <BsGithub className="h-6 w-6"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div> 
            ))}
            </div>
        </div> 
    )
}