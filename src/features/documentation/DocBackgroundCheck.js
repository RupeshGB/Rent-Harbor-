import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { setPageTitle, showNotification } from "../common/headerSlice"
import BackgroundCheckContent from "./components/BackgroundCheckContent"



function BackgroundCheck(){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Documentation"}))
      }, [])


      const propertyIds = [1, 2, 3]; // IDs of the properties

      return (
          <>
          <article className="prose" style={{ marginBottom: '20px' }}>
              <h1>Background Checks</h1>
          </article>
  
          {propertyIds.map((propertyId) => (
              <BackgroundCheckContent key={propertyId} propertyId={propertyId} />
          ))}
          </>
      );
}

export default BackgroundCheck