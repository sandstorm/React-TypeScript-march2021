import React from 'react'

export type Props = {
  footer: React.ReactNode
  header: React.ReactNode
  children?: React.ReactNode
}
const ComponentWithChildren = (props: Props) => {
  return (
    <div>
      {props.header}
      {props.children}
      {props.footer}
    </div>
  )
}

export default React.memo(ComponentWithChildren)
