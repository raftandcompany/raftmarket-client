import styled, { keyframes, css } from 'styled-components';

const emBase = 16;
const vwBase = 720; //width

function stripUnits($val) {
	return ($val / ($val * 0 + 1));
}

export function rem($pxval) {
	$pxval = stripUnits($pxval);
	let $base = emBase;
	$base = stripUnits($base);
	return ($pxval / $base) * 1 + 'rem';
}

export const radiusBox = css`
	${props => {
		let height = props.height || 52;
		let radius = props.radius || 12;
		let fontSize = props.fontSize || 16;
		return `
		padding-left: ${rem(16)};
	    padding-right: ${rem(16)};
		height:${rem(height)};
		line-height:${rem(height)};
		border-radius: ${rem(radius)};
		font-size: ${rem(fontSize)};
		`
	}};
`;

/* height: ${props => rem(props.height)};
line-height: ${props => rem(props.height)};
border-radius: ${props => rem(props.radius)}; */
// import { createGlobalStyle } from "styled-components";
//
// const GlobalStyle = createGlobalStyle`
// 	$em-base: 16px !default;
// 	$vw-base: 720 !default; //width
//
// 	@function strip-units($val) {
// 		@return ($val / ($val * 0 + 1));
// 	}
//
// 	@function rem($pxval) {
// 		@if not unitless($pxval) {
// 			$pxval: strip-units($pxval);
// 		}
// 		$base: $em-base;
// 		@if not unitless($base) {
// 			$base: strip-units($base);
// 		}
// 		@return ($pxval / $base) * 1rem;
// 	}
//
// 	@mixin flex($direction: 'row', $align: 'center', $justify: 'center') {
// 		display: flex;
// 		flex-direction: $direction;
// 		align-items: $align;
// 		justify-content: $justify;
// 	}
// `;
// export default GlobalStyle;
