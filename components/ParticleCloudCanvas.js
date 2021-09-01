import React, { useEffect } from 'react'
import Particles from 'react-tsparticles'
import styles from './ParticleCloudCanvas.module.css'

const particleStyle = {
  position: 'relative',
  width: '100%',
  height: '100vh',
  top: 0
}

export default function ParticleCloudCanvas() {

  return (
    <>
      <Particles
        style={particleStyle}
        className={styles['particle-wrapper']}
        options={{
          fpsLimit: 60,
          particles: {
            color: {
              value: [
                '#ff0000',
                '#0000ff',
              ]
            },
            links: {
              enable: false,
              color: '#ffffff',
              distance: 150,
              opacity: 0.5,
              width: 1
            },
            collisions: {
              enable: false
            },
            move: {
              enable: true,
              direction: 'none',
              outModes: {
                default: 'out',
                bottom: 'bounce'
              },
              random: true,
              speed: 0.6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800
              },
              value: 5
            },
            opacity: {
              value: 0.1
            },
            shape: {
              type: 'circle'
            },
            size: {
              random: {
                enable: true,
                minimumValue: 150,
              },
              value: 300
            },
            shadow: {
              enable: true,
              blur: 100,
              color: {
                value: [
                  '#000000',
                  '#ff0000',
                  '#0000ff',
                ]
              },
              // offset: {
              //   x: 50,
              //   y: 50
              // }
            }
          },
          detectRetina: true
        }}
      />
    </>
  )
}

  // // {
  // //   speed: 0.2,
  // //   maxParticles: 100,
  // //   selector: ".particles",
  // //   color: ["#f58220", "#d28645", "#dddddd"],
  // //   connectParticles: true,
  // // }

  // useEffect(() => {
  //   const particleConfig = {
  //     selector: '.particles',
  //     maxParticles: 10,
  //     sizeVariations: 500,
  //     speed: 0.5,
  //     color: [
  //       '#ff0000',
  //       '#00ff00',
  //       '#0000ff',
  //     ],
  //     minDistance: 20,
  //     connectParticles: false,
  //     responsive: [
  //       {
  //         breakpoint: 300,
  //         options: {
  //           color: '#ff0000',
  //           maxParticles: 200,
  //         },
  //       },
  //       {
  //         breakpoint: 600,
  //         options: {
  //           color: "#00ff00",
  //           maxParticles: 600,
  //         },
  //       },
  //     ],
  //   }

  //   const instance = new ParticleCloud(particleConfig)
  //   instance.start()

  //   return () => instance.destroy()
  // }, [])

  // return <canvas className="particles"></canvas>