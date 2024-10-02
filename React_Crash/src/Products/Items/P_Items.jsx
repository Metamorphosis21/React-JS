/* eslint-disable react/prop-types */

export function P_Items({singleproduct}) {  // {singleproduct , key} - here key is taken as attribute rather than prop
  return (
    <div className='productItems'>
        {singleproduct} (Child_Comp)
    </div>
  )
}

