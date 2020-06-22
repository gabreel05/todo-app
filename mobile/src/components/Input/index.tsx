import React, { useRef, useEffect } from 'react'
import { TextInput } from 'react-native'
import { useField } from '@unform/core'

interface InputInterface {
  name: string
  label?: string
}

type Props = JSX.IntrinsicElements['input'] & InputInterface

const Input: React.FC<Props> = ({ name, label, ...rest }) => {
  const inputRef = useRef<TextInput>(null)

  const { fieldName, defaultValue, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <>
      { label && <label htmlFor={fieldName}>{label}</label> }

      <TextInput
        ref={inputRef}
        id={fieldName}
        defaultValue={defaultValue}
        {...rest}
      />

      { error && <span>{error}</span> }
    </>
  )
}

export default Input
