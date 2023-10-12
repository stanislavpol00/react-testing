import React from 'react'

const Header = (props) => {

  const { classes } = props;

  return (
    <div>
      <div position='static'>
        <div>
          <div edge='start' color='inherit' aria-label='menu' data-testid='menu-icon'>
            List todo task with Jest
          </div>
          <div variant='h6' data-testid='menu-title'>Unit Testing with Jest and Enzyme</div>
        </div>
      </div>
    </div>
  )
}
export default Header;