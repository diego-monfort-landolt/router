import React from 'react'
import '../stylesheet/scroll.css'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import Cards from './Cards'




const scroll = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Sticky(), Move())


  return (
    <>
      <div className='about-title'>
        <h2 className='scrotitl'>Abaut</h2>


        <ScrollContainer>
          <ScrollPage page={0}>
            <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
              <h3>React - Vite</h3>
            </Animator>
          </ScrollPage>

          <ScrollPage page={1}>
            <Animator animation={ZoomInScrollOut}>
              <h2>JavaScript</h2>
            </Animator>
          </ScrollPage>


          <ScrollPage page={2}>
            <Animator animation={FadeUp}>
              <h3>HTML & CSS</h3>
            </Animator>
          </ScrollPage>

          <ScrollPage page={3}>
            <div className='scroll-section-3'>
              <h2>
                <Animator animation={MoveIn(-1000, 0)}>Hy there...</Animator>
                <Animator animation={MoveIn(1000, 0)}> Nice to Meet You</Animator>
                <Animator animation={MoveOut(1000, 0)}> we see us...</Animator>
                <Animator animation={MoveOut(-1000, 0)}> ¡ Have a nice Day ! Enjoy...</Animator>
              </h2>
            </div>

          </ScrollPage>
        </ScrollContainer>





      </div>


    </>
  )
}

export default scroll