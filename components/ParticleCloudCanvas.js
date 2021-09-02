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
                // '#ff0000',
                // '#0000ff',
                '#fff'
              ]
            },
            links: {
              enable: true,
              color: '#000000',
              distance: 300,
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
                default: 'bounce',
                bottom: 'bounce'
              },
              random: true,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 500
              },
              // value: 250
              value: 50,
              limit: 25
            },
            opacity: {
              value: 1
            },
            shape: {
              type: 'circle'
            },
            size: {
              random: {
                enable: true,
                minimumValue: 1,
              },
              value: 1
            },
            shadow: {
              enable: false,
              blur: 100,
              color: {
                value: [
                  '#000000',
                  '#ff0000',
                  '#0000ff',
                ]
              },
            }
          },
          detectRetina: true
        }}
      />
    </>
  )
}