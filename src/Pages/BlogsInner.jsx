import React from 'react'
// import { blogsMainPosts } from '../constants'
import blogsBg from '../assets/blogsBg.jpg'
import { Breadcrumbs } from '@mui/material'
import { Link , useParams } from 'react-router-dom'
import purpleBlog from '../assets/purpleBlogwebp.webp'
import { useState, useEffect } from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import axios from 'axios'
import LazyLoad from 'react-lazyload'

// const BlogsInner = ({blogs, blogsMainPosts}) => {
    const BlogsInner = () => {

    const [randomPosts, setRandomPosts] = useState([]);
    const baseUrl = 'https://test.kanekt365.com/api/blogs/all';
    const [kanektBlogInnerData, setKanektBlogInnerData] = useState([]);

    useEffect(()=>{
        axios.get(baseUrl)
        .then(res => {
            setKanektBlogInnerData(res.data);
            // const data = res.data
            // console.log(data);
        })
        // fetch('https://kanekt365.com/wp-json/wp/v2/pages?status=publish')
        // .then(res => res.json())
        // .then(data => {
        //     setKanektData(data);
        // })

        .catch(err => console.error('errorr:', err));
    }, []);


    useEffect(() => {
        // Shuffle the array and select two random posts
        const shuffledPosts = kanektBlogInnerData.sort(() => 0.5 - Math.random());
        const selectedPosts = shuffledPosts.slice(0, 2);
        setRandomPosts(selectedPosts);
      }, [kanektBlogInnerData]);

    const generateSlug = (title) => {
        return title.toLowerCase().replace(/ /g, '-');
      }

    const {slug} = useParams();
    const singlePost = kanektBlogInnerData.find(p => generateSlug(p.title) === slug)    
    if(!singlePost) {
        <LazyLoad height={200} offset={300}>
            return <div>Not found</div>
        </LazyLoad>
    }

    const IconRead = () => (
        <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" strokeWidth='36' width="16px" fill="#821246" stroke='#821246'>
          <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
        </svg>
      )

  return (
        <div>
            <div className='pt-36 pb-16 text-white'
            style={{
                backgroundImage: `url(${blogsBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'}}>
    
           <div className='hidden md:block'>
             <h1 className="mt-1 text-[40px] font-bold text-white text-center">
                Blogs
             </h1>
             <h2 className="text-[15px] mt-2 font-[400] text-white text-center px-24 leading-7">
                The Me Economy and How Call Centers Can Help a QSR
             </h2>
           </div>
    
            <div className='md:hidden'>
              <h1 className="text-3xl mt-4 font-semibold text-white text-center pt-5 p-2">
                Watch the Kanekt 365 overview video to learn about everything our call centers have to offer and see your ROI!
              </h1>
            </div>
    
            <div className='mt-5 flex items-center justify-center'>
              <Breadcrumbs>
                <Link to='/' className='flex items-center text-white text-sm font-semibold'>
                    HOME <span className='px-4 text-[#0773b3] text-[24px]'>&#x2022;</span>
                </Link>
              </Breadcrumbs>
              <Breadcrumbs>
                <h2 to='/' className='flex items-center text-white text-sm font-semibold'>
                     BLOGS
                </h2>
              </Breadcrumbs>
            </div>
           </div>
    
              
        <div className='flex space-between gap-0 max-w-full pl-20 pt-[100px]'>
            <div className='flex flex-col mx-auto max-w-3xl'>

            <div className='bg-[#fff] shadow-xl shadow-slate-100'>
                <div className='relative group'>
                        <img src={purpleBlog} className='max-w-3xl rounded-tr-md rounded-tl-md' alt="" />
                    <div style={{
                        position: 'absolute',
                        top: '0px',     
                        left: '0px',   
                        width: '100px',    // narrower for elliptical shape
                        height: '95px',  
                        backgroundColor: '#0773b3',
                        borderTopLeftRadius: '5%', 
                        borderTopRightRadius: '4%', 
                        borderBottomLeftRadius: '0%', 
                        borderBottomRightRadius: '80%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white',
                        fontSize: '16px',
                        flexDirection: 'column',
                        textTransform: 'uppercase',
                        textAlign: 'center' 
                        }} >
                        <span style={{ fontSize: '30px', fontWeight: 'bold' }}>23</span>
                        <span style={{ fontSize: '12px', marginTop: '-5px' }}>May</span>
                    </div>  
                </div>

                <div className='px-8 space-y-6 text-[15px] font-[400] leading-[26px] text-[#666] py-10'>
                    <p>Even In the fast-paced world of Quick Service Restaurants, the ability to connect with customers on an emotional level is a valuable asset. This is where using a call center like Kanekt 365 excels. Call center agents aren’t making, packaging, or delivering meals. Instead, they have one job: engaging with customers and placing orders into your POS. Agents focus only on the customer. Kanekt 365 agents are trained to empathize with each customer and the purpose of the call. Each agent’s emotional intelligence is pivotal in delivering exceptional customer service experiences. This blog post will explore the importance of empathy and emotional intelligence for call center agents and how these skills can elevate customer satisfaction, loyalty, and overall brand reputation.</p>
                    <p>Empathy is the ability to understand and share another person’s feelings. In a QSR call center environment, agents must put themselves in customers’ shoes and genuinely empathize with their needs and concerns. By displaying empathy, call center agents can create a sense of trust, comfort, and understanding. This allows customers to feel heard and valued. In addition, when customers feel that their emotions are acknowledged, they are more likely to develop a positive perception of the brand and their overall experience. Empathy is included in Kanekt 365’s six-week training and is part of each agent’s evaluation.</p>
                    <p>Emotional intelligence is the capacity to recognize and manage one’s own emotions, as well as the emotions of others. For QSR call center agents, emotional intelligence enables them to effectively manage customer interactions. They are able to understand the caller’s emotional state and respond appropriately. By employing emotional intelligence, agents can tailor their communication style, tone, and language to match the customer’s emotions, creating a more personalized and engaging experience. This customized approach fosters a deeper connection with the customer, increasing satisfaction and building long-term loyalty.</p>
                    <h1 className='text-[40px] font-[700] text-[#222d35] leading-[46px]'>How do Empathy and Emotional Intelligence Resolve Difficult Calls?</h1>
                    <p>Call center agents often encounter challenging situations like customer complaints or order discrepancies. The ability to handle these situations with empathy and emotional intelligence is paramount. When customers are upset or frustrated, agents who demonstrate empathy and emotional intelligence can diffuse tension, validate the customer’s emotions, and work toward a resolution in a calm and understanding manner. By acknowledging the customer’s feelings and actively seeking solutions, agents can turn a potentially harmful experience into a positive one. Their goal is to leave the customer satisfied and more likely to return. Kanekt 365 agents are rewarded when they can diffuse a difficult call. In addition, all calls are recorded and used for further training. These difficult calls help agents learn from each other and improve your brand’s team.</p>
                    <h1 className='text-[40px] font-[700] text-[#222d35] leading-[46px]'>Increase Brand Reputation with Trained Agents</h1>
                    <p>Empathy and emotional intelligence impact individual customer interactions and contribute to the overall brand reputation. Customers who experience empathy and emotional intelligence from call center agents are more likely to share their positive experiences. Word-of-mouth recommendations and online reviews can significantly influence the perception of a QSR brand. By consistently displaying empathy and emotional intelligence, call center agents contribute to creating brand advocates of the brand.</p>
                    <p>By prioritizing empathy and emotional intelligence, call centers can improve customer service and set themselves apart in a competitive industry, ensuring customer satisfaction and long-term success. Is it time to consider using a call center so your restaurant can focus on client interaction? Contact Kanekt 365 to learn more about our agents and how they demonstrate empathy and emotional intelligence to represent your brand and increase customers’ desire to order from you!</p>
                </div>
            </div>
                          
            <div className='flex justify-between bg-[#f6f6f6] rounded-lg py-12 px-8 mt-[74px] gap-4'>  
               <div className='flex space-x-2 max-w-96'>
                    <a href="https://kanekt365.com/efficiency-in-call-ordering-for-qsrs/" target='blank'>
                    <KeyboardArrowLeftIcon sx={{backgroundColor: '#0773b3', color: 'white', borderRadius: '30px', 
                    width: '60px', height: '60px', p: '10px', transition: '0.3s ease-out',
                    '&:hover': {
                        backgroundColor: '#282D47',
                      },
                      }} /> </a>
                    <a href="https://kanekt365.com/efficiency-in-call-ordering-for-qsrs/" target='blank'>
                        <h1 className='text-[24px] font-[700] leading-7 text-[#282d47]'>Efficiency in Call Ordering for QSRs and Why It’s Important</h1> </a>
                </div>  
                <div className='flex space-x-2 max-w-80'>
                    <a href="https://kanekt365.com/treating-qsr-customers-as-valued-partners-with-kanekt-365-call-agents-from-transactions-to-relationships/" target='blank'>
                        <h1 className='text-[24px] font-[700] leading-7 text-[#282d47] text-right'>Treating QSR Customers as Valued Partners with Kanekt 365 Call Agents: From Transactions to Relationships:</h1> </a>
                    <a href="https://kanekt365.com/treating-qsr-customers-as-valued-partners-with-kanekt-365-call-agents-from-transactions-to-relationships/" target='blank'>
                        <KeyboardArrowRightIcon sx={{backgroundColor: '#0773b3', color: 'white', borderRadius: '30px', 
                    width: '60px', height: '60px', p: '10px', transition: '0.3s ease-out',
                    '&:hover': {
                        backgroundColor: '#282D47', 
                      },
                      }} /> </a>
                </div>
               
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 max-w-3xl mt-10 mx-auto'>
                {randomPosts.map((mainPost, index) => (
                    <div key={index} className="px-4 py-5">
                    <div className="relative border-[1px] border-[#dee4e9] h-[400px] pl-6 bg-white rounded-r-none rounded-3xl overflow-hidden 
                        hover:shadow-lg transition duration-500 ease-out flex flex-col">
                            <div className='mt-5 block absolute top-48 left-[0px] w-[3px] h-[26px] bg-[#0773b3]'>
                            </div>
                            <img
                                src={`data:image/jpeg;base64,${mainPost.photoPath}`}
                                alt={mainPost.title}
                                className='w-96 h-48 rounded-r-none rounded-tl-none rounded-3xl object-cover'
                            />
                        {/* <img src={mainPost.image} alt={mainPost.title} className="w-96 h-48 rounded-r-none rounded-tl-none rounded-3xl object-cover"/> */}
                            <h1 className="p-6 text-[20px] text-[#0773b3] font-bold text-left leading-7">
                                {mainPost.title}
                            </h1>
            
                        <div className='flex justify-left pt-6 pb-8 px-6 mt-auto'>
                        {/* <p className='px-1 pt-1 text-[#666] text-[15px] line-clamp-3' dangerouslySetInnerHTML={{ __html: mainPost.content }}></p> */}
                        <h2 className='text-[13px] text-[#0773b3] font-bold leading-8'>Read More</h2>
                        <p className='px-2 pt-2'><IconRead/></p>
                        </div>
            
                    </div>
                    </div>
                ))}
            </div>

        </div>


        <div>

            <div className="w-80 h-[1150px] px-6 mr-24 bg-[#f6f6f6] rounded-lg p-4">
                <h1 className='text-[24px] font-[700] text-[#222d35] leading-[24px]'>Categories</h1>
                
                <div className='relative flex items-center mt-4'> 
                    <Link to={''} className= 'flex-1'>
                        <h2 className="p-2 ml-2 bg-[#fff] md:ml-0 rounded border-none text-[15px] font-[600] text-[#282d47] hover:text-[#0773b3] transition duration-300">
                        <span className='px-2 text-[20px] text-[#0773b3] items-center'>&#x2022;</span>Agent Training</h2>
                    </Link>
                    <div className="absolute right-0 top-0 bottom-0 text-white text-[12px] font-[700] p-[14px] bg-[#0773b3] rounded rounded-tl-none rounded-bl-none"
                    >  5 
                    </div>
                </div>
                <div className='relative flex items-center mt-[5px]'> 
                    <Link to={''} className= 'flex-1'>
                        <h2 className="p-2 ml-2 bg-[#fff] md:ml-0 rounded border-none text-[15px] font-[600] text-[#282d47] hover:text-[#0773b3] transition duration-300">
                        <span className='px-2 text-[20px] text-[#0773b3] items-center'>&#x2022;</span>Analysis</h2>
                    </Link>
                    <div className="absolute right-0 top-0 bottom-0 text-white text-[12px] font-[700] p-3 bg-[#0773b3] rounded rounded-tl-none rounded-bl-none"
                    >  10
                    </div>
                </div>
                <div className='relative flex items-center mt-[5px]'> 
                    <Link to={''} className= 'flex-1'>
                        <h2 className="p-2 ml-2 bg-[#fff] md:ml-0 rounded border-none text-[15px] font-[600] text-[#282d47] hover:text-[#0773b3] transition duration-300">
                        <span className='px-2 text-[20px] text-[#0773b3] items-center'>&#x2022;</span>Article</h2>
                    </Link>
                    <div className="absolute right-0 top-0 bottom-0 text-white text-[12px] font-[700] p-[10.5px] bg-[#0773b3] rounded rounded-tl-none rounded-bl-none"
                    >  24
                    </div>
                </div>
                <div className='relative flex items-center mt-[5px]'> 
                    <Link to={''} className= 'flex-1'>
                        <h2 className="p-2 ml-2 bg-[#fff] md:ml-0 rounded border-none text-[15px] font-[600] text-[#282d47] hover:text-[#0773b3] transition duration-300">
                        <span className='px-2 text-[20px] text-[#0773b3] items-center'>&#x2022;</span>Business</h2>
                    </Link>
                    <div className="absolute right-0 top-0 bottom-0 text-white text-[12px] font-[700] p-[11px] bg-[#0773b3] rounded rounded-tl-none rounded-bl-none"
                    >  32
                    </div>
                </div>
                <div className='relative flex items-center mt-[5px]'> 
                    <Link to={''} className= 'flex-1'>
                        <h2 className="p-2 ml-2 bg-[#fff] md:ml-0 rounded border-none text-[15px] font-[600] text-[#282d47] hover:text-[#0773b3] transition duration-300">
                        <span className='px-2 text-[20px] text-[#0773b3] items-center'>&#x2022;</span>Business Solutions</h2>
                    </Link>
                    <div className="absolute right-0 top-0 bottom-0 text-white text-[12px] font-[700] p-[15px] bg-[#0773b3] rounded rounded-tl-none rounded-bl-none"
                    >  7
                    </div>
                </div>
                <div className='relative flex items-center mt-[5px]'> 
                    <Link to={''} className= 'flex-1'>
                        <h2 className="p-2 ml-2 bg-[#fff] md:ml-0 rounded border-none text-[15px] font-[600] text-[#282d47] hover:text-[#0773b3] transition duration-300">
                        <span className='px-2 text-[20px] text-[#0773b3] items-center'>&#x2022;</span>Call Center</h2>
                    </Link>
                    <div className="absolute right-0 top-0 bottom-0 text-white text-[12px] font-[700] p-[11.5px] bg-[#0773b3] rounded rounded-tl-none rounded-bl-none"
                    >  14
                    </div>
                </div>
                <div className='relative flex items-center mt-[5px]'> 
                    <Link to={''} className= 'flex-1'>
                        <h2 className="p-2 ml-2 bg-[#fff] md:ml-0 rounded border-none text-[15px] font-[600] text-[#282d47] hover:text-[#0773b3] transition duration-300">
                        <span className='px-2 text-[20px] text-[#0773b3] items-center'>&#x2022;</span>customer service</h2>
                    </Link>
                    <div className="absolute right-0 top-0 bottom-0 text-white text-[12px] font-[700] p-[11.5px] bg-[#0773b3] rounded rounded-tl-none rounded-bl-none"
                    >  27
                    </div>
                </div>
                <div className='relative flex items-center mt-[5px]'> 
                    <Link to={''} className= 'flex-1'>
                        <h2 className="p-2 ml-2 bg-[#fff] md:ml-0 rounded border-none text-[15px] font-[600] text-[#282d47] hover:text-[#0773b3] transition duration-300">
                        <span className='px-2 text-[20px] text-[#0773b3] items-center'>&#x2022;</span>Customer Support</h2>
                    </Link>
                    <div className="absolute right-0 top-0 bottom-0 text-white text-[12px] font-[700] p-[14.5px] bg-[#0773b3] rounded rounded-tl-none rounded-bl-none"
                    >  9
                    </div>
                </div>
                <div className='relative flex items-center mt-[5px]'> 
                    <Link to={''} className= 'flex-1'>
                        <h2 className="p-2 ml-2 bg-[#fff] md:ml-0 rounded border-none text-[15px] font-[600] text-[#282d47] hover:text-[#0773b3] transition duration-300">
                        <span className='px-2 text-[20px] text-[#0773b3] items-center'>&#x2022;</span>Expo</h2>
                    </Link>
                    <div className="absolute right-0 top-0 bottom-0 text-white text-[12px] font-[700] p-[14.5px] bg-[#0773b3] rounded rounded-tl-none rounded-bl-none"
                    >  2
                    </div>
                </div>
                <div className='relative flex items-center mt-[5px]'> 
                    <Link to={''} className= 'flex-1'>
                        <h2 className="p-2 ml-2 bg-[#fff] md:ml-0 rounded border-none text-[15px] font-[600] text-[#282d47] hover:text-[#0773b3] transition duration-300">
                        <span className='px-2 text-[20px] text-[#0773b3] items-center'>&#x2022;</span>Finance</h2>
                    </Link>
                    <div className="absolute right-0 top-0 bottom-0 text-white text-[12px] font-[700] p-[15px] bg-[#0773b3] rounded rounded-tl-none rounded-bl-none"
                    >  7
                    </div>
                </div>
                <div className='relative flex items-center mt-[5px]'> 
                    <Link to={''} className= 'flex-1'>
                        <h2 className="p-2 ml-2 bg-[#fff] md:ml-0 rounded border-none text-[15px] font-[600] text-[#282d47] hover:text-[#0773b3] transition duration-300">
                        <span className='px-2 text-[20px] text-[#0773b3] items-center'>&#x2022;</span>marketing</h2>
                    </Link>
                    <div className="absolute right-0 top-0 bottom-0 text-white text-[12px] font-[700] p-[14px] bg-[#0773b3] rounded rounded-tl-none rounded-bl-none"
                    >  5
                    </div>
                </div>
                <div className='relative flex items-center mt-[5px]'> 
                    <Link to={''} className= 'flex-1'>
                        <h2 className="p-2 ml-2 bg-[#fff] md:ml-0 rounded border-none text-[15px] font-[600] text-[#282d47] hover:text-[#0773b3] transition duration-300">
                        <span className='px-2 text-[20px] text-[#0773b3] items-center'>&#x2022;</span>News</h2>
                    </Link>
                    <div className="absolute right-0 top-0 bottom-0 text-white text-[12px] font-[700] p-[11px] bg-[#0773b3] rounded rounded-tl-none rounded-bl-none"
                    >  29
                    </div>
                </div>
                <div className='relative flex items-center mt-[5px]'> 
                    <Link to={''} className= 'flex-1'>
                        <h2 className="p-2 ml-2 bg-[#fff] md:ml-0 rounded border-none text-[15px] font-[600] text-[#282d47] hover:text-[#0773b3] transition duration-300">
                        <span className='px-2 text-[20px] text-[#0773b3] items-center'>&#x2022;</span>Order Taking</h2>
                    </Link>
                    <div className="absolute right-0 top-0 bottom-0 text-white text-[12px] font-[700] p-3 bg-[#0773b3] rounded rounded-tl-none rounded-bl-none"
                    >  13
                    </div>
                </div>
                <div className='relative flex items-center mt-[5px]'> 
                    <Link to={''} className= 'flex-1'>
                        <h2 className="p-2 ml-2 bg-[#fff] md:ml-0 rounded border-none text-[15px] font-[600] text-[#282d47] hover:text-[#0773b3] transition duration-300">
                        <span className='px-2 text-[20px] text-[#0773b3] items-center'>&#x2022;</span>Outsourcing</h2>
                    </Link>
                    <div className="absolute right-0 top-0 bottom-0 text-white text-[12px] font-[700] p-[14px] bg-[#0773b3] rounded rounded-tl-none rounded-bl-none"
                    >  4
                    </div>
                </div>
                <div className='relative flex items-center mt-[5px]'> 
                    <Link to={''} className= 'flex-1'>
                        <h2 className="p-2 ml-2 bg-[#fff] md:ml-0 rounded border-none text-[15px] font-[600] text-[#282d47] hover:text-[#0773b3] transition duration-300">
                        <span className='px-2 text-[20px] text-[#0773b3] items-center'>&#x2022;</span>Pizza</h2>
                    </Link>
                    <div className="absolute right-0 top-0 bottom-0 text-white text-[12px] font-[700] p-[10.4px] bg-[#0773b3] rounded rounded-tl-none rounded-bl-none"
                    >  49
                    </div>
                </div>
                <div className='relative flex items-center mt-[5px]'> 
                    <Link to={''} className= 'flex-1'>
                        <h2 className="p-2 ml-2 bg-[#fff] md:ml-0 rounded border-none text-[15px] font-[600] text-[#282d47] hover:text-[#0773b3] transition duration-300">
                        <span className='px-2 text-[20px] text-[#0773b3] items-center'>&#x2022;</span>POS Integration</h2>
                    </Link>
                    <div className="absolute right-0 top-0 bottom-0 text-white text-[12px] font-[700] p-[15.5px] bg-[#0773b3] rounded rounded-tl-none rounded-bl-none"
                    >  1
                    </div>
                </div>
                <div className='relative flex items-center mt-[5px]'> 
                    <Link to={''} className= 'flex-1'>
                        <h2 className="p-2 ml-2 bg-[#fff] md:ml-0 rounded border-none text-[15px] font-[600] text-[#282d47] hover:text-[#0773b3] transition duration-300">
                        <span className='px-2 text-[20px] text-[#0773b3] items-center'>&#x2022;</span>Press Releases</h2>
                    </Link>
                    <div className="absolute right-0 top-0 bottom-0 text-white text-[12px] font-[700] p-[11.5px] bg-[#0773b3] rounded rounded-tl-none rounded-bl-none"
                    >  14
                    </div>
                </div>
                <div className='relative flex items-center mt-[5px]'> 
                    <Link to={''} className= 'flex-1'>
                        <h2 className="p-2 ml-2 bg-[#fff] md:ml-0 rounded border-none text-[15px] font-[600] text-[#282d47] hover:text-[#0773b3] transition duration-300">
                        <span className='px-2 text-[20px] text-[#0773b3] items-center'>&#x2022;</span>Social</h2> 
                    </Link>
                    <div className="absolute right-0 top-0 bottom-0 text-white text-[12px] font-[700] p-[11px] bg-[#0773b3] rounded rounded-tl-none rounded-bl-none"
                    >  26
                    </div>
                </div>
                <div className='relative flex items-center mt-[5px]'> 
                    <Link to={''} className= 'flex-1'>
                        <h2 className="p-2 ml-2 bg-[#fff] md:ml-0 rounded border-none text-[15px] font-[600] text-[#282d47] hover:text-[#0773b3] transition duration-300">
                        <span className='px-2 text-[20px] text-[#0773b3] items-center'>&#x2022;</span>Technology</h2>
                    </Link>
                    <div className="absolute right-0 top-0 bottom-0 text-white text-[12px] font-[700] p-[11.6px] bg-[#0773b3] rounded rounded-tl-none rounded-bl-none"
                    >  10
                    </div>
                </div>
                <div className='relative flex items-center mt-[5px]'> 
                    <Link to={''} className= 'flex-1'>
                        <h2 className="p-2 ml-2 bg-[#fff] md:ml-0 rounded border-none text-[15px] font-[600] text-[#282d47] hover:text-[#0773b3] transition duration-300">
                        <span className='px-2 text-[20px] text-[#0773b3] items-center'>&#x2022;</span>trade show</h2>   
                    </Link>
                    <div className="absolute right-0 top-0 bottom-0 text-white text-[12px] font-[700] p-[14.5px] bg-[#0773b3] rounded rounded-tl-none rounded-bl-none"
                    >  2
                    </div>
                </div>
                <div className='relative flex items-center mt-[5px]'> 
                    <Link to={''} className='flex-1'>
                        <h2 className="p-2 ml-2 bg-[#fff] md:ml-0 rounded border-none text-[15px] font-[600] text-[#282d47] hover:text-[#0773b3] transition duration-300">
                        <span className='px-2 text-[20px] text-[#0773b3] items-center'>&#x2022;</span>Uncategorized</h2>
                    </Link>
                    <div className="absolute right-0 top-0 bottom-0 text-white text-[12px] font-[700] p-[10.9px] bg-[#0773b3] rounded rounded-tl-none rounded-bl-none"
                        >  28
                    </div>
                </div>
            
            </div>

            <div className="w-80 h-[1250px] px-6 mr-24 bg-[#f6f6f6] rounded-lg p-4 mt-20">
                <h1 className='text-[24px] font-[700] text-[#222d35] leading-[24px]'>Tags</h1>
                
                <div className='flex mt-4 space-x-3'> 
                    <Link to={''} className= ''>
                        <h2 className="p-2 px-3 bg-[#fff] rounded border-none text-[13px] font-[600] text-[#282d47] hover:bg-[#0773b3] hover:text-[#fff] transition duration-300">
                        2020</h2>
                    </Link>
                    <Link to={''} className= ''>
                        <h2 className="p-2 px-3 bg-[#fff] rounded border-none text-[13px] font-[600] text-[#282d47] hover:bg-[#0773b3] hover:text-[#fff] transition duration-300">
                        AI</h2>
                    </Link>
                    <Link to={''} className= ''>
                        <h2 className="p-2 px-3 bg-[#fff] rounded border-none text-[13px] font-[600] text-[#282d47] hover:bg-[#0773b3] hover:text-[#fff] transition duration-300">
                        AICallCenter</h2>
                    </Link>
                </div>
                <div className='flex mt-2 space-x-3'>
                    <Link to={''} className= ''>
                        <h2 className="p-2 px-3 bg-[#fff] rounded border-none text-[13px] font-[600] text-[#282d47] hover:bg-[#0773b3] hover:text-[#fff] transition duration-300">
                        artificialintelligence</h2>
                    </Link>
                    <Link to={''} className= ''>
                        <h2 className="p-2 px-3 bg-[#fff] rounded border-none text-[13px] font-[600] text-[#282d47] hover:bg-[#0773b3] hover:text-[#fff] transition duration-300">
                        BPO</h2>
                    </Link>
                </div> 
                <div className='flex mt-2 space-x-3'>
                    <Link to={''} className= ''>
                        <h2 className="p-2 px-3 bg-[#fff] rounded border-none text-[13px] font-[600] text-[#282d47] hover:bg-[#0773b3] hover:text-[#fff] transition duration-300">
                        CallAgents</h2>
                    </Link>
                    <Link to={''} className= ''>
                        <h2 className="p-2 px-3 bg-[#fff] rounded border-none text-[13px] font-[600] text-[#282d47] hover:bg-[#0773b3] hover:text-[#fff] transition duration-300">
                        callcenter</h2>
                    </Link>
                </div> 
                <div className='flex mt-2 space-x-3'>
                    <Link to={''} className= ''>
                        <h2 className="p-2 px-3 bg-[#fff] rounded border-none text-[13px] font-[600] text-[#282d47] hover:bg-[#0773b3] hover:text-[#fff] transition duration-300">
                        Call Center</h2>
                    </Link>
                </div> 
                <div className='flex mt-2 space-x-3'>
                    <Link to={''} className= ''>
                        <h2 className="p-2 px-3 bg-[#fff] rounded border-none text-[13px] font-[600] text-[#282d47] hover:bg-[#0773b3] hover:text-[#fff] transition duration-300">
                        Call Center Services</h2>
                    </Link>
                    <Link to={''} className= ''>
                        <h2 className="p-2 px-3 bg-[#fff] rounded border-none text-[13px] font-[600] text-[#282d47] hover:bg-[#0773b3] hover:text-[#fff] transition duration-300">
                        Change</h2>
                    </Link>
                </div> 
                <div className='flex mt-2 space-x-3'>
                    <Link to={''} className= ''>
                        <h2 className="p-2 px-3 bg-[#fff] rounded border-none text-[13px] font-[600] text-[#282d47] hover:bg-[#0773b3] hover:text-[#fff] transition duration-300">
                        Customer Service</h2>
                    </Link>
                </div> 
                <div className='flex mt-2 space-x-3'>
                    <Link to={''} className= ''>
                        <h2 className="p-2 px-3 bg-[#fff] rounded border-none text-[13px] font-[600] text-[#282d47] hover:bg-[#0773b3] hover:text-[#fff] transition duration-300">
                        Customer Service</h2>
                    </Link>
                    <Link to={''} className= ''>
                        <h2 className="p-2 px-3 bg-[#fff] rounded border-none text-[13px] font-[600] text-[#282d47] hover:bg-[#0773b3] hover:text-[#fff] transition duration-300">
                        experts</h2>
                    </Link>
                </div> 
                <div className='flex mt-2 space-x-3'>
                    <Link to={''} className= ''>
                        <h2 className="p-2 px-3 bg-[#fff] rounded border-none text-[13px] font-[600] text-[#282d47] hover:bg-[#0773b3] hover:text-[#fff] transition duration-300">
                        expo</h2>
                    </Link>
                    <Link to={''} className= ''>
                        <h2 className="p-2 px-3 bg-[#fff] rounded border-none text-[13px] font-[600] text-[#282d47] hover:bg-[#0773b3] hover:text-[#fff] transition duration-300">
                        expobags</h2>
                    </Link>
                </div> 
                <div className='flex mt-2 space-x-3'>
                    <Link to={''} className= ''>
                        <h2 className="p-2 px-3 bg-[#fff] rounded border-none text-[13px] font-[600] text-[#282d47] hover:bg-[#0773b3] hover:text-[#fff] transition duration-300">
                        Inbound call center services</h2>
                    </Link>
                </div> 
                <div className='flex mt-2 space-x-3'>
                    <Link to={''} className= ''>
                        <h2 className="p-2 px-3 bg-[#fff] rounded border-none text-[13px] font-[600] text-[#282d47] hover:bg-[#0773b3] hover:text-[#fff] transition duration-300">
                        internationalpizzaexpo</h2>
                    </Link>
                </div> 
                <div className='flex mt-2 space-x-3'>
                    <Link to={''} className= ''>
                        <h2 className="p-2 px-3 bg-[#fff] rounded border-none text-[13px] font-[600] text-[#282d47] hover:bg-[#0773b3] hover:text-[#fff] transition duration-300">
                        loyaltyprogram</h2>
                    </Link>
                </div> 
                <div className='flex mt-2 space-x-3'>
                    <Link to={''} className= ''>
                        <h2 className="p-2 px-3 bg-[#fff] rounded border-none text-[13px] font-[600] text-[#282d47] hover:bg-[#0773b3] hover:text-[#fff] transition duration-300">
                        Medical center</h2>
                    </Link>
                    <Link to={''} className= ''>
                        <h2 className="p-2 px-3 bg-[#fff] rounded border-none text-[13px] font-[600] text-[#282d47] hover:bg-[#0773b3] hover:text-[#fff] transition duration-300">
                        Order Taking</h2>
                    </Link>
                </div> 
                <div className='flex mt-2 space-x-3'>
                    <Link to={''} className= ''>
                        <h2 className="p-2 px-3 bg-[#fff] rounded border-none text-[13px] font-[600] text-[#282d47] hover:bg-[#0773b3] hover:text-[#fff] transition duration-300">
                        Outsourcing</h2>
                    </Link>
                    <Link to={''} className= ''>
                        <h2 className="p-2 px-3 bg-[#fff] rounded border-none text-[13px] font-[600] text-[#282d47] hover:bg-[#0773b3] hover:text-[#fff] transition duration-300">
                        Personalization</h2>
                    </Link>
                </div> 
                <div className='flex mt-2 space-x-3'>
                    <Link to={''} className= ''>
                        <h2 className="p-2 px-3 bg-[#fff] rounded border-none text-[13px] font-[600] text-[#282d47] hover:bg-[#0773b3] hover:text-[#fff] transition duration-300">
                        Pizza</h2>
                    </Link>
                    <Link to={''} className= ''>
                        <h2 className="p-2 px-3 bg-[#fff] rounded border-none text-[13px] font-[600] text-[#282d47] hover:bg-[#0773b3] hover:text-[#fff] transition duration-300">
                        PizzaExpo</h2>
                    </Link>
                </div> 
                <div className='flex mt-2 space-x-3'>
                    <Link to={''} className= ''>
                        <h2 className="p-2 px-3 bg-[#fff] rounded border-none text-[13px] font-[600] text-[#282d47] hover:bg-[#0773b3] hover:text-[#fff] transition duration-300">
                        PizzaIndustry</h2>
                    </Link>
                </div> 
                <div className='flex mt-2 space-x-3'>
                    <Link to={''} className= ''>
                        <h2 className="p-2 px-3 bg-[#fff] rounded border-none text-[13px] font-[600] text-[#282d47] hover:bg-[#0773b3] hover:text-[#fff] transition duration-300">
                        Pizza Industry Call Center</h2>
                    </Link>
                </div> 
                <div className='flex mt-2 space-x-3'>
                    <Link to={''} className= ''>
                        <h2 className="p-2 px-3 bg-[#fff] rounded border-none text-[13px] font-[600] text-[#282d47] hover:bg-[#0773b3] hover:text-[#fff] transition duration-300">
                        pizzaorder</h2>
                    </Link>
                    <Link to={''} className= ''>
                        <h2 className="p-2 px-3 bg-[#fff] rounded border-none text-[13px] font-[600] text-[#282d47] hover:bg-[#0773b3] hover:text-[#fff] transition duration-300">
                        PizzaRestaurant</h2>
                    </Link>
                </div> 
                <div className='flex mt-2 space-x-3'>
                    <Link to={''} className= ''>
                        <h2 className="p-2 px-3 bg-[#fff] rounded border-none text-[13px] font-[600] text-[#282d47] hover:bg-[#0773b3] hover:text-[#fff] transition duration-300">
                        Productivity</h2>
                    </Link>
                    <Link to={''} className= ''>
                        <h2 className="p-2 px-3 bg-[#fff] rounded border-none text-[13px] font-[600] text-[#282d47] hover:bg-[#0773b3] hover:text-[#fff] transition duration-300">
                        QSR</h2>
                    </Link>
                </div>
                <div className='flex mt-2 space-x-3'>
                    <Link to={''} className= ''>
                        <h2 className="p-2 px-3 bg-[#fff] rounded border-none text-[13px] font-[600] text-[#282d47] hover:bg-[#0773b3] hover:text-[#fff] transition duration-300">
                        QSRcallcenter</h2>
                    </Link>
                    <Link to={''} className= ''>
                        <h2 className="p-2 px-3 bg-[#fff] rounded border-none text-[13px] font-[600] text-[#282d47] hover:bg-[#0773b3] hover:text-[#fff] transition duration-300">
                        QSR Customers</h2>
                    </Link>
                </div> 
                <div className='flex mt-2 space-x-3'>
                    <Link to={''} className= ''>
                        <h2 className="p-2 px-3 bg-[#fff] rounded border-none text-[13px] font-[600] text-[#282d47] hover:bg-[#0773b3] hover:text-[#fff] transition duration-300">
                        QSRIndustry</h2>
                    </Link>
                    <Link to={''} className= ''>
                        <h2 className="p-2 px-3 bg-[#fff] rounded border-none text-[13px] font-[600] text-[#282d47] hover:bg-[#0773b3] hover:text-[#fff] transition duration-300">
                        QSRstaffing</h2>
                    </Link>
                </div>  
                <div className='flex mt-2 space-x-3'>
                    <Link to={''} className= ''>
                        <h2 className="p-2 px-3 bg-[#fff] rounded border-none text-[13px] font-[600] text-[#282d47] hover:bg-[#0773b3] hover:text-[#fff] transition duration-300">
                        Restaurant</h2>
                    </Link>
                </div> 
                <div className='flex mt-2 space-x-3'>
                    <Link to={''} className= ''>
                        <h2 className="p-2 px-3 bg-[#fff] rounded border-none text-[13px] font-[600] text-[#282d47] hover:bg-[#0773b3] hover:text-[#fff] transition duration-300">
                        Restaurant Industry</h2>
                    </Link>
                </div> 
                <div className='flex mt-2 space-x-3'>
                    <Link to={''} className= ''>
                        <h2 className="p-2 px-3 bg-[#fff] rounded border-none text-[13px] font-[600] text-[#282d47] hover:bg-[#0773b3] hover:text-[#fff] transition duration-300">
                        Restaurants</h2>
                    </Link>
                    <Link to={''} className= ''>
                        <h2 className="p-2 px-3 bg-[#fff] rounded border-none text-[13px] font-[600] text-[#282d47] hover:bg-[#0773b3] hover:text-[#fff] transition duration-300">
                        ROI</h2>
                    </Link>
                    <Link to={''} className= ''>
                        <h2 className="p-2 px-3 bg-[#fff] rounded border-none text-[13px] font-[600] text-[#282d47] hover:bg-[#0773b3] hover:text-[#fff] transition duration-300">
                        Sales</h2>
                    </Link>
                </div> 
                <div className='flex mt-2 space-x-3'>
                    <Link to={''} className= ''>
                        <h2 className="p-2 px-3 bg-[#fff] rounded border-none text-[13px] font-[600] text-[#282d47] hover:bg-[#0773b3] hover:text-[#fff] transition duration-300">
                        Staffing</h2>
                    </Link>
                </div> 
                <div className='flex mt-2 space-x-3'>
                    <Link to={''} className= ''>
                        <h2 className="p-2 px-3 bg-[#fff] rounded border-none text-[13px] font-[600] text-[#282d47] hover:bg-[#0773b3] hover:text-[#fff] transition duration-300">
                        telemarketing service</h2>
                    </Link>
                </div> 
                <div className='flex mt-2 space-x-3'>
                    <Link to={''} className= ''>
                        <h2 className="p-2 px-3 bg-[#fff] rounded border-none text-[13px] font-[600] text-[#282d47] hover:bg-[#0773b3] hover:text-[#fff] transition duration-300">
                        Telemarketing services</h2>
                    </Link>
                </div> 
                <div className='flex mt-2 space-x-3'>
                    <Link to={''} className= ''>
                        <h2 className="p-2 px-3 bg-[#fff] rounded border-none text-[13px] font-[600] text-[#282d47] hover:bg-[#0773b3] hover:text-[#fff] transition duration-300">
                        TicketSales</h2>
                    </Link>
                    <Link to={''} className= ''>
                        <h2 className="p-2 px-3 bg-[#fff] rounded border-none text-[13px] font-[600] text-[#282d47] hover:bg-[#0773b3] hover:text-[#fff] transition duration-300">
                        Upselling</h2>
                    </Link>
                </div> 
                


            </div>

        </div>


        </div>
    </div>
  )
}

export default BlogsInner