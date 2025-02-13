// Copyright (c) 2017-present Mattermost, Inc. All Rights Reserved.
// See License for license information.

import React, {FC} from 'react';
import styled from 'styled-components';

const WavesSVG = styled.svg`
    position: absolute;
    left: 0;
    bottom: -20%;
    width: 100%;
    max-height: 70%;
    height: auto;
    opacity: 0.03;
    pointer-events: none;

    stop {
        stop-color: var(--button-bg);
    }
`;

const Waves = () => (
    <WavesSVG
        width='1600'
        height='675'
        viewBox='0
                0
                1600
                675'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <g>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M-328.894 1545L2000 806.085L1772.96 160.622C1772.96 160.622 1728.64 208.825 1602.89 208.825C1499.41 208.825 1340.82 176.206 1106.34 57.2482C1028.41 17.7131 956.621 0.889771 890.133 0.889771C513.438 0.889771 306.902 540.865 118.514 549.788C-103.126 560.287 -398.809 1316.59 -398.809 1316.59L-328.894 1545Z'
                fill='url(#Backstage__waves__gradient)'
            />
        </g>
        <defs>
            <linearGradient
                x1='800.595'
                y1='684.11'
                x2='800.595'
                y2='0.889608'
                gradientUnits='userSpaceOnUse'
                id='Backstage__waves__gradient'
            >
                <stop
                    stopOpacity='0'
                />
                <stop
                    offset='1'
                />
            </linearGradient>
        </defs>
    </WavesSVG>
);

export default Waves;
