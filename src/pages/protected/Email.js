import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import EmailMockup from '../../features/email'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Inbox"}))
      }, [])


    return(
        <EmailMockup />
    )
}

export default InternalPage