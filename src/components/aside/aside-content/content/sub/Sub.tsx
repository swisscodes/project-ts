import React from 'react'

function Sub({data, currentObj, subState}:any) {
  return (
    <>
    <div className={subState && currentObj === data.id?`${'show'}`:`${'dont_show'}`}>Sub</div>
    </>
  )
}

export default Sub