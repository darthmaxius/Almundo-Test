import React from 'react'

function Logo (props) {
  const styleLogo = {
    fill: '#FF8300'
  }

  const styleTextWhite = {
    fill: '#FFFFFF'
  }

  const canvasLogo = `M169.567,27.851c-1.333,0-2.416,1.08-2.416,2.415c0,1.332,1.083,2.411,2.416,2.411
  s2.413-1.079,2.413-2.411C171.98,28.931,170.9,27.851,169.567,27.851z M19.833,5.167C9.431,5.167,1,13.599,1,24
  c0,10.399,8.431,18.834,18.833,18.834c10.401,0,18.831-8.435,18.831-18.834C38.664,13.599,30.234,5.167,19.833,5.167z
   M223.861,15.338c-2.024,0-3.838,0.832-5.107,2.343l-0.146,0.175l-0.144-0.178c-1.202-1.508-3.075-2.339-5.163-2.339
  c-4.262,0-7.301,3.043-7.301,7.402V32h4v-9.359c0-2.012,1.566-3.419,3.562-3.419c2.941,0,3.438,2.391,3.438,3.419V32h3v-9.359
  c0-2.012,1.555-3.419,3.551-3.419c3.052,0,3.449,2.615,3.449,3.419V32h4v-9.26C231,18.245,228.196,15.338,223.861,15.338z
   M196.428,15.372c-4.642,0-8.421,3.898-8.421,8.69c0,4.79,3.779,8.69,8.421,8.69c4.646,0,8.426-3.9,8.426-8.69
  C204.854,19.27,201.074,15.372,196.428,15.372z M196.428,28.816c-2.546,0-4.615-2.133-4.615-4.754c0-2.623,2.069-4.754,4.615-4.754
  c2.548,0,4.619,2.131,4.619,4.754C201.047,26.684,198.976,28.816,196.428,28.816z M179.971,29.185
  c-2.434,0-4.413-2.269-4.413-5.063c0-2.851,1.979-5.219,4.413-5.219c1.653,0,2.951,1.098,3.538,2.098h4.155
  c-1.001-4-3.86-5.713-7.693-5.713c-4.747,0-8.324,3.791-8.324,8.779c0,4.955,3.577,8.691,8.324,8.691
  c3.861,0,6.731-1.758,7.727-5.758h-4.152C182.899,28,181.449,29.185,179.971,29.185z`

  const canvasText = `M90.69,15.338c-2.022,0-3.921,0.832-5.19,2.343l-0.191,0.175l-0.161-0.178
  c-1.204-1.508-2.919-2.339-5.007-2.339c-4.261,0-7.142,3.043-7.142,7.402V32h4v-9.359c0-2.012,1.07-3.419,3.064-3.419
  c2.941,0,2.936,2.391,2.936,3.419V32h4v-9.359c0-2.012,1.553-3.419,3.548-3.419c3.055,0,3.452,2.615,3.452,3.419V32h4v-9.26
  C98,18.245,95.027,15.338,90.69,15.338z M55.757,15h-0.114c-4.859,0-8.602,3.883-8.654,8.839c-0.054,4.793,3.549,8.811,7.987,8.864
  l0.173,0.039c1.42,0,2.747-0.178,3.645-0.523l0.104-0.035l-0.007-6.701l-0.268,0.404l-2.055,3.094l-0.016,0.006
  c-0.336,0.065-0.668,0.101-0.993,0.101c-1.195,0-2.276-0.454-3.124-1.312c-0.949-0.961-1.506-2.473-1.488-3.838
  C50.977,21.243,53.019,19,55.595,19h0.058c2.574,0,4.595,2.14,4.595,4.869L60.236,32h4.036l-0.008-8.136
  C64.322,18.849,60.963,15,55.757,15z M19.828,10.401c-2.982,0-5.918,1.098-8.262,3.092C6.391,17.889,5.663,25.408,9.941,30.25
  c1.483,1.672,3.073,3.072,4.284,3.632L21.419,28h-6.592l-0.044-0.129c-2.667-3.078-2.463-7.641,0.452-10.119
  c1.334-1.134,2.998-1.778,4.682-1.778c1.996,0,3.906,0.856,5.24,2.367c1.222,1.384,1.816,3.147,1.668,4.981
  c-0.147,1.833-0.722,3.391-2.299,4.723c-0.045,0.039-8.657,7.197-8.657,7.197l4.082,4.15l8.253-7.077
  c4.868-4.478,4.979-9.431,3.784-13.131C30.689,15.161,26.703,10.401,19.828,10.401z M66,32h4V10h-4V32z M145.078,23.745
  c0,2.729-2.017,5.255-4.589,5.255h-0.06c-2.575,0-4.616-2.205-4.646-4.901c-0.016-1.365,0.54-2.796,1.487-3.753
  c0.85-0.859,1.93-1.385,3.128-1.385c0.322,0,0.653,0.039,0.99,0.039h0.017l2.056,3.14l0.266,0.428l0.006-6.696l-0.104-0.189
  c-0.896-0.345-2.223-0.682-3.642-0.682h-0.176c-4.438,0-8.247,4.146-8.191,8.938c0.053,4.956,4.38,8.767,8.38,8.767v0.037
  l0.355,0.018c4.904-0.059,8.683-4.115,8.626-9.13L149.109,9h-4.038L145.078,23.745z M158.801,15.372
  c-4.646,0-8.424,3.898-8.424,8.69c0,4.79,3.778,8.69,8.424,8.69c4.643,0,8.424-3.9,8.424-8.69
  C167.225,19.27,163.443,15.372,158.801,15.372z M158.801,28.816c-2.546,0-4.614-2.133-4.614-4.754c0-2.623,2.068-4.754,4.614-4.754
  c2.545,0,4.618,2.131,4.618,4.754C163.419,26.684,161.346,28.816,158.801,28.816z M123.046,15.338
  c-4.262,0-7.046,3.043-7.046,7.402V32h4v-9.359c0-2.012,1.052-3.419,3.045-3.419c3.057,0,2.955,2.615,2.955,3.419V32h4v-9.26
  C130,18.245,127.385,15.338,123.046,15.338z M110,25.512c0,1.98-1.585,3.419-3.548,3.419c-3.054,0-3.452-2.616-3.452-3.419V16h-3
  v9.379c0,4.496,2.615,7.402,6.952,7.402c4.261,0,7.048-3.045,7.048-7.402V16h-4V25.512z`

  return (
    <svg width='232.166px' height='48px' viewBox='0 0 232.166 48'>
      <path style={styleLogo} d={canvasLogo} />
      <path style={styleTextWhite} d={canvasText} />
    </svg>
  )
}

export default Logo
