// import React, { Link, Route, BrowserRouter as Router } from 'react-router-dom'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'
// import { useState } from 'react'
import './styles.css'
// import test1 from './components/test1'
// import test2 from './components/test2'
// import test3 from './components/test3'
// import test4 from './components/test4'

SwiperCore.use([Navigation, Pagination])

function App() {
  const slides = []

  for(let i = 0; i < 5; i++){
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <img src={`https://picsum.photos/id/${i+1}/500/300`} style={{ listStyle: 'none' }} alt={`Slide ${i}` } />
      </SwiperSlide>
    )
  }

  return <React.Fragment>
    <Swiper id="main" 
            tag="section" 
            wrapperTag="ul" 
            navigation 
            pagination 
            spaceBetween={0} 
            slidesPerView={1} 
            onInit={(swiper) => console.log('Swiper Initialized!')}
            onSlideChange={(swiper) => {console.log('Slide index changed to: ', swiper.activeIndex)}}
            onReachEnd={() => console.log('Swiper end reached')}
            >
      {slides}
    </Swiper>
  </React.Fragment>
  // return (
  //   <div>
  //     <div>
  //       <Router>
  //         <Link to="/test1">test1</Link>
  //         <Link to="/test2">test2</Link>
  //         <Link to="/test1">test3</Link>
  //         <Link to="/test4">test4</Link>
  //         <Route path="/test1" component={test1}/>
  //         <Route path="/test2" component={test2}/>
  //         <Route path="/test3" component={test3}/>
  //         <Route path="/test4" component={test4}/>
  //       </Router>
  //     </div>
  //   </div>
  // )
}

export default App