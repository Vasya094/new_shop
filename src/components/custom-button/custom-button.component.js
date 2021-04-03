//import './custom-button.styles.scss'
import { CustomButtonConteiner} from './custom-button.styles.js'

import React from 'react'

const CustomButton = ({children, ...props}) => {
  return (
    <CustomButtonConteiner  {...props}>
      {children}
    </CustomButtonConteiner>
  )
}

export default CustomButton


// import './custom-button.styles.scss'

// import React from 'react'

// const CustomButton = ({children, isGoogleSignIn , inverted, ...otherProps}) => {
//   return (
//     <button className={`${inverted ? 'inverted' : isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
//       {children}
//     </button>
//   )
// }

// export default CustomButton