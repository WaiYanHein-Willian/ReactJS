import React from 'react'
import PropTypes from 'prop-types'
import Botton from './Botton'


const Header = ({title,onAdd,onShow}) => {
  return (
    <header>
      <h1>{title}</h1>
      <Botton color={onShow?"red":'aqua'} text={onShow?"Close":"Add"} onClick={onAdd}/>
    </header>
  )
}

Header.defaultProps={
    title:"Task Traker"
}
Header.propTypes={
    title:PropTypes.string.isRequired
}

export default Header
