import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import PropertyProspects from '../../features/property-prospects'

function InternalPage(){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Property Prospects"}))
      }, [])
      
    return(
        <div className="">
            <PropertyProspects />
        </div>  
    )
}

export default InternalPage