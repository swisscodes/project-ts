import React from 'react'

function Sub({data, currentObj, subState}:any) {
  return (
    <>
    {currentObj === data.id && <div className={subState?`${'show'}`:`${'dont_show'}`}>Sub</div> }
    </>
  )
}

export default Sub