import styles from "./expertise.module.css";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import CountUp from "react-countup";

import { useSpring } from "react-spring";
const Expertise = () => {
  return (
    <>
      <div
        className={`${styles["bg-expertise"]} overflow-clip max-h-[700px] py-[80px]  text-[#DBDBDB]`}
      >
        <div
          className={`${styles.container} max-w-screen-xl md:max-w-screen-lg mx-auto px-[2rem]`}
        >
          <div className={`grid grid-cols-1  gap-5`}>
            <div className="md:col-span-2 col sm:col-span-2 flex flex-col justify-center">
              <div className="mb-[40px] sm:mb-[80px] text-center">
                <h2 className="text-4xl	font-bold mb-2	text-[#f5f5f5]">
                  {"The Hub of Expertise"}
                </h2>
                <p className=" leading-[22px]">
                  We are here to build edge and bring technology brilliance with
                  the finest in the industry. Driving the innovation path, we
                  develop better results for businesses across the globe.
                </p>
              </div>
              <div className="w-full mx-auto text-center">
                <div className="mx-auto text-center flex flex-col sm:flex-row justify-around items-center sm:items-start">
                  <div className="  mb-5 md:mb-0">
                    <h4 className="text-5xl font-bold text-[#f5f5f5]">
                      <CountUp
                        end={50}
                        duration={2}
                        separator=" "
                        suffix=" +"
                      />
                    </h4>
                    <p className="">
                      <span className="text-[#b2c8f8]">Countries</span> where we have trusted clients
                    </p>
                  </div>
                  <div className="  mb-5 md:mb-0">
                    <h4 className="text-5xl font-bold text-[#f5f5f5]">
                      <CountUp
                        end={10.31}
                        decimals={2}
                        duration={2}
                        separator=" "
                        suffix=" +"
                      />
                    </h4>
                    <p className="">
                      Billions in Total{" "}
                      <span className="text-[#b2c8f8]">Revenue</span>
                    </p>
                  </div>
                  <div className="  mb-5 md:mb-0">
                    <h4 className="text-5xl font-bold text-[#f5f5f5]">
                      <CountUp
                        end={500}
                        duration={2}
                        separator=" "
                        suffix=" +"
                      />
                    </h4>
                    <p className="pr-2">
                      <span className="text-[#b2c8f8]">Employees</span> all over
                      the globe
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="hidden relative sm:block">
                <Cobe />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export function Cobe() {
  const canvasRef = useRef();
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);
  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));
  useEffect(() => {
    let phi = 0;
    let width = 0;
    const onResize = () =>
      canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener("resize", onResize);
    onResize();
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 1500 * 2,
      height: 1500 * 2,
      phi: 0,
      theta: 0.25,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 30000,
      mapBrightness: 6,
      baseColor: [1, 0.5, 3],
      markerColor: [0.1, 0.8, 1], // Customize marker color here
      glowColor: [1, 1, 2],
      opacity:1,
      offset: [0,0],
      markers: [
        // longitude latitude
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.\
        state.phi = phi;
        phi += 0.003;
      },
    }); 
    return () => globe.destroy();
  }, []);
  return (
    <div className="App flex items-center justify-center z-[10]">
      <canvas
        ref={canvasRef}
        style={{ width: '1500px', height: '1500px', maxWidth: '200%', aspectRatio: '1', top: '1em',
        position: 'relative',
        right: '0',
        left: '-5em',
        transform: 'translateX(5em)' }}
      />
    </div>
  );
}

export default Expertise;