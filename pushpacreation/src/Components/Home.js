import React from 'react'
import Benifits from '../Pages/Home/Benifits'
import Hero from "../Pages/Home/Hero"
import Homeabout from '../Pages/Home/Homeabout'
import Points from '../Pages/Home/Points'
import Shopbycategory from '../Pages/Home/Shopbycategory'
import "../Pages/Style.css"
export default function Home() {
    useEffect(
		() => {
            window.scrollTo(0, 0);
		},
		[]
	);
    return (
        <div className='padding-top-50px'>
<Hero />
<Benifits />
<Homeabout />
<Shopbycategory />
<Points />
        </div>
    )
}
