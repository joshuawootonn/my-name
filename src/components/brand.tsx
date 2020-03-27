import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: absolute;
    bottom: 16px;
    left: 16px;
    display: flex;
    flex-direction: row;
    span,
    a {
        margin-right: 16px;
    }
`;

export interface BrandProps {}

export const Brand: React.FC<BrandProps> = props => {
    return (
        <Wrapper>
            <span> Joshua Wootonn</span>{' '}
            <a href="http://www.joshuawootonn.com">website</a>
            <a href="https://github.com/joshuawootonn/my-name">github</a>
        </Wrapper>
    );
};

export default Brand;
