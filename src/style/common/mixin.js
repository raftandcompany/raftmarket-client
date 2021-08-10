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
