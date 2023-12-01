import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticleBack = () => {
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: '#000000',
                    },
                    fpsLimit: 40,
                    interactivity: {
                        detectsOn: 'canvas',
                        events: {
                            resize: true,
                        },
                    },
                    particles: {
                        color: {
                            value: '#f1f1f1',
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 1080,
                            },
                            limit: 0,
                            value: 300,
                        },
                        opacity: {
                            animation: {
                                enable: true,
                                minimumValue: 0.1, // Adjust the minimum opacity value
                                speed: 1,
                                sync: false,
                            },
                            random: {
                                enable: true,
                                minimumValue: 0.1,
                            },
                            value: 1,
                        },
                        shape: {
                            type: 'circle',
                        },
                        size: {
                            random: {
                                enable: true,
                                minimumValue: 1,
                            },
                            value: 3,
                        },
                    },
                }}
            />
        </div>
    );
};

export default ParticleBack;
