import { useEffect, useState } from 'react';
import data from '../../data.json'

import './navBar_style.scss'
export const NavBar = () => {
    const [navsStyle, setNavsStyle] = useState([])
    const [Navs, setNavs] = useState(null)
    const [scroll, setScroll] = useState(0)
    useEffect(() => {
      const handleScroll = event => {
  
        setScroll(window.scrollY)
        // console.log('window.scrollY', window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    useEffect(()=>{
        setNavs(data.Navs)
    },[])

    useEffect(()=> {
        
        if (Navs) {
            const tmp = []
            Navs.forEach(() =>{ 
                tmp.push("notActiveNav")
            })
            tmp[0] = "ActiveNav"
        setNavsStyle(tmp)
        }
       
    },[Navs])
   

    const markActive = (index) => {
        const tmp = navsStyle
        
        tmp.forEach((s, i) => {
            tmp[i] = i !== index ? "notActiveNav" : "ActiveNav";
        })

        setNavsStyle([...tmp])

    }

    
    return ( 
        <div className={`navBar ${scroll > 0? "navShadow" : ""}`}>
            <div className="name">
                <p>{data.Pseudo.String}</p>
            </div>

            <div className="navs">
                {
                    Navs && Navs.map((nav, i) => {
                        return ( <div key={i} className={`nav`} onClick={()=>{
                            markActive(i)
                        }}>
                                    <p className={navsStyle[i]}>
                                    <a href={nav.Link}>{nav.Name}</a>
                                    </p>
                                </div> 
                            )
                    })
                }
            </div>

            <div className="contactBtn">
                <a href="#Contact"><button>Contact</button></a> 
            </div>
        </div>
     );
}
