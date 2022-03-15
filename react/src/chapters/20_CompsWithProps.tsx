import React from 'react';

interface HeadingProps {
  title: string
}

// props = HeadingProps by no children accesible
// return type = JSX.Element
const Heading = (props: HeadingProps) => {
  return (
    <h2>{props.title}</h2>
  )
}
// return type = JSX.Element

// When declared with React.FC, props have children in-built
const Box: React.FC = (props) => {
  return (
    <div style={{ padding: '1rem', fontWeight: 'bold' }}>
      {props.children}
    </div>
  )
}
// return type = React.FC<{}>

// React.FC<HeadingProps> will merge HeadingProps and children prop
const Heading2: React.FC<HeadingProps> = (props) => {
  return (
    <h2>{props.title}</h2>
  )
}
// return type = React.FC<HeadingProps>


// EXPORTER
const CMP = () => {
  return (
    <>
      <Heading title="Jassi" />
      <Heading2 title="Happy" />
      <Box>
        <div>Some children</div>
      </Box>
    </>
  )
}

export default CMP;