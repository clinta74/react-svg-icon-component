import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
export const Icon = ({ icon, padded, large, props }) => {
    const StyledSVG = styled.svg `
    fill: currentColor;
    display: inline-block;
    font-size: inherit;
    height: 1em;
    overflow: visible;
    vertical-align: -.125em;

    &.icon-100 {
        height: auto;
        width: auto;
        vertical-align: inherit;
    }

    &.icon-lg {
      vertical-align: -.25em;
      font-size: 1.5em;
    }

    &.padded {
      padding: 0 .25em;
    }
  `;
    const { className, ...attrs } = props;
    const fullClassName = classNames(className, {
        'padded': padded,
        'icon-lg': large,
    });
    return (React.createElement(StyledSVG, Object.assign({ xmlns: "http://www.w3.org/2000/svg", height: icon.height, width: icon.width, viewBox: `0 0 ${icon.width} ${icon.height}`, className: fullClassName }, attrs), icon.paths.map((path, index) => React.createElement("path", { key: index, d: path }))));
};
//# sourceMappingURL=icon.js.map