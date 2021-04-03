import React from 'react'
import { FormInputContainer, FormInputLabel, GroupContainer } from './form-input.styles'

export const FormInput = ({handleChange, label, ...otherProps}) => {
  return (
    <GroupContainer>
      <FormInputContainer type="text" onChange={handleChange} {...otherProps} />
      {
        label ? (<FormInputLabel className={`${ otherProps.value.length ? 'shrink' : '' } form-input-label`}>
          {label}
        </FormInputLabel>) : null
      }
      
    </GroupContainer>
  )
}
