import moment from "moment"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../components/Cards/TitleCard"
import { openModal } from "../common/modalSlice"
import { deleteLead, getLeadsContent } from "./leadSlice"
import { CONFIRMATION_MODAL_CLOSE_TYPES, MODAL_BODY_TYPES } from '../../utils/globalConstantUtil'
import TrashIcon from '@heroicons/react/24/outline/TrashIcon'
import { showNotification } from '../common/headerSlice'

const TopSideButtons = () => {

    const dispatch = useDispatch()

    const openAddNewLeadModal = () => {
        dispatch(openModal({title : "Add New Lead", bodyType : MODAL_BODY_TYPES.LEAD_ADD_NEW}))
    }

    return(
        <div className="inline-block float-right">
            <button className="btn px-6 btn-sm normal-case btn-base-200" onClick={() => openAddNewLeadModal()}>Add New</button>
        </div>
    )
}

function Leads(){

    const {leads } = useSelector(state => state.lead)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getLeadsContent())
    }, [])

    const getDummyStatus = (index) => {
        if(index % 5 === 0)return <div className="badge">Not Interested</div>
        else if(index % 5 === 1)return <div className="badge badge-primary">In Progress</div>
        else if(index % 5 === 2)return <div className="badge badge-secondary">Sold</div>
        else if(index % 5 === 3)return <div className="badge badge-accent">Need Followup</div>
        else return <div className="badge badge-ghost">Open</div>
    }

    const getDummyProperty = (index) => {
        if(index % 4 === 0)return "Airbnb"
        else if(index % 4 === 1)return "Vrbo"
        else if(index % 4 === 2)return "Apartments"
        else return "Zillow"
    }

    const deleteCurrentLead = (index) => {
        dispatch(openModal({title : "Confirmation", bodyType : MODAL_BODY_TYPES.CONFIRMATION, 
        extraObject : { message : `Are you sure you want to delete this lead?`, type : CONFIRMATION_MODAL_CLOSE_TYPES.LEAD_DELETE, index}}))
    }

    let dummyLeads = [
        {name : "Alex Smith", email : "alex@gmail.com", location : "Atlanta", amount : 1250, date : moment().endOf('day')},
        {name : "Ereena Njigba", email : "ereena@gmail.com", location : "Atlanta", amount : 1300, date : moment().add(-1, 'd').endOf('day')},
        {name : "John Doe", email : "jhon@gmail.com", location : "Alpharetta", amount : 975, date : moment().add(-1, 'd').endOf('day')},
        {name : "AJ Brown", email : "matrix@gmail.com", location : "Decatur", amount : 1039, date : moment().add(-1, 'd').endOf('day')},
        {name : "Garrett Wilson", email : "virat@gmail.com", location : "Atlanta", amount : 1150, date : moment().add(-2, 'd').endOf('day')},
        {name : "Miya Monroe", email : "miya@gmail.com", location : "Suwanee", amount : 1000, date : moment().add(-2, 'd').endOf('day')},
        {name : "Virat Patel", email : "virat@gmail.com", location : "Alpharetta", amount : 950, date : moment().add(-2, 'd').endOf('day')},
    ]

    return(
        <>
            
            <TitleCard title="Current Leads" topMargin="mt-2" TopSideButtons={<TopSideButtons />}>

            {/* Leads List in table format loaded from slice after api call */}
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email Id</th>
                        <th>Property</th>
                        <th>Status</th>
                        <th>Platform</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            dummyLeads.map((l, k) => {
                                return(
                                    <tr key={k}>
                                    <td>  <div className="font-bold">{l.name}</div> </td>
                                    <td>{l.email}</td>
                                    <td>{Math.floor(Math.random() * 4) + 1}</td>
                                    <td>{getDummyStatus(k)}</td>
                                    <td>{getDummyProperty(k)}</td>
                                    <td><button className="btn btn-square btn-ghost" onClick={() => deleteCurrentLead(k)}><TrashIcon className="w-5"/></button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            </TitleCard>
        </>
    )
}


export default Leads